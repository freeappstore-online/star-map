import type { Constellation } from "./types";

/**
 * 20 major constellations with line patterns referencing indices in STARS[].
 * Each `lines` entry is a pair [starIndexA, starIndexB] forming a stick-figure edge.
 */
export const CONSTELLATIONS: Constellation[] = [
  {
    name: "Orion",
    abbreviation: "Ori",
    lines: [
      [0, 2],   // Betelgeuse - Bellatrix
      [0, 4],   // Betelgeuse - Alnilam (shoulder to belt)
      [2, 3],   // Bellatrix - Mintaka
      [3, 4],   // Mintaka - Alnilam
      [4, 5],   // Alnilam - Alnitak
      [5, 6],   // Alnitak - Saiph
      [3, 1],   // Mintaka - Rigel (via belt)
      [1, 6],   // Rigel - Saiph
    ],
    bestSeason: "Winter",
    mythology: "The great hunter of Greek mythology, placed in the sky by Zeus. Orion boasted he could kill every animal on Earth, prompting Gaia to send a scorpion to defeat him. The two were placed on opposite sides of the sky so they would never meet again.",
    deepSkyObjects: ["M42 — Great Orion Nebula", "M43 — De Mairan's Nebula", "Horsehead Nebula (B33)", "Flame Nebula (NGC 2024)"],
    patternStarCount: 8,
  },
  {
    name: "Ursa Major",
    abbreviation: "UMa",
    lines: [
      [8, 9],    // Dubhe - Merak
      [9, 10],   // Merak - Phecda
      [10, 11],  // Phecda - Megrez
      [11, 8],   // Megrez - Dubhe (bowl)
      [11, 12],  // Megrez - Alioth
      [12, 13],  // Alioth - Mizar
      [13, 14],  // Mizar - Alkaid
    ],
    bestSeason: "Spring",
    mythology: "In Greek myth, the nymph Callisto was transformed into a bear by jealous Hera. Zeus placed her in the sky to protect her. The Big Dipper asterism within is one of the most recognized star patterns worldwide, used for navigation for millennia.",
    deepSkyObjects: ["M81 — Bode's Galaxy", "M82 — Cigar Galaxy", "M101 — Pinwheel Galaxy", "M97 — Owl Nebula"],
    patternStarCount: 7,
  },
  {
    name: "Ursa Minor",
    abbreviation: "UMi",
    lines: [
      [15, 19],  // Polaris - Yildun
      [19, 20],  // Yildun - Urodelus
      [20, 16],  // Urodelus - Kochab
      [16, 17],  // Kochab - Pherkad
      [17, 21],  // Pherkad - Ahfa al Farkadain
      [21, 20],  // Ahfa al Farkadain - Urodelus
    ],
    bestSeason: "Year-round",
    mythology: "The Little Bear contains Polaris, the current North Star. In Greek myth, it represents Arcas, son of Callisto, also transformed into a bear. Ancient navigators relied on its position near the celestial pole for direction.",
    deepSkyObjects: ["Polaris (Cepheid variable)", "NGC 6217 (barred spiral galaxy)"],
    patternStarCount: 7,
  },
  {
    name: "Cassiopeia",
    abbreviation: "Cas",
    lines: [
      [23, 24],  // Schedar - Caph
      [23, 25],  // Schedar - Gamma Cas
      [25, 26],  // Gamma Cas - Ruchbah
      [26, 27],  // Ruchbah - Segin
    ],
    bestSeason: "Autumn",
    mythology: "The vain queen of Ethiopia who boasted she was more beautiful than the sea nymphs. Poseidon punished her by chaining her daughter Andromeda to a rock. Cassiopeia was placed in the sky on her throne, condemned to circle the pole upside-down half the year.",
    deepSkyObjects: ["M52 — open cluster", "NGC 7789 — Caroline's Rose", "Pacman Nebula (NGC 281)", "IC 10 — starburst galaxy"],
    patternStarCount: 5,
  },
  {
    name: "Leo",
    abbreviation: "Leo",
    lines: [
      [28, 30],  // Regulus - Algieba
      [30, 33],  // Algieba - Adhafera
      [33, 34],  // Adhafera - Rasalas
      [34, 35],  // Rasalas - Alterf (head/sickle)
      [28, 32],  // Regulus - Chertan
      [32, 31],  // Chertan - Zosma
      [31, 29],  // Zosma - Denebola
      [30, 36],  // Algieba - Eta Leonis
      [36, 28],  // Eta Leonis - Regulus
    ],
    bestSeason: "Spring",
    mythology: "The Nemean Lion slain by Heracles as the first of his twelve labors. The lion's hide was impervious to weapons, so Heracles strangled it. Zeus placed the lion among the stars to honor the great battle.",
    deepSkyObjects: ["M65 — Leo Triplet", "M66 — Leo Triplet", "M95 — barred spiral", "M96 — spiral galaxy"],
    patternStarCount: 9,
  },
  {
    name: "Scorpius",
    abbreviation: "Sco",
    lines: [
      [41, 40],  // Graffias - Dschubba
      [40, 37],  // Dschubba - Antares
      [37, 43],  // Antares - Epsilon Sco
      [43, 44],  // Epsilon Sco - Kappa Sco
      [44, 38],  // Kappa Sco - Shaula
      [38, 42],  // Shaula - Lesath
    ],
    bestSeason: "Summer",
    mythology: "The scorpion sent by Gaia to kill Orion after his arrogant boasting. They were placed on opposite sides of the sky so that when Scorpius rises, Orion sets. Antares, its red heart, rivals Mars in color.",
    deepSkyObjects: ["M4 — globular cluster near Antares", "M7 — Ptolemy Cluster", "M6 — Butterfly Cluster", "NGC 6231 — open cluster"],
    patternStarCount: 7,
  },
  {
    name: "Gemini",
    abbreviation: "Gem",
    lines: [
      [46, 47],  // Pollux - Castor
      [46, 48],  // Pollux - Alhena
      [47, 50],  // Castor - Mebsuta
      [50, 49],  // Mebsuta - Tejat
      [49, 51],  // Tejat - Propus
    ],
    bestSeason: "Winter",
    mythology: "The twin brothers Castor and Pollux from Greek mythology. When mortal Castor died, immortal Pollux begged Zeus to let them share immortality. They alternate between Olympus and the underworld, symbolizing the inseparable bond of brotherhood.",
    deepSkyObjects: ["M35 — open cluster", "NGC 2392 — Eskimo Nebula", "Jellyfish Nebula (IC 443)", "Medusa Nebula"],
    patternStarCount: 6,
  },
  {
    name: "Taurus",
    abbreviation: "Tau",
    lines: [
      [52, 56],  // Aldebaran - Prima Hyadum
      [52, 57],  // Aldebaran - Ain
      [57, 55],  // Ain - Tianguan
      [55, 53],  // Tianguan - Elnath
      [52, 54],  // Aldebaran - Alcyone (toward Pleiades)
    ],
    bestSeason: "Winter",
    mythology: "Zeus disguised himself as a magnificent white bull to abduct Europa. The Hyades cluster forms the bull's face, with Aldebaran as its fiery eye. The Pleiades ride on the bull's shoulder. The constellation has been recognized since at least the Bronze Age.",
    deepSkyObjects: ["M1 — Crab Nebula (supernova remnant)", "M45 — Pleiades", "Hyades — nearest open cluster", "Hind's Variable Nebula"],
    patternStarCount: 6,
  },
  {
    name: "Virgo",
    abbreviation: "Vir",
    lines: [
      [58, 60],  // Spica - Vindemiatrix
      [58, 61],  // Spica - Heze
      [61, 59],  // Heze - Porrima
      [59, 62],  // Porrima - Zaniah
      [59, 60],  // Porrima - Vindemiatrix
    ],
    bestSeason: "Spring",
    mythology: "Often identified with Demeter, goddess of the harvest, holding an ear of wheat (Spica). When her daughter Persephone was taken to the underworld, Demeter's grief caused winter. Virgo's appearance in spring skies signals the return of growing season.",
    deepSkyObjects: ["Virgo Cluster — 1300+ galaxies", "M87 — giant elliptical (home of first imaged black hole)", "M104 — Sombrero Galaxy", "M49 — brightest Virgo Cluster member"],
    patternStarCount: 5,
  },
  {
    name: "Aquarius",
    abbreviation: "Aqr",
    lines: [
      [63, 64],  // Sadalsuud - Sadalmelik
      [64, 66],  // Sadalmelik - Sadachbia
      [66, 65],  // Sadachbia - Skat
      [63, 66],  // Sadalsuud - Sadachbia
    ],
    bestSeason: "Autumn",
    mythology: "The water-bearer of the gods, often identified with Ganymede, the beautiful youth carried to Olympus by Zeus in the form of an eagle to serve as cupbearer. The constellation's stars trace water pouring from an urn into the mouth of the Southern Fish.",
    deepSkyObjects: ["M2 — globular cluster", "NGC 7009 — Saturn Nebula", "NGC 7293 — Helix Nebula (Eye of God)", "NGC 7492 — distant globular"],
    patternStarCount: 4,
  },
  {
    name: "Pisces",
    abbreviation: "Psc",
    lines: [
      [67, 68],  // Eta Psc - Gamma Psc
      [68, 69],  // Gamma Psc - Omega Psc
      [69, 70],  // Omega Psc - Iota Psc
      [70, 71],  // Iota Psc - Alrescha
      [71, 67],  // Alrescha - Eta Psc
    ],
    bestSeason: "Autumn",
    mythology: "Aphrodite and Eros transformed into fish to escape the monster Typhon, tying themselves together with a cord so they would not be separated. The knot star Alrescha marks where their tails are tied. The vernal equinox currently lies in Pisces.",
    deepSkyObjects: ["M74 — grand-design spiral galaxy", "NGC 488 — spiral galaxy", "NGC 524 — lenticular galaxy"],
    patternStarCount: 5,
  },
  {
    name: "Sagittarius",
    abbreviation: "Sgr",
    lines: [
      [72, 75],  // Kaus Australis - Kaus Media
      [75, 76],  // Kaus Media - Kaus Borealis
      [76, 73],  // Kaus Borealis - Nunki
      [73, 74],  // Nunki - Ascella
      [74, 72],  // Ascella - Kaus Australis
      [73, 78],  // Nunki - Phi Sgr
    ],
    bestSeason: "Summer",
    mythology: "Often depicted as a centaur archer aiming at the heart of Scorpius. Some identify him with Chiron, the wise centaur who tutored heroes. The center of the Milky Way lies in this direction, marked by the radio source Sagittarius A*.",
    deepSkyObjects: ["Sgr A* — galactic center black hole", "M8 — Lagoon Nebula", "M20 — Trifid Nebula", "M17 — Omega Nebula", "M22 — globular cluster"],
    patternStarCount: 7,
  },
  {
    name: "Canis Major",
    abbreviation: "CMa",
    lines: [
      [79, 82],  // Sirius - Mirzam
      [79, 81],  // Sirius - Wezen
      [81, 80],  // Wezen - Adhara
      [81, 83],  // Wezen - Aludra
      [80, 84],  // Adhara - Furud
    ],
    bestSeason: "Winter",
    mythology: "The larger of Orion's two hunting dogs, faithfully following the hunter across the sky. Sirius, the Dog Star, is the brightest star in the night sky. In ancient Egypt, its heliacal rising heralded the annual Nile flood and the start of the new year.",
    deepSkyObjects: ["M41 — open cluster", "NGC 2359 — Thor's Helmet", "NGC 2362 — Tau Canis Majoris Cluster"],
    patternStarCount: 6,
  },
  {
    name: "Cygnus",
    abbreviation: "Cyg",
    lines: [
      [85, 86],  // Deneb - Sadr
      [86, 87],  // Sadr - Gienah Cygni
      [86, 88],  // Sadr - Fawaris
      [86, 89],  // Sadr - Albireo
    ],
    bestSeason: "Summer",
    mythology: "The swan flying along the Milky Way. In one myth, Zeus took the form of a swan to seduce Leda. In another, Orpheus was transformed into a swan and placed next to his lyre (Lyra) in the sky. The Northern Cross asterism lies within Cygnus.",
    deepSkyObjects: ["NGC 7000 — North America Nebula", "Cygnus X-1 — first confirmed black hole", "Veil Nebula (supernova remnant)", "Blinking Nebula (NGC 6826)"],
    patternStarCount: 5,
  },
  {
    name: "Lyra",
    abbreviation: "Lyr",
    lines: [
      [90, 91],  // Vega - Sheliak
      [91, 92],  // Sheliak - Sulafat
      [92, 93],  // Sulafat - Delta2 Lyrae
      [93, 90],  // Delta2 Lyrae - Vega
    ],
    bestSeason: "Summer",
    mythology: "The lyre of Orpheus, whose music could charm all living things and even move stones. After his death, Zeus placed the lyre in the sky. Vega, its brightest star, is part of the Summer Triangle and was the pole star 14,000 years ago.",
    deepSkyObjects: ["M57 — Ring Nebula", "M56 — globular cluster", "NGC 6791 — old open cluster"],
    patternStarCount: 4,
  },
  {
    name: "Perseus",
    abbreviation: "Per",
    lines: [
      [94, 95],  // Mirfak - Algol
      [94, 98],  // Mirfak - Delta Per
      [94, 97],  // Mirfak - Epsilon Per
      [97, 96],  // Epsilon Per - Zeta Per
    ],
    bestSeason: "Autumn",
    mythology: "The hero who slew Medusa and rescued Andromeda from a sea monster. He carries Medusa's severed head, marked by the 'Demon Star' Algol, which winks as an eclipsing binary. The August Perseid meteor shower radiates from this constellation.",
    deepSkyObjects: ["Double Cluster (NGC 869/884)", "M34 — open cluster", "NGC 1499 — California Nebula", "Little Dumbbell Nebula (M76)"],
    patternStarCount: 5,
  },
  {
    name: "Andromeda",
    abbreviation: "And",
    lines: [
      [99, 103],  // Alpheratz - Delta And
      [103, 100], // Delta And - Mirach
      [100, 101], // Mirach - Almach
    ],
    bestSeason: "Autumn",
    mythology: "The Ethiopian princess chained to a rock as sacrifice to the sea monster Cetus, punishment for her mother Cassiopeia's vanity. Perseus rescued her and they married. The Andromeda Galaxy (M31), visible to the naked eye, lies within this constellation.",
    deepSkyObjects: ["M31 — Andromeda Galaxy (nearest major galaxy)", "M32 — dwarf elliptical companion", "M110 — dwarf elliptical companion", "NGC 7662 — Blue Snowball Nebula"],
    patternStarCount: 4,
  },
  {
    name: "Pegasus",
    abbreviation: "Peg",
    lines: [
      [99, 104],  // Alpheratz - Enif... wait, we need the Great Square
      [99, 107],  // Alpheratz - Algenib
      [107, 106], // Algenib - Markab
      [106, 105], // Markab - Scheat
      [105, 99],  // Scheat - Alpheratz (Great Square)
      [106, 104], // Markab - Enif
    ],
    bestSeason: "Autumn",
    mythology: "The winged horse born from the blood of Medusa when Perseus beheaded her. Bellerophon rode Pegasus to defeat the Chimera but fell when he tried to fly to Olympus. The Great Square of Pegasus is one of autumn's most recognizable asterisms.",
    deepSkyObjects: ["M15 — dense globular cluster", "NGC 7331 — spiral galaxy", "Stephan's Quintet (NGC 7317-20)", "Einstein Cross (gravitational lens)"],
    patternStarCount: 5,
  },
  {
    name: "Draco",
    abbreviation: "Dra",
    lines: [
      [109, 112], // Eltanin - Rastaban
      [112, 116], // Rastaban - Grumium
      [109, 116], // Eltanin - Grumium (head)
      [112, 117], // Rastaban - Eta Dra
      [117, 110], // Eta Dra - Aldhibah
      [110, 114], // Aldhibah - Edasich
      [114, 113], // Edasich - Thuban
      [113, 115], // Thuban - Kappa Dra
    ],
    bestSeason: "Summer",
    mythology: "Ladon, the hundred-headed dragon that guarded the golden apples of the Hesperides. Heracles slew it as one of his twelve labors. The dragon winds between the two Bears. Thuban was the pole star when the Egyptian pyramids were built.",
    deepSkyObjects: ["NGC 5866 — Spindle Galaxy", "Cat's Eye Nebula (NGC 6543)", "NGC 6503 — spiral at Local Void edge", "Draco Dwarf — satellite galaxy of Milky Way"],
    patternStarCount: 8,
  },
  {
    name: "Centaurus",
    abbreviation: "Cen",
    lines: [
      [118, 119], // Alpha Cen - Hadar
      [119, 122], // Hadar - Epsilon Cen
      [122, 121], // Epsilon Cen - Muhlifain
      [121, 120], // Muhlifain - Menkent
    ],
    bestSeason: "Spring",
    mythology: "Often identified with Chiron, the wisest of all centaurs, who tutored Achilles, Jason, and Asclepius. Unlike other centaurs, Chiron was kind and learned. Wounded by a poisoned arrow, he gave up his immortality and was placed among the stars by Zeus.",
    deepSkyObjects: ["Omega Centauri (NGC 5139) — largest globular cluster", "Centaurus A (NGC 5128) — peculiar galaxy", "NGC 3918 — Blue Planetary", "NGC 5460 — open cluster"],
    patternStarCount: 5,
  },
];
