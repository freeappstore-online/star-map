import type { Constellation } from "./types";

interface ConstellationDetailProps {
  constellation: Constellation;
  onClose: () => void;
}

export default function ConstellationDetail({ constellation, onClose }: ConstellationDetailProps) {
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

      <div className="mb-3">
        <h3
          className="text-base font-bold leading-tight"
          style={{ color: "#e8ecf4", fontFamily: '"Fraunces", serif' }}
        >
          {constellation.name}
        </h3>
        <p className="text-xs" style={{ color: "rgba(150, 170, 210, 0.7)" }}>
          {constellation.abbreviation} &middot; {constellation.patternStarCount} pattern stars
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs mb-3" style={{ color: "#b0bcd4" }}>
        <div>
          <span style={{ color: "rgba(150, 170, 210, 0.5)" }}>Best season</span>
          <p className="font-medium" style={{ color: "#d0d8e8" }}>
            {constellation.bestSeason}
          </p>
        </div>
        <div>
          <span style={{ color: "rgba(150, 170, 210, 0.5)" }}>Stars in pattern</span>
          <p className="font-medium" style={{ color: "#d0d8e8" }}>
            {constellation.patternStarCount}
          </p>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-xs font-medium mb-1" style={{ color: "rgba(150, 170, 210, 0.5)" }}>
          Mythology
        </p>
        <p className="text-xs leading-relaxed" style={{ color: "rgba(180, 195, 220, 0.8)" }}>
          {constellation.mythology}
        </p>
      </div>

      {constellation.deepSkyObjects.length > 0 && (
        <div>
          <p className="text-xs font-medium mb-1" style={{ color: "rgba(150, 170, 210, 0.5)" }}>
            Notable deep-sky objects
          </p>
          <ul className="text-xs leading-relaxed list-none p-0 m-0" style={{ color: "rgba(160, 180, 210, 0.7)" }}>
            {constellation.deepSkyObjects.map((obj) => (
              <li key={obj} className="mb-0.5">
                &bull; {obj}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
