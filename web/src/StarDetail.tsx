import type { Star } from "./types";
import { spectralColor, spectralColorName } from "./colors";
import { CONSTELLATIONS } from "./constellations";

interface StarDetailProps {
  star: Star;
  onClose: () => void;
}

export default function StarDetail({ star, onClose }: StarDetailProps) {
  const colorHex = spectralColor(star.spectralClass);
  const colorName = spectralColorName(star.spectralClass);

  const constellation = CONSTELLATIONS.find(
    (c) => c.abbreviation === star.constellation,
  );

  return (
    <div
      className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 rounded-xl border p-4"
      style={{
        background: "rgba(15, 15, 35, 0.95)",
        borderColor: "rgba(80, 120, 200, 0.3)",
        backdropFilter: "blur(12px)",
        zIndex: 20,
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-lg cursor-pointer"
        style={{ color: "rgba(150, 170, 210, 0.6)", background: "none", border: "none" }}
        aria-label="Close"
      >
        x
      </button>

      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-4 h-4 rounded-full"
          style={{
            background: colorHex,
            boxShadow: `0 0 8px ${colorHex}`,
          }}
        />
        <div>
          <h3
            className="text-base font-bold leading-tight"
            style={{ color: "#e8ecf4", fontFamily: '"Fraunces", serif' }}
          >
            {star.name}
          </h3>
          <p className="text-xs" style={{ color: "rgba(150, 170, 210, 0.7)" }}>
            {star.bayer}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs mb-3" style={{ color: "#b0bcd4" }}>
        <div>
          <span style={{ color: "rgba(150, 170, 210, 0.5)" }}>Constellation</span>
          <p className="font-medium" style={{ color: "#d0d8e8" }}>
            {constellation ? constellation.name : star.constellation}
          </p>
        </div>
        <div>
          <span style={{ color: "rgba(150, 170, 210, 0.5)" }}>Magnitude</span>
          <p className="font-medium" style={{ color: "#d0d8e8" }}>
            {star.magnitude.toFixed(2)}
          </p>
        </div>
        <div>
          <span style={{ color: "rgba(150, 170, 210, 0.5)" }}>Distance</span>
          <p className="font-medium" style={{ color: "#d0d8e8" }}>
            {star.distanceLy.toLocaleString()} ly
          </p>
        </div>
        <div>
          <span style={{ color: "rgba(150, 170, 210, 0.5)" }}>Spectral type</span>
          <p className="font-medium" style={{ color: "#d0d8e8" }}>
            {star.spectralType}
          </p>
        </div>
        <div className="col-span-2">
          <span style={{ color: "rgba(150, 170, 210, 0.5)" }}>Color</span>
          <p className="font-medium" style={{ color: colorHex }}>
            {colorName}
          </p>
        </div>
      </div>

      <p className="text-xs leading-relaxed" style={{ color: "rgba(180, 195, 220, 0.8)" }}>
        {star.description}
      </p>
    </div>
  );
}
