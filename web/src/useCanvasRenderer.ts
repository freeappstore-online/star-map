import { useRef, useEffect, useCallback } from "react";
import type { ViewState, Star } from "./types";
import { STARS } from "./stars";
import { CONSTELLATIONS } from "./constellations";
import { project, getCompassPositions } from "./projection";
import { spectralColor, magnitudeToRadius, magnitudeToOpacity } from "./colors";

interface RendererOptions {
  view: ViewState;
  showLines: boolean;
  showLabels: boolean;
  highlightConstellation: string | null;
  highlightStar: number | null;
  searchTarget: { ra: number; dec: number } | null;
}

interface HitTarget {
  type: "star" | "constellation";
  index: number;
  x: number;
  y: number;
}

/**
 * Custom hook that drives the star map canvas rendering.
 * Returns a ref for the <canvas> element and a hit-test function.
 */
export function useCanvasRenderer(options: RendererOptions) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hitTargetsRef = useRef<HitTarget[]>([]);
  const animFrameRef = useRef<number>(0);
  const twinklePhaseRef = useRef<number>(0);

  const { view, showLines, showLabels, highlightConstellation, highlightStar, searchTarget } = options;

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Clear with sky color
    ctx.fillStyle = "#0f0f23";
    ctx.fillRect(0, 0, w, h);

    // Draw Milky Way band (subtle gradient)
    drawMilkyWay(ctx, view, w, h);

    const newHitTargets: HitTarget[] = [];

    // Project all stars
    const projected: (ReturnType<typeof project>)[] = [];
    for (let i = 0; i < STARS.length; i++) {
      const star = STARS[i];
      if (star) {
        projected.push(project(star.ra, star.dec, view, w, h));
      } else {
        projected.push(null);
      }
    }

    // Draw constellation lines
    if (showLines) {
      for (const constellation of CONSTELLATIONS) {
        const isHighlighted = highlightConstellation === constellation.abbreviation;
        ctx.strokeStyle = isHighlighted
          ? "rgba(100, 160, 255, 0.6)"
          : "rgba(80, 120, 200, 0.2)";
        ctx.lineWidth = isHighlighted ? 1.5 : 0.8;

        for (const [a, b] of constellation.lines) {
          const pA = projected[a];
          const pB = projected[b];
          if (pA && pB) {
            ctx.beginPath();
            ctx.moveTo(pA.x, pA.y);
            ctx.lineTo(pB.x, pB.y);
            ctx.stroke();
          }
        }
      }
    }

    // Draw constellation labels
    if (showLabels) {
      ctx.font = '500 11px "Manrope", system-ui, sans-serif';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let ci = 0; ci < CONSTELLATIONS.length; ci++) {
        const constellation = CONSTELLATIONS[ci];
        if (!constellation) continue;

        // Compute centroid of visible pattern stars
        let sumX = 0;
        let sumY = 0;
        let count = 0;
        const starIndices = new Set<number>();
        for (const [a, b] of constellation.lines) {
          starIndices.add(a);
          starIndices.add(b);
        }
        for (const idx of starIndices) {
          const p = projected[idx];
          if (p) {
            sumX += p.x;
            sumY += p.y;
            count++;
          }
        }
        if (count < 2) continue;

        const cx = sumX / count;
        const cy = sumY / count - 15;
        const isHighlighted = highlightConstellation === constellation.abbreviation;

        ctx.fillStyle = isHighlighted
          ? "rgba(140, 190, 255, 0.9)"
          : "rgba(140, 170, 220, 0.5)";
        ctx.fillText(constellation.name, cx, cy);

        // Add hit target for constellation label
        newHitTargets.push({ type: "constellation", index: ci, x: cx, y: cy });
      }
    }

    // Draw stars
    const twinkle = twinklePhaseRef.current;
    for (let i = 0; i < STARS.length; i++) {
      const star = STARS[i];
      const p = projected[i];
      if (!star || !p) continue;

      const baseRadius = magnitudeToRadius(star.magnitude, view.zoom);
      const opacity = magnitudeToOpacity(star.magnitude);

      // Twinkle: subtle variation based on index + time
      const twinkleAmount = Math.sin(twinkle * 2 + i * 1.7) * 0.15 + 1;
      const radius = baseRadius * twinkleAmount;

      const color = spectralColor(star.spectralClass);
      const isHighlighted = highlightStar === i;

      if (isHighlighted) {
        // Highlight ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius + 6, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(100, 180, 255, 0.7)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Glow for bright stars
      if (star.magnitude < 1.5) {
        const glowRadius = radius * 3;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        gradient.addColorStop(0, `${color}40`);
        gradient.addColorStop(1, `${color}00`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Star dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      ctx.globalAlpha = opacity;
      ctx.fillStyle = color;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Hit target
      newHitTargets.push({ type: "star", index: i, x: p.x, y: p.y });
    }

    // Draw compass directions
    drawCompass(ctx, view, w, h);

    // Draw search target indicator
    if (searchTarget) {
      const sp = project(searchTarget.ra, searchTarget.dec, view, w, h);
      if (sp) {
        const pulse = Math.sin(twinkle * 3) * 3 + 15;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, pulse, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(100, 200, 255, 0.5)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }

    hitTargetsRef.current = newHitTargets;
  }, [view, showLines, showLabels, highlightConstellation, highlightStar, searchTarget]);

  useEffect(() => {
    let running = true;

    function loop() {
      if (!running) return;
      twinklePhaseRef.current += 0.016;
      render();
      animFrameRef.current = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      running = false;
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [render]);

  // Resize handler
  useEffect(() => {
    function handleResize() {
      render();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [render]);

  const hitTest = useCallback(
    (px: number, py: number): HitTarget | null => {
      // Check stars first (reverse order so topmost drawn wins)
      const targets = hitTargetsRef.current;
      let bestStar: HitTarget | null = null;
      let bestDist = Infinity;

      for (let i = targets.length - 1; i >= 0; i--) {
        const t = targets[i];
        if (!t) continue;
        const dx = t.x - px;
        const dy = t.y - py;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (t.type === "star" && dist < 15) {
          if (dist < bestDist) {
            bestDist = dist;
            bestStar = t;
          }
        }
      }

      if (bestStar) return bestStar;

      // Check constellation labels
      for (let i = targets.length - 1; i >= 0; i--) {
        const t = targets[i];
        if (!t) continue;
        if (t.type === "constellation") {
          const dx = t.x - px;
          const dy = t.y - py;
          if (Math.abs(dx) < 40 && Math.abs(dy) < 12) {
            return t;
          }
        }
      }

      return null;
    },
    [],
  );

  return { canvasRef, hitTest };
}

function drawMilkyWay(
  ctx: CanvasRenderingContext2D,
  view: ViewState,
  w: number,
  h: number,
) {
  // The Milky Way roughly follows a band through certain RA/Dec positions.
  // We draw a subtle gradient band.
  const milkyWayPoints: { ra: number; dec: number }[] = [
    { ra: 6, dec: -20 },
    { ra: 7, dec: -10 },
    { ra: 8, dec: 0 },
    { ra: 12, dec: -60 },
    { ra: 18, dec: -30 },
    { ra: 19, dec: -20 },
    { ra: 20, dec: 30 },
    { ra: 20.5, dec: 45 },
    { ra: 21, dec: 55 },
    { ra: 0, dec: 60 },
    { ra: 1, dec: 55 },
    { ra: 5, dec: -5 },
  ];

  const projectedMW: { x: number; y: number }[] = [];
  for (const pt of milkyWayPoints) {
    const p = project(pt.ra, pt.dec, view, w, h);
    if (p) {
      projectedMW.push(p);
    }
  }

  if (projectedMW.length < 3) return;

  ctx.save();
  ctx.globalAlpha = 0.04;
  ctx.fillStyle = "#4466aa";
  ctx.beginPath();
  const first = projectedMW[0];
  if (first) {
    ctx.moveTo(first.x, first.y);
  }
  for (let i = 1; i < projectedMW.length; i++) {
    const pt = projectedMW[i];
    if (pt) {
      ctx.lineTo(pt.x, pt.y);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawCompass(
  ctx: CanvasRenderingContext2D,
  view: ViewState,
  w: number,
  h: number,
) {
  const positions = getCompassPositions(view, w, h);
  ctx.font = '700 14px "Manrope", system-ui, sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "rgba(100, 140, 200, 0.4)";

  for (const pos of positions) {
    ctx.fillText(pos.label, pos.x, pos.y);
  }
}

export type { HitTarget };

/**
 * Find the star from STARS nearest the given canvas coordinates.
 * Returns star object + its index, or null if nothing close enough.
 */
export function findNearestStar(
  px: number,
  py: number,
  view: ViewState,
  width: number,
  height: number,
): { star: Star; index: number } | null {
  let best: { star: Star; index: number } | null = null;
  let bestDist = 20; // max pixel distance

  for (let i = 0; i < STARS.length; i++) {
    const star = STARS[i];
    if (!star) continue;
    const p = project(star.ra, star.dec, view, width, height);
    if (!p) continue;
    const dx = p.x - px;
    const dy = p.y - py;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < bestDist) {
      bestDist = dist;
      best = { star, index: i };
    }
  }
  return best;
}
