interface ControlsProps {
  showLines: boolean;
  setShowLines: (v: boolean) => void;
  showLabels: boolean;
  setShowLabels: (v: boolean) => void;
  timeOffset: number;
  setTimeOffset: (v: number) => void;
  zoom: number;
}

export default function Controls({
  showLines,
  setShowLines,
  showLabels,
  setShowLabels,
  timeOffset,
  setTimeOffset,
  zoom,
}: ControlsProps) {
  return (
    <div
      className="absolute bottom-4 left-4 flex flex-col gap-2"
      style={{ zIndex: 20 }}
    >
      {/* Toggle buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => setShowLines(!showLines)}
          className="rounded-lg border px-3 py-1.5 text-xs font-medium cursor-pointer"
          style={{
            background: showLines
              ? "rgba(37, 99, 235, 0.3)"
              : "rgba(15, 15, 35, 0.85)",
            borderColor: showLines
              ? "rgba(37, 99, 235, 0.6)"
              : "rgba(80, 120, 200, 0.3)",
            color: showLines ? "#93b5ff" : "rgba(150, 170, 210, 0.6)",
            backdropFilter: "blur(8px)",
            fontFamily: '"Manrope", system-ui, sans-serif',
          }}
        >
          Lines
        </button>
        <button
          onClick={() => setShowLabels(!showLabels)}
          className="rounded-lg border px-3 py-1.5 text-xs font-medium cursor-pointer"
          style={{
            background: showLabels
              ? "rgba(37, 99, 235, 0.3)"
              : "rgba(15, 15, 35, 0.85)",
            borderColor: showLabels
              ? "rgba(37, 99, 235, 0.6)"
              : "rgba(80, 120, 200, 0.3)",
            color: showLabels ? "#93b5ff" : "rgba(150, 170, 210, 0.6)",
            backdropFilter: "blur(8px)",
            fontFamily: '"Manrope", system-ui, sans-serif',
          }}
        >
          Labels
        </button>
      </div>

      {/* Time slider */}
      <div
        className="rounded-lg border px-3 py-2 flex items-center gap-2"
        style={{
          background: "rgba(15, 15, 35, 0.85)",
          borderColor: "rgba(80, 120, 200, 0.3)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span className="text-xs" style={{ color: "rgba(150, 170, 210, 0.6)" }}>
          Time
        </span>
        <input
          type="range"
          min={-12}
          max={12}
          step={0.25}
          value={timeOffset}
          onChange={(e) => setTimeOffset(parseFloat(e.target.value))}
          className="flex-1"
          style={{ accentColor: "#2563eb" }}
        />
        <span className="text-xs w-12 text-right" style={{ color: "rgba(150, 170, 210, 0.6)" }}>
          {timeOffset >= 0 ? "+" : ""}
          {timeOffset.toFixed(1)}h
        </span>
      </div>

      {/* Zoom level indicator */}
      <div className="text-xs" style={{ color: "rgba(150, 170, 210, 0.3)" }}>
        Zoom: {zoom.toFixed(1)}x
      </div>
    </div>
  );
}
