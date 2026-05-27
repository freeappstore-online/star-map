import { useState, useMemo, useCallback } from "react";
import { STARS } from "./stars";
import { CONSTELLATIONS } from "./constellations";

interface SearchResult {
  type: "star" | "constellation";
  name: string;
  index: number;
  ra: number;
  dec: number;
}

interface SearchBarProps {
  onSelect: (result: SearchResult) => void;
}

export default function SearchBar({ onSelect }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];

    const matches: SearchResult[] = [];

    // Search stars
    for (let i = 0; i < STARS.length; i++) {
      const star = STARS[i];
      if (!star) continue;
      if (
        star.name.toLowerCase().includes(q) ||
        star.bayer.toLowerCase().includes(q)
      ) {
        matches.push({
          type: "star",
          name: `${star.name} (${star.bayer})`,
          index: i,
          ra: star.ra,
          dec: star.dec,
        });
      }
      if (matches.length >= 10) break;
    }

    // Search constellations
    for (let i = 0; i < CONSTELLATIONS.length; i++) {
      const c = CONSTELLATIONS[i];
      if (!c) continue;
      if (
        c.name.toLowerCase().includes(q) ||
        c.abbreviation.toLowerCase().includes(q)
      ) {
        // Compute centroid RA/Dec for auto-centering
        const starIndices = new Set<number>();
        for (const [a, b] of c.lines) {
          starIndices.add(a);
          starIndices.add(b);
        }
        let sumRA = 0;
        let sumDec = 0;
        let count = 0;
        for (const idx of starIndices) {
          const star = STARS[idx];
          if (star) {
            sumRA += star.ra;
            sumDec += star.dec;
            count++;
          }
        }
        if (count > 0) {
          matches.push({
            type: "constellation",
            name: `${c.name} (${c.abbreviation})`,
            index: i,
            ra: sumRA / count,
            dec: sumDec / count,
          });
        }
      }
    }

    // De-duplicate by name (some stars appear multiple times in the catalog)
    const seen = new Set<string>();
    return matches.filter((m) => {
      if (seen.has(m.name)) return false;
      seen.add(m.name);
      return true;
    });
  }, [query]);

  const handleSelect = useCallback(
    (result: SearchResult) => {
      onSelect(result);
      setQuery("");
      setOpen(false);
    },
    [onSelect],
  );

  return (
    <div
      className="absolute top-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-72"
      style={{ zIndex: 30 }}
    >
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => {
            // Delay to allow click on results
            setTimeout(() => setOpen(false), 200);
          }}
          placeholder="Search stars or constellations..."
          className="w-full rounded-lg border px-3 py-2 text-sm outline-none"
          style={{
            background: "rgba(15, 15, 35, 0.85)",
            borderColor: "rgba(80, 120, 200, 0.3)",
            color: "#e0e4ed",
            backdropFilter: "blur(8px)",
            fontFamily: '"Manrope", system-ui, sans-serif',
          }}
        />
        {/* Magnifying glass icon */}
        <div
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs"
          style={{ color: "rgba(150, 170, 210, 0.4)" }}
        >
          &#x1F50D;
        </div>
      </div>

      {open && results.length > 0 && (
        <ul
          className="mt-1 rounded-lg border overflow-hidden list-none p-0 m-0"
          style={{
            background: "rgba(15, 15, 35, 0.95)",
            borderColor: "rgba(80, 120, 200, 0.3)",
            backdropFilter: "blur(12px)",
          }}
        >
          {results.map((r) => (
            <li key={`${r.type}-${r.index}`}>
              <button
                className="w-full text-left px-3 py-2 text-xs cursor-pointer hover:opacity-80"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#c8d0e0",
                  fontFamily: '"Manrope", system-ui, sans-serif',
                }}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleSelect(r)}
              >
                <span
                  className="inline-block w-4 text-center mr-2"
                  style={{ color: r.type === "star" ? "#ffd2a1" : "#aabfff" }}
                >
                  {r.type === "star" ? "★" : "○"}
                </span>
                {r.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export type { SearchResult };
