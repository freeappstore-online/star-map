import type { Point, ViewState } from "./types";

/** Degrees to radians */
function deg2rad(d: number): number {
  return (d * Math.PI) / 180;
}

/** Hours to radians (RA) */
function hr2rad(h: number): number {
  return (h * Math.PI) / 12;
}

/**
 * Stereographic projection from equatorial (RA, Dec) to 2D canvas coordinates.
 * Centers on the current view's RA/Dec and applies zoom.
 */
export function project(
  ra: number,
  dec: number,
  view: ViewState,
  width: number,
  height: number,
): Point | null {
  const adjustedRA = ra + view.timeOffset;

  const raRad = hr2rad(adjustedRA);
  const decRad = deg2rad(dec);
  const ra0 = hr2rad(view.centerRA + view.timeOffset);
  const dec0 = deg2rad(view.centerDec);

  // Compute angular separation for culling
  const cosDelta =
    Math.sin(dec0) * Math.sin(decRad) +
    Math.cos(dec0) * Math.cos(decRad) * Math.cos(raRad - ra0);

  // Cull points behind the sphere (> 90 degrees from center)
  if (cosDelta < 0.01) return null;

  // Stereographic projection
  const k = 2 / (1 + cosDelta);
  const projX = k * Math.cos(decRad) * Math.sin(raRad - ra0);
  const projY =
    k *
    (Math.cos(dec0) * Math.sin(decRad) -
      Math.sin(dec0) * Math.cos(decRad) * Math.cos(raRad - ra0));

  const scale = Math.min(width, height) * 0.35 * view.zoom;
  // RA increases to the left in sky, so negate X
  const x = width / 2 - projX * scale;
  const y = height / 2 - projY * scale;

  // Cull points outside canvas with some margin
  const margin = 50;
  if (x < -margin || x > width + margin || y < -margin || y > height + margin) {
    return null;
  }

  return { x, y };
}

/**
 * Inverse projection: from canvas coordinates back to RA/Dec.
 * Returns [ra (hours), dec (degrees)].
 */
export function unproject(
  px: number,
  py: number,
  view: ViewState,
  width: number,
  height: number,
): [number, number] {
  const scale = Math.min(width, height) * 0.35 * view.zoom;
  const ra0 = hr2rad(view.centerRA + view.timeOffset);
  const dec0 = deg2rad(view.centerDec);

  const projX = -(px - width / 2) / scale;
  const projY = -(py - height / 2) / scale;

  const rho = Math.sqrt(projX * projX + projY * projY);
  if (rho === 0) {
    return [view.centerRA, view.centerDec];
  }

  const c = 2 * Math.atan(rho / 2);
  const sinC = Math.sin(c);
  const cosC = Math.cos(c);

  const dec = Math.asin(cosC * Math.sin(dec0) + (projY * sinC * Math.cos(dec0)) / rho);
  const ra =
    ra0 +
    Math.atan2(
      projX * sinC,
      rho * Math.cos(dec0) * cosC - projY * Math.sin(dec0) * sinC,
    );

  let raHours = ((ra * 12) / Math.PI - view.timeOffset) % 24;
  if (raHours < 0) raHours += 24;
  const decDeg = (dec * 180) / Math.PI;

  return [raHours, decDeg];
}

/**
 * Get compass direction label positions around the edges.
 */
export function getCompassPositions(
  view: ViewState,
  width: number,
  height: number,
): { label: string; x: number; y: number }[] {
  const directions: { label: string; ra: number; dec: number }[] = [
    { label: "N", ra: view.centerRA, dec: view.centerDec + 45 / view.zoom },
    { label: "S", ra: view.centerRA, dec: view.centerDec - 45 / view.zoom },
    { label: "E", ra: view.centerRA - 3 / view.zoom, dec: view.centerDec },
    { label: "W", ra: view.centerRA + 3 / view.zoom, dec: view.centerDec },
  ];

  const results: { label: string; x: number; y: number }[] = [];
  for (const dir of directions) {
    const p = project(dir.ra, dir.dec, { ...view, timeOffset: 0 }, width, height);
    if (p) {
      // Clamp to edges
      const margin = 30;
      const x = Math.max(margin, Math.min(width - margin, p.x));
      const y = Math.max(margin, Math.min(height - margin, p.y));
      results.push({ label: dir.label, x, y });
    }
  }
  return results;
}

/**
 * Compute the angular distance in degrees between two equatorial positions.
 */
export function angularDistance(
  ra1: number,
  dec1: number,
  ra2: number,
  dec2: number,
): number {
  const ra1Rad = hr2rad(ra1);
  const dec1Rad = deg2rad(dec1);
  const ra2Rad = hr2rad(ra2);
  const dec2Rad = deg2rad(dec2);
  const cosD =
    Math.sin(dec1Rad) * Math.sin(dec2Rad) +
    Math.cos(dec1Rad) * Math.cos(dec2Rad) * Math.cos(ra1Rad - ra2Rad);
  return (Math.acos(Math.max(-1, Math.min(1, cosD))) * 180) / Math.PI;
}
