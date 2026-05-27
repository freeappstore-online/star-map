/** Spectral classification of a star */
export type SpectralClass = "O" | "B" | "A" | "F" | "G" | "K" | "M";

/** A star with real astronomical data */
export interface Star {
  /** Common / proper name */
  name: string;
  /** Bayer designation (e.g. "alpha Ori") */
  bayer: string;
  /** Constellation abbreviation this star belongs to */
  constellation: string;
  /** Right ascension in hours (0-24) */
  ra: number;
  /** Declination in degrees (-90 to +90) */
  dec: number;
  /** Apparent visual magnitude (lower = brighter) */
  magnitude: number;
  /** Distance in light years */
  distanceLy: number;
  /** Spectral type string (e.g. "M1Ia") */
  spectralType: string;
  /** Simplified spectral class for color mapping */
  spectralClass: SpectralClass;
  /** Brief fun fact */
  description: string;
}

/** A constellation pattern */
export interface Constellation {
  /** Full name */
  name: string;
  /** IAU 3-letter abbreviation */
  abbreviation: string;
  /** Star indices in the STARS array that form the stick figure, as pairs */
  lines: [number, number][];
  /** Best season to view */
  bestSeason: "Winter" | "Spring" | "Summer" | "Autumn" | "Year-round";
  /** Mythology / story */
  mythology: string;
  /** Notable deep-sky objects */
  deepSkyObjects: string[];
  /** Number of main pattern stars */
  patternStarCount: number;
}

/** 2D point on the canvas */
export interface Point {
  x: number;
  y: number;
}

/** View state for navigation */
export interface ViewState {
  /** Center RA in hours */
  centerRA: number;
  /** Center Dec in degrees */
  centerDec: number;
  /** Zoom level (1 = default) */
  zoom: number;
  /** Time offset in hours for sky rotation simulation */
  timeOffset: number;
}
