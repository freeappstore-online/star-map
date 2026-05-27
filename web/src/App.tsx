import { useState, useCallback, useRef, useEffect } from "react";
import type { ViewState } from "./types";
import { STARS } from "./stars";
import { CONSTELLATIONS } from "./constellations";
import { useCanvasRenderer } from "./useCanvasRenderer";
import SearchBar from "./SearchBar";
import type { SearchResult } from "./SearchBar";
import Controls from "./Controls";
import StarDetail from "./StarDetail";
import ConstellationDetail from "./ConstellationDetail";

export default function App() {
  // View state
  const [view, setView] = useState<ViewState>({
    centerRA: 6,      // Start facing Orion
    centerDec: 10,
    zoom: 1,
    timeOffset: 0,
  });

  // UI state
  const [showLines, setShowLines] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);
  const [selectedConstellation, setSelectedConstellation] = useState<number | null>(null);
  const [searchTarget, setSearchTarget] = useState<{ ra: number; dec: number } | null>(null);

  // Drag state
  const dragRef = useRef<{
    active: boolean;
    startX: number;
    startY: number;
    startRA: number;
    startDec: number;
  }>({ active: false, startX: 0, startY: 0, startRA: 0, startDec: 0 });

  // Pinch state
  const pinchRef = useRef<{ dist: number; startZoom: number }>({ dist: 0, startZoom: 1 });

  // Compute highlighted constellation abbreviation
  const highlightConstellation = selectedConstellation !== null
    ? (CONSTELLATIONS[selectedConstellation]?.abbreviation ?? null)
    : selectedStar !== null
      ? (STARS[selectedStar]?.constellation ?? null)
      : null;

  const { canvasRef, hitTest } = useCanvasRenderer({
    view,
    showLines,
    showLabels,
    highlightConstellation,
    highlightStar: selectedStar,
    searchTarget,
  });

  // Clear search target after a timeout
  useEffect(() => {
    if (!searchTarget) return;
    const timer = setTimeout(() => setSearchTarget(null), 3000);
    return () => clearTimeout(timer);
  }, [searchTarget]);

  // --- Pointer / mouse handlers ---

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Only track primary pointer for drag
      if (e.pointerType === "touch" || e.button === 0) {
        dragRef.current = {
          active: true,
          startX: e.clientX,
          startY: e.clientY,
          startRA: view.centerRA,
          startDec: view.centerDec,
        };
        canvas.setPointerCapture(e.pointerId);
      }
    },
    [view.centerRA, view.centerDec, canvasRef],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!dragRef.current.active) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;

      // Convert pixel drag to RA/Dec shift
      const sensitivity = 0.01 / view.zoom;
      const newRA = dragRef.current.startRA + dx * sensitivity * (24 / 360);
      const newDec = Math.max(
        -89,
        Math.min(89, dragRef.current.startDec + dy * sensitivity * 100),
      );

      setView((v) => ({ ...v, centerRA: newRA, centerDec: newDec }));
    },
    [view.zoom],
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      const wasDragging =
        Math.abs(e.clientX - dragRef.current.startX) > 3 ||
        Math.abs(e.clientY - dragRef.current.startY) > 3;

      dragRef.current.active = false;

      if (wasDragging) return;

      // Click — do hit test
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;

      const hit = hitTest(px, py);
      if (hit) {
        if (hit.type === "star") {
          setSelectedStar(hit.index);
          setSelectedConstellation(null);
        } else {
          setSelectedConstellation(hit.index);
          setSelectedStar(null);
        }
      } else {
        setSelectedStar(null);
        setSelectedConstellation(null);
      }
    },
    [canvasRef, hitTest],
  );

  // --- Wheel zoom ---
  const handleWheel = useCallback((e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setView((v) => {
      const factor = e.deltaY > 0 ? 0.9 : 1.1;
      const newZoom = Math.max(0.3, Math.min(8, v.zoom * factor));
      return { ...v, zoom: newZoom };
    });
  }, []);

  // --- Touch pinch zoom ---
  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLCanvasElement>) => {
      if (e.touches.length === 2) {
        const t0 = e.touches[0];
        const t1 = e.touches[1];
        if (t0 && t1) {
          const dx = t0.clientX - t1.clientX;
          const dy = t0.clientY - t1.clientY;
          pinchRef.current = {
            dist: Math.sqrt(dx * dx + dy * dy),
            startZoom: view.zoom,
          };
        }
      }
    },
    [view.zoom],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLCanvasElement>) => {
      if (e.touches.length === 2) {
        const t0 = e.touches[0];
        const t1 = e.touches[1];
        if (t0 && t1 && pinchRef.current.dist > 0) {
          const dx = t0.clientX - t1.clientX;
          const dy = t0.clientY - t1.clientY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const scale = dist / pinchRef.current.dist;
          const newZoom = Math.max(
            0.3,
            Math.min(8, pinchRef.current.startZoom * scale),
          );
          setView((v) => ({ ...v, zoom: newZoom }));
        }
      }
    },
    [],
  );

  // --- Search ---
  const handleSearch = useCallback((result: SearchResult) => {
    setView((v) => ({
      ...v,
      centerRA: result.ra,
      centerDec: result.dec,
    }));
    setSearchTarget({ ra: result.ra, dec: result.dec });

    if (result.type === "star") {
      setSelectedStar(result.index);
      setSelectedConstellation(null);
    } else {
      setSelectedConstellation(result.index);
      setSelectedStar(null);
    }
  }, []);

  // Get detail data
  const starData = selectedStar !== null ? STARS[selectedStar] ?? null : null;
  const constellationData =
    selectedConstellation !== null
      ? CONSTELLATIONS[selectedConstellation] ?? null
      : null;

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0f0f23" }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ touchAction: "none" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      />

      <SearchBar onSelect={handleSearch} />

      <Controls
        showLines={showLines}
        setShowLines={setShowLines}
        showLabels={showLabels}
        setShowLabels={setShowLabels}
        timeOffset={view.timeOffset}
        setTimeOffset={(t) => setView((v) => ({ ...v, timeOffset: t }))}
        zoom={view.zoom}
      />

      {starData && (
        <StarDetail
          star={starData}
          onClose={() => setSelectedStar(null)}
        />
      )}

      {constellationData && !starData && (
        <ConstellationDetail
          constellation={constellationData}
          onClose={() => setSelectedConstellation(null)}
        />
      )}
    </div>
  );
}
