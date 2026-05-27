import type { SpectralClass } from "./types";

/** Map spectral class to a display color for the star */
export function spectralColor(sc: SpectralClass): string {
  switch (sc) {
    case "O": return "#9bb0ff";  // blue
    case "B": return "#aabfff";  // blue-white
    case "A": return "#cad7ff";  // white
    case "F": return "#f8f7ff";  // yellow-white
    case "G": return "#fff4ea";  // yellow
    case "K": return "#ffd2a1";  // orange
    case "M": return "#ffcc6f";  // red-orange
  }
}

/** Map spectral class to a human-readable color name */
export function spectralColorName(sc: SpectralClass): string {
  switch (sc) {
    case "O": return "Blue";
    case "B": return "Blue-white";
    case "A": return "White";
    case "F": return "Yellow-white";
    case "G": return "Yellow";
    case "K": return "Orange";
    case "M": return "Red";
  }
}

/**
 * Map apparent magnitude to a rendered radius in pixels.
 * Brighter (lower magnitude) = larger radius.
 */
export function magnitudeToRadius(mag: number, zoom: number): number {
  // Map from mag range [-1.5, 5] to radius [5, 0.8]
  const minR = 0.8;
  const maxR = 5;
  const t = Math.max(0, Math.min(1, (5 - mag) / 6.5));
  return (minR + (maxR - minR) * t) * Math.min(1.5, 0.8 + zoom * 0.2);
}

/**
 * Map apparent magnitude to an opacity.
 * Brighter = more opaque.
 */
export function magnitudeToOpacity(mag: number): number {
  const t = Math.max(0, Math.min(1, (5 - mag) / 6.5));
  return 0.4 + 0.6 * t;
}
