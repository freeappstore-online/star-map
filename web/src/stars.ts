import type { Star } from "./types";

/**
 * ~200 bright stars with real astronomical data.
 * RA in decimal hours, Dec in degrees.
 * Magnitudes, distances, and spectral types are from standard catalogs.
 */
export const STARS: Star[] = [
  // ─── Orion ───
  { name: "Betelgeuse", bayer: "α Ori", constellation: "Ori", ra: 5.919, dec: 7.407, magnitude: 0.42, distanceLy: 700, spectralType: "M1Ia", spectralClass: "M", description: "A red supergiant so large that if placed at the Sun's position, it would engulf Mars." },
  { name: "Rigel", bayer: "β Ori", constellation: "Ori", ra: 5.242, dec: -8.202, magnitude: 0.13, distanceLy: 860, spectralType: "B8Ia", spectralClass: "B", description: "The brightest star in Orion and one of the most luminous stars visible to the naked eye." },
  { name: "Bellatrix", bayer: "γ Ori", constellation: "Ori", ra: 5.419, dec: 6.350, magnitude: 1.64, distanceLy: 250, spectralType: "B2III", spectralClass: "B", description: "Known as the Amazon Star; marks Orion's left shoulder." },
  { name: "Mintaka", bayer: "δ Ori", constellation: "Ori", ra: 5.533, dec: -0.299, magnitude: 2.23, distanceLy: 1200, spectralType: "O9.5II", spectralClass: "O", description: "The westernmost star of Orion's Belt, very close to the celestial equator." },
  { name: "Alnilam", bayer: "ε Ori", constellation: "Ori", ra: 5.603, dec: -1.202, magnitude: 1.69, distanceLy: 2000, spectralType: "B0Ia", spectralClass: "B", description: "The middle star of Orion's Belt, one of the most distant bright stars." },
  { name: "Alnitak", bayer: "ζ Ori", constellation: "Ori", ra: 5.679, dec: -1.943, magnitude: 1.77, distanceLy: 1260, spectralType: "O9.5Ib", spectralClass: "O", description: "The easternmost Belt star, near the Flame Nebula." },
  { name: "Saiph", bayer: "κ Ori", constellation: "Ori", ra: 5.796, dec: -9.670, magnitude: 2.06, distanceLy: 650, spectralType: "B0.5Ia", spectralClass: "B", description: "Marks Orion's right knee; nearly as hot as Rigel but appears dimmer due to UV radiation." },
  { name: "Meissa", bayer: "λ Ori", constellation: "Ori", ra: 5.585, dec: 9.934, magnitude: 3.33, distanceLy: 1100, spectralType: "O8III", spectralClass: "O", description: "Orion's head star, surrounded by a ring nebula." },

  // ─── Ursa Major ───
  { name: "Dubhe", bayer: "α UMa", constellation: "UMa", ra: 11.062, dec: 61.751, magnitude: 1.79, distanceLy: 124, spectralType: "K0III", spectralClass: "K", description: "One of the Pointer Stars, directing the eye to Polaris." },
  { name: "Merak", bayer: "β UMa", constellation: "UMa", ra: 11.031, dec: 56.382, magnitude: 2.37, distanceLy: 79, spectralType: "A1V", spectralClass: "A", description: "The second Pointer Star; a line from Merak through Dubhe leads to Polaris." },
  { name: "Phecda", bayer: "γ UMa", constellation: "UMa", ra: 11.898, dec: 53.695, magnitude: 2.44, distanceLy: 84, spectralType: "A0Ve", spectralClass: "A", description: "Part of the Big Dipper's bowl; a member of the Ursa Major Moving Group." },
  { name: "Megrez", bayer: "δ UMa", constellation: "UMa", ra: 12.257, dec: 57.033, magnitude: 3.31, distanceLy: 81, spectralType: "A3V", spectralClass: "A", description: "The faintest of the Big Dipper's seven stars, connecting bowl to handle." },
  { name: "Alioth", bayer: "ε UMa", constellation: "UMa", ra: 12.900, dec: 55.960, magnitude: 1.77, distanceLy: 81, spectralType: "A1III", spectralClass: "A", description: "The brightest star in Ursa Major and 31st brightest in the sky." },
  { name: "Mizar", bayer: "ζ UMa", constellation: "UMa", ra: 13.399, dec: 54.926, magnitude: 2.27, distanceLy: 78, spectralType: "A2V", spectralClass: "A", description: "Famous double star; its companion Alcor was an ancient eye test." },
  { name: "Alkaid", bayer: "η UMa", constellation: "UMa", ra: 13.792, dec: 49.313, magnitude: 1.86, distanceLy: 104, spectralType: "B3V", spectralClass: "B", description: "The end of the Big Dipper's handle; hottest of the Dipper stars." },

  // ─── Ursa Minor ───
  { name: "Polaris", bayer: "α UMi", constellation: "UMi", ra: 2.530, dec: 89.264, magnitude: 1.98, distanceLy: 433, spectralType: "F7Ib", spectralClass: "F", description: "The current North Star; a Cepheid variable less than 1° from the celestial pole." },
  { name: "Kochab", bayer: "β UMi", constellation: "UMi", ra: 14.845, dec: 74.156, magnitude: 2.08, distanceLy: 131, spectralType: "K4III", spectralClass: "K", description: "Was the pole star around 1500 BC; an orange giant with a confirmed exoplanet." },
  { name: "Pherkad", bayer: "γ UMi", constellation: "UMi", ra: 15.345, dec: 71.834, magnitude: 3.05, distanceLy: 487, spectralType: "A3II", spectralClass: "A", description: "Together with Kochab, forms the 'Guardians of the Pole'." },
  { name: "Yildun", bayer: "δ UMi", constellation: "UMi", ra: 17.537, dec: 86.586, magnitude: 4.36, distanceLy: 183, spectralType: "A1V", spectralClass: "A", description: "A faint white star near Polaris in the Little Dipper's bowl." },
  { name: "Urodelus", bayer: "ε UMi", constellation: "UMi", ra: 16.766, dec: 82.037, magnitude: 4.23, distanceLy: 347, spectralType: "G5III", spectralClass: "G", description: "A yellow giant star in the Little Dipper's handle." },
  { name: "Ahfa al Farkadain", bayer: "ζ UMi", constellation: "UMi", ra: 15.734, dec: 77.795, magnitude: 4.32, distanceLy: 380, spectralType: "A3V", spectralClass: "A", description: "A white main-sequence star in the body of the Little Bear." },
  { name: "Anwar al Farkadain", bayer: "η UMi", constellation: "UMi", ra: 16.292, dec: 75.755, magnitude: 4.95, distanceLy: 97, spectralType: "F5V", spectralClass: "F", description: "One of the faintest stars in the Little Dipper pattern." },

  // ─── Cassiopeia ───
  { name: "Schedar", bayer: "α Cas", constellation: "Cas", ra: 0.675, dec: 56.537, magnitude: 2.23, distanceLy: 228, spectralType: "K0IIIa", spectralClass: "K", description: "The brightest star in Cassiopeia; an orange giant 500 times more luminous than the Sun." },
  { name: "Caph", bayer: "β Cas", constellation: "Cas", ra: 0.153, dec: 59.150, magnitude: 2.27, distanceLy: 55, spectralType: "F2III", spectralClass: "F", description: "A Delta Scuti variable star that pulsates every 2.5 hours." },
  { name: "Gamma Cassiopeiae", bayer: "γ Cas", constellation: "Cas", ra: 0.945, dec: 60.717, magnitude: 2.47, distanceLy: 550, spectralType: "B0.5IVe", spectralClass: "B", description: "A rapidly rotating star that ejects matter into a surrounding disk." },
  { name: "Ruchbah", bayer: "δ Cas", constellation: "Cas", ra: 1.430, dec: 60.235, magnitude: 2.68, distanceLy: 99, spectralType: "A5IV", spectralClass: "A", description: "An eclipsing binary star that dims slightly every 760 days." },
  { name: "Segin", bayer: "ε Cas", constellation: "Cas", ra: 1.907, dec: 63.670, magnitude: 3.37, distanceLy: 410, spectralType: "B3III", spectralClass: "B", description: "A hot blue giant at the eastern end of Cassiopeia's W shape." },

  // ─── Leo ───
  { name: "Regulus", bayer: "α Leo", constellation: "Leo", ra: 10.140, dec: 11.967, magnitude: 1.35, distanceLy: 79, spectralType: "B8IVn", spectralClass: "B", description: "The 'Heart of the Lion'; spins so fast it's oblate, completing a rotation in 16 hours." },
  { name: "Denebola", bayer: "β Leo", constellation: "Leo", ra: 11.818, dec: 14.572, magnitude: 2.14, distanceLy: 36, spectralType: "A3Va", spectralClass: "A", description: "The 'tail of the lion'; has an infrared excess suggesting a debris disk." },
  { name: "Algieba", bayer: "γ Leo", constellation: "Leo", ra: 10.333, dec: 19.842, magnitude: 2.08, distanceLy: 130, spectralType: "K1III", spectralClass: "K", description: "A beautiful double star; two orange giants orbit each other every 510 years." },
  { name: "Zosma", bayer: "δ Leo", constellation: "Leo", ra: 11.235, dec: 20.524, magnitude: 2.56, distanceLy: 58, spectralType: "A4V", spectralClass: "A", description: "A white main-sequence star on the lion's back, roughly twice the Sun's mass." },
  { name: "Chertan", bayer: "θ Leo", constellation: "Leo", ra: 11.237, dec: 15.430, magnitude: 3.34, distanceLy: 165, spectralType: "A2IV", spectralClass: "A", description: "A white subgiant in the lion's hindquarters." },
  { name: "Adhafera", bayer: "ζ Leo", constellation: "Leo", ra: 10.278, dec: 23.417, magnitude: 3.43, distanceLy: 274, spectralType: "F0III", spectralClass: "F", description: "Part of the Sickle asterism forming the lion's head." },
  { name: "Rasalas", bayer: "μ Leo", constellation: "Leo", ra: 9.879, dec: 26.007, magnitude: 3.88, distanceLy: 133, spectralType: "K2III", spectralClass: "K", description: "An orange giant that forms the top of the lion's head." },
  { name: "Alterf", bayer: "λ Leo", constellation: "Leo", ra: 9.528, dec: 22.968, magnitude: 4.31, distanceLy: 336, spectralType: "K5III", spectralClass: "K", description: "The lion's mouth; a cool orange giant." },
  { name: "Eta Leonis", bayer: "η Leo", constellation: "Leo", ra: 10.122, dec: 16.763, magnitude: 3.52, distanceLy: 2000, spectralType: "A0Ib", spectralClass: "A", description: "A distant white supergiant near the Sickle asterism." },

  // ─── Scorpius ───
  { name: "Antares", bayer: "α Sco", constellation: "Sco", ra: 16.490, dec: -26.432, magnitude: 0.96, distanceLy: 550, spectralType: "M1.5Iab", spectralClass: "M", description: "The 'rival of Mars' due to its red color; 700 times the Sun's diameter." },
  { name: "Shaula", bayer: "λ Sco", constellation: "Sco", ra: 17.560, dec: -37.104, magnitude: 1.63, distanceLy: 570, spectralType: "B2IV", spectralClass: "B", description: "The stinger of the scorpion; actually a triple star system." },
  { name: "Sargas", bayer: "θ Sco", constellation: "Sco", ra: 17.622, dec: -42.998, magnitude: 1.87, distanceLy: 272, spectralType: "F1II", spectralClass: "F", description: "A yellow-white supergiant marking the scorpion's tail curve." },
  { name: "Dschubba", bayer: "δ Sco", constellation: "Sco", ra: 16.005, dec: -22.622, magnitude: 2.32, distanceLy: 490, spectralType: "B0.3IV", spectralClass: "B", description: "The 'forehead of the scorpion'; a hot blue subgiant." },
  { name: "Graffias", bayer: "β Sco", constellation: "Sco", ra: 16.091, dec: -19.806, magnitude: 2.62, distanceLy: 530, spectralType: "B1V", spectralClass: "B", description: "A sextuple star system in the scorpion's head." },
  { name: "Lesath", bayer: "υ Sco", constellation: "Sco", ra: 17.530, dec: -37.296, magnitude: 2.69, distanceLy: 580, spectralType: "B2IV", spectralClass: "B", description: "Close neighbor to Shaula at the scorpion's sting." },
  { name: "Epsilon Scorpii", bayer: "ε Sco", constellation: "Sco", ra: 16.836, dec: -34.293, magnitude: 2.29, distanceLy: 65, spectralType: "K2.5III", spectralClass: "K", description: "An orange giant in the scorpion's body." },
  { name: "Kappa Scorpii", bayer: "κ Sco", constellation: "Sco", ra: 17.422, dec: -39.030, magnitude: 2.41, distanceLy: 480, spectralType: "B1.5III", spectralClass: "B", description: "A hot blue giant near the scorpion's stinger." },

  // ─── Gemini ───
  { name: "Pollux", bayer: "β Gem", constellation: "Gem", ra: 7.755, dec: 28.026, magnitude: 1.14, distanceLy: 34, spectralType: "K0IIIb", spectralClass: "K", description: "The brightest star in Gemini; has a confirmed exoplanet, Pollux b." },
  { name: "Castor", bayer: "α Gem", constellation: "Gem", ra: 7.577, dec: 31.889, magnitude: 1.58, distanceLy: 52, spectralType: "A1V", spectralClass: "A", description: "Actually a sextuple star system — three visual pairs orbiting each other." },
  { name: "Alhena", bayer: "γ Gem", constellation: "Gem", ra: 6.629, dec: 16.399, magnitude: 1.93, distanceLy: 109, spectralType: "A1IV", spectralClass: "A", description: "Marks Pollux's foot; a white subgiant with a red dwarf companion." },
  { name: "Tejat", bayer: "μ Gem", constellation: "Gem", ra: 6.383, dec: 22.514, magnitude: 2.88, distanceLy: 230, spectralType: "M3III", spectralClass: "M", description: "A red giant that varies in brightness over a semi-regular period." },
  { name: "Mebsuta", bayer: "ε Gem", constellation: "Gem", ra: 6.732, dec: 25.131, magnitude: 2.98, distanceLy: 840, spectralType: "G8Ib", spectralClass: "G", description: "A yellow supergiant 150 times the Sun's diameter." },
  { name: "Propus", bayer: "η Gem", constellation: "Gem", ra: 6.248, dec: 22.507, magnitude: 3.28, distanceLy: 380, spectralType: "M3III", spectralClass: "M", description: "A semi-regular variable star near the Jellyfish Nebula." },

  // ─── Taurus ───
  { name: "Aldebaran", bayer: "α Tau", constellation: "Tau", ra: 4.599, dec: 16.509, magnitude: 0.85, distanceLy: 65, spectralType: "K5III", spectralClass: "K", description: "The 'eye of the bull'; an orange giant 44 times the Sun's diameter, with a possible planet." },
  { name: "Elnath", bayer: "β Tau", constellation: "Tau", ra: 5.438, dec: 28.608, magnitude: 1.65, distanceLy: 134, spectralType: "B7III", spectralClass: "B", description: "Shared with Auriga; a blue giant marking the tip of one of the bull's horns." },
  { name: "Alcyone", bayer: "η Tau", constellation: "Tau", ra: 3.791, dec: 24.105, magnitude: 2.87, distanceLy: 440, spectralType: "B7IIIe", spectralClass: "B", description: "The brightest star in the Pleiades cluster." },
  { name: "Tianguan", bayer: "ζ Tau", constellation: "Tau", ra: 5.627, dec: 21.143, magnitude: 3.00, distanceLy: 440, spectralType: "B4IIIp", spectralClass: "B", description: "Near the Crab Nebula (M1), the remnant of a supernova observed in 1054." },
  { name: "Prima Hyadum", bayer: "γ Tau", constellation: "Tau", ra: 4.330, dec: 15.628, magnitude: 3.65, distanceLy: 154, spectralType: "G8III", spectralClass: "G", description: "The first star in the Hyades cluster's V-shape." },
  { name: "Ain", bayer: "ε Tau", constellation: "Tau", ra: 4.477, dec: 19.180, magnitude: 3.53, distanceLy: 147, spectralType: "K0III", spectralClass: "K", description: "An orange giant in the Hyades with a confirmed hot Jupiter exoplanet." },

  // ─── Virgo ───
  { name: "Spica", bayer: "α Vir", constellation: "Vir", ra: 13.420, dec: -11.161, magnitude: 0.97, distanceLy: 250, spectralType: "B1III", spectralClass: "B", description: "A close binary whose stars are egg-shaped from mutual gravity; 'ear of wheat' in Latin." },
  { name: "Porrima", bayer: "γ Vir", constellation: "Vir", ra: 12.694, dec: -1.449, magnitude: 2.74, distanceLy: 39, spectralType: "F0V", spectralClass: "F", description: "One of the finest double stars; two near-identical F-type stars orbit every 169 years." },
  { name: "Vindemiatrix", bayer: "ε Vir", constellation: "Vir", ra: 13.036, dec: 10.959, magnitude: 2.83, distanceLy: 102, spectralType: "G8III", spectralClass: "G", description: "The 'grape gatherer'; its rising once signaled the wine harvest season." },
  { name: "Heze", bayer: "ζ Vir", constellation: "Vir", ra: 13.578, dec: -0.596, magnitude: 3.37, distanceLy: 73, spectralType: "A3V", spectralClass: "A", description: "A white main-sequence star in the middle of Virgo." },
  { name: "Zaniah", bayer: "η Vir", constellation: "Vir", ra: 12.332, dec: -0.667, magnitude: 3.89, distanceLy: 265, spectralType: "A2IV", spectralClass: "A", description: "A triple star system resolvable only by interferometry." },

  // ─── Aquarius ───
  { name: "Sadalsuud", bayer: "β Aqr", constellation: "Aqr", ra: 21.526, dec: -5.571, magnitude: 2.91, distanceLy: 540, spectralType: "G0Ib", spectralClass: "G", description: "The 'luckiest of the lucky'; a yellow supergiant 2200 times more luminous than the Sun." },
  { name: "Sadalmelik", bayer: "α Aqr", constellation: "Aqr", ra: 22.096, dec: -0.320, magnitude: 2.96, distanceLy: 520, spectralType: "G2Ib", spectralClass: "G", description: "The 'lucky star of the king'; almost identical in type to Sadalsuud." },
  { name: "Skat", bayer: "δ Aqr", constellation: "Aqr", ra: 22.911, dec: -15.821, magnitude: 3.27, distanceLy: 160, spectralType: "A3V", spectralClass: "A", description: "A white star meaning 'shin'; lies near the Helix Nebula." },
  { name: "Sadachbia", bayer: "γ Aqr", constellation: "Aqr", ra: 22.361, dec: -1.387, magnitude: 3.84, distanceLy: 163, spectralType: "A0V", spectralClass: "A", description: "Part of an asterism with nearby stars forming the 'water jar'." },

  // ─── Pisces ───
  { name: "Eta Piscium", bayer: "η Psc", constellation: "Psc", ra: 1.525, dec: 15.346, magnitude: 3.62, distanceLy: 294, spectralType: "G8III", spectralClass: "G", description: "The brightest star in Pisces; a giant star with a nearby companion." },
  { name: "Gamma Piscium", bayer: "γ Psc", constellation: "Psc", ra: 23.286, dec: 3.282, magnitude: 3.69, distanceLy: 138, spectralType: "G9III", spectralClass: "G", description: "A yellow giant marking the western fish's body." },
  { name: "Omega Piscium", bayer: "ω Psc", constellation: "Psc", ra: 23.989, dec: 6.864, magnitude: 4.01, distanceLy: 106, spectralType: "F4IV", spectralClass: "F", description: "A yellow-white subgiant near the circlet of Pisces." },
  { name: "Iota Piscium", bayer: "ι Psc", constellation: "Psc", ra: 23.665, dec: 5.627, magnitude: 4.13, distanceLy: 45, spectralType: "F7V", spectralClass: "F", description: "A nearby sun-like star just 45 light-years away." },
  { name: "Alrescha", bayer: "α Psc", constellation: "Psc", ra: 2.034, dec: 2.764, magnitude: 3.82, distanceLy: 151, spectralType: "A0p", spectralClass: "A", description: "The 'knot' where the two fish of Pisces are tied together." },

  // ─── Sagittarius ───
  { name: "Kaus Australis", bayer: "ε Sgr", constellation: "Sgr", ra: 18.402, dec: -34.384, magnitude: 1.85, distanceLy: 143, spectralType: "B9.5III", spectralClass: "B", description: "The brightest star in Sagittarius; forms the base of the Teapot's bow." },
  { name: "Nunki", bayer: "σ Sgr", constellation: "Sgr", ra: 18.921, dec: -26.297, magnitude: 2.05, distanceLy: 228, spectralType: "B2.5V", spectralClass: "B", description: "An ancient Babylonian name; one of the hottest stars visible to the naked eye." },
  { name: "Ascella", bayer: "ζ Sgr", constellation: "Sgr", ra: 19.043, dec: -29.880, magnitude: 2.59, distanceLy: 89, spectralType: "A2IV", spectralClass: "A", description: "A triple star system at the base of the Teapot." },
  { name: "Kaus Media", bayer: "δ Sgr", constellation: "Sgr", ra: 18.350, dec: -29.828, magnitude: 2.70, distanceLy: 348, spectralType: "K3III", spectralClass: "K", description: "The middle of the bow in the Teapot asterism." },
  { name: "Kaus Borealis", bayer: "λ Sgr", constellation: "Sgr", ra: 18.466, dec: -25.422, magnitude: 2.81, distanceLy: 77, spectralType: "K1IIIb", spectralClass: "K", description: "The top of the bow; an orange giant 11 times the Sun's diameter." },
  { name: "Rukbat", bayer: "α Sgr", constellation: "Sgr", ra: 19.398, dec: -40.616, magnitude: 3.97, distanceLy: 170, spectralType: "B8V", spectralClass: "B", description: "Despite being alpha, it's not the brightest; marks the archer's knee." },
  { name: "Phi Sagittarii", bayer: "φ Sgr", constellation: "Sgr", ra: 18.762, dec: -26.991, magnitude: 3.17, distanceLy: 239, spectralType: "B8III", spectralClass: "B", description: "A blue giant forming part of the Teapot lid." },

  // ─── Canis Major ───
  { name: "Sirius", bayer: "α CMa", constellation: "CMa", ra: 6.752, dec: -16.716, magnitude: -1.46, distanceLy: 8.6, spectralType: "A1V", spectralClass: "A", description: "The brightest star in the night sky; has a white dwarf companion, Sirius B." },
  { name: "Adhara", bayer: "ε CMa", constellation: "CMa", ra: 6.977, dec: -28.972, magnitude: 1.50, distanceLy: 430, spectralType: "B2Iab", spectralClass: "B", description: "The second brightest star in Canis Major; was the brightest star in the sky 4.7 million years ago." },
  { name: "Wezen", bayer: "δ CMa", constellation: "CMa", ra: 7.140, dec: -26.393, magnitude: 1.84, distanceLy: 1800, spectralType: "F8Ia", spectralClass: "F", description: "A rare yellow supergiant 50,000 times the Sun's luminosity." },
  { name: "Mirzam", bayer: "β CMa", constellation: "CMa", ra: 6.379, dec: -17.956, magnitude: 1.98, distanceLy: 500, spectralType: "B1II", spectralClass: "B", description: "The 'announcer' — rises before Sirius, heralding the Dog Star." },
  { name: "Aludra", bayer: "η CMa", constellation: "CMa", ra: 7.402, dec: -29.303, magnitude: 2.45, distanceLy: 3000, spectralType: "B5Ia", spectralClass: "B", description: "One of the most distant bright stars; a blue supergiant that will become a supernova." },
  { name: "Furud", bayer: "ζ CMa", constellation: "CMa", ra: 6.339, dec: -30.063, magnitude: 3.02, distanceLy: 362, spectralType: "B2.5V", spectralClass: "B", description: "A hot blue star at the dog's feet." },

  // ─── Cygnus ───
  { name: "Deneb", bayer: "α Cyg", constellation: "Cyg", ra: 20.691, dec: 45.280, magnitude: 1.25, distanceLy: 2600, spectralType: "A2Ia", spectralClass: "A", description: "One of the most luminous stars known — 200,000 times the Sun's luminosity." },
  { name: "Sadr", bayer: "γ Cyg", constellation: "Cyg", ra: 20.370, dec: 40.257, magnitude: 2.20, distanceLy: 1800, spectralType: "F8Ib", spectralClass: "F", description: "At the heart of the Northern Cross; surrounded by the Gamma Cygni Nebula." },
  { name: "Gienah Cygni", bayer: "ε Cyg", constellation: "Cyg", ra: 20.770, dec: 33.970, magnitude: 2.46, distanceLy: 72, spectralType: "K0III", spectralClass: "K", description: "A nearby orange giant that marks the swan's eastern wing." },
  { name: "Fawaris", bayer: "δ Cyg", constellation: "Cyg", ra: 19.749, dec: 45.131, magnitude: 2.87, distanceLy: 165, spectralType: "B9.5III", spectralClass: "B", description: "A blue-white giant forming the western wing of the swan." },
  { name: "Albireo", bayer: "β Cyg", constellation: "Cyg", ra: 19.512, dec: 27.960, magnitude: 3.08, distanceLy: 430, spectralType: "K3II", spectralClass: "K", description: "Perhaps the most beautiful double star — gold and blue pair visible in small telescopes." },

  // ─── Lyra ───
  { name: "Vega", bayer: "α Lyr", constellation: "Lyr", ra: 18.616, dec: 38.784, magnitude: 0.03, distanceLy: 25, spectralType: "A0Va", spectralClass: "A", description: "Once the North Star 14,000 years ago and will be again in 12,000 years; the calibration standard for stellar brightness." },
  { name: "Sheliak", bayer: "β Lyr", constellation: "Lyr", ra: 18.835, dec: 33.363, magnitude: 3.45, distanceLy: 960, spectralType: "B6II", spectralClass: "B", description: "A famous eclipsing binary where mass transfers between the two stars." },
  { name: "Sulafat", bayer: "γ Lyr", constellation: "Lyr", ra: 18.982, dec: 32.690, magnitude: 3.24, distanceLy: 620, spectralType: "B9III", spectralClass: "B", description: "A blue giant forming the bottom of Lyra's parallelogram." },
  { name: "Delta2 Lyrae", bayer: "δ² Lyr", constellation: "Lyr", ra: 18.908, dec: 36.899, magnitude: 4.22, distanceLy: 740, spectralType: "M4II", spectralClass: "M", description: "A deep red star whose color contrasts beautifully with nearby Vega." },

  // ─── Perseus ───
  { name: "Mirfak", bayer: "α Per", constellation: "Per", ra: 3.405, dec: 49.861, magnitude: 1.79, distanceLy: 510, spectralType: "F5Ib", spectralClass: "F", description: "The brightest star in Perseus; center of the Alpha Persei star cluster." },
  { name: "Algol", bayer: "β Per", constellation: "Per", ra: 3.136, dec: 40.956, magnitude: 2.12, distanceLy: 90, spectralType: "B8V", spectralClass: "B", description: "The 'Demon Star' — the prototype eclipsing binary, dimming every 2.87 days as known since antiquity." },
  { name: "Zeta Persei", bayer: "ζ Per", constellation: "Per", ra: 3.902, dec: 31.884, magnitude: 2.85, distanceLy: 750, spectralType: "B1Ib", spectralClass: "B", description: "A luminous blue supergiant in the sword of Perseus." },
  { name: "Epsilon Persei", bayer: "ε Per", constellation: "Per", ra: 3.964, dec: 40.010, magnitude: 2.89, distanceLy: 640, spectralType: "B0.5V", spectralClass: "B", description: "A multiple star system with a spectroscopic binary at its core." },
  { name: "Delta Persei", bayer: "δ Per", constellation: "Per", ra: 3.715, dec: 47.788, magnitude: 3.01, distanceLy: 520, spectralType: "B5III", spectralClass: "B", description: "A blue giant between Mirfak and Algol." },

  // ─── Andromeda ───
  { name: "Alpheratz", bayer: "α And", constellation: "And", ra: 0.140, dec: 29.091, magnitude: 2.06, distanceLy: 97, spectralType: "B8IV", spectralClass: "B", description: "Shared with Pegasus (once δ Peg); the brightest mercury-manganese star." },
  { name: "Mirach", bayer: "β And", constellation: "And", ra: 1.163, dec: 35.621, magnitude: 2.06, distanceLy: 197, spectralType: "M0IIIa", spectralClass: "M", description: "A red giant used as a guide star to find the Andromeda Galaxy." },
  { name: "Almach", bayer: "γ And", constellation: "And", ra: 2.065, dec: 42.330, magnitude: 2.17, distanceLy: 355, spectralType: "K3IIb", spectralClass: "K", description: "A gorgeous quadruple star; the primary and secondary show gold and blue colors." },
  { name: "Delta Andromedae", bayer: "δ And", constellation: "And", ra: 0.656, dec: 30.861, magnitude: 3.27, distanceLy: 101, spectralType: "K3III", spectralClass: "K", description: "An orange giant between Alpheratz and Mirach." },

  // ─── Pegasus ───
  { name: "Enif", bayer: "ε Peg", constellation: "Peg", ra: 21.736, dec: 9.875, magnitude: 2.39, distanceLy: 672, spectralType: "K2Ib", spectralClass: "K", description: "The 'nose' of the winged horse; an orange supergiant that once flared to magnitude 0.7." },
  { name: "Scheat", bayer: "β Peg", constellation: "Peg", ra: 23.063, dec: 28.083, magnitude: 2.42, distanceLy: 196, spectralType: "M2.5II", spectralClass: "M", description: "A red giant whose diameter is about 95 times the Sun's." },
  { name: "Markab", bayer: "α Peg", constellation: "Peg", ra: 23.079, dec: 15.205, magnitude: 2.49, distanceLy: 140, spectralType: "B9III", spectralClass: "B", description: "A blue giant at the southwest corner of the Great Square of Pegasus." },
  { name: "Algenib", bayer: "γ Peg", constellation: "Peg", ra: 0.220, dec: 15.184, magnitude: 2.83, distanceLy: 390, spectralType: "B2IV", spectralClass: "B", description: "A Beta Cephei variable at the southeast corner of the Great Square." },
  { name: "Matar", bayer: "η Peg", constellation: "Peg", ra: 22.717, dec: 30.221, magnitude: 2.94, distanceLy: 215, spectralType: "G2II", spectralClass: "G", description: "A binary system with a yellow bright giant primary." },

  // ─── Draco ───
  { name: "Eltanin", bayer: "γ Dra", constellation: "Dra", ra: 17.943, dec: 51.489, magnitude: 2.23, distanceLy: 148, spectralType: "K5III", spectralClass: "K", description: "The brightest star in Draco; used by Bradley in 1728 to discover stellar aberration." },
  { name: "Aldhibah", bayer: "ζ Dra", constellation: "Dra", ra: 17.146, dec: 65.715, magnitude: 3.17, distanceLy: 330, spectralType: "B6III", spectralClass: "B", description: "A blue giant in the dragon's body." },
  { name: "Rastaban", bayer: "β Dra", constellation: "Dra", ra: 17.507, dec: 52.301, magnitude: 2.79, distanceLy: 380, spectralType: "G2Ib", spectralClass: "G", description: "The dragon's eye; a yellow supergiant." },
  { name: "Thuban", bayer: "α Dra", constellation: "Dra", ra: 14.073, dec: 64.376, magnitude: 3.65, distanceLy: 303, spectralType: "A0III", spectralClass: "A", description: "Was the pole star when the Egyptian pyramids were built, around 2700 BC." },
  { name: "Edasich", bayer: "ι Dra", constellation: "Dra", ra: 15.416, dec: 58.966, magnitude: 3.29, distanceLy: 102, spectralType: "K2III", spectralClass: "K", description: "An orange giant with a confirmed massive exoplanet." },
  { name: "Kappa Draconis", bayer: "κ Dra", constellation: "Dra", ra: 12.558, dec: 69.788, magnitude: 3.87, distanceLy: 490, spectralType: "B6IIIe", spectralClass: "B", description: "A rapidly rotating star surrounded by a disk of ejected gas." },
  { name: "Grumium", bayer: "ξ Dra", constellation: "Dra", ra: 17.892, dec: 56.873, magnitude: 3.75, distanceLy: 112, spectralType: "K2III", spectralClass: "K", description: "The dragon's jaw; an orange giant star." },
  { name: "Eta Draconis", bayer: "η Dra", constellation: "Dra", ra: 16.400, dec: 61.514, magnitude: 2.74, distanceLy: 92, spectralType: "G8III", spectralClass: "G", description: "A yellow giant in the dragon's coils." },

  // ─── Centaurus ───
  { name: "Alpha Centauri", bayer: "α Cen", constellation: "Cen", ra: 14.660, dec: -60.835, magnitude: -0.27, distanceLy: 4.37, spectralType: "G2V", spectralClass: "G", description: "The closest star system to Earth; a triple system whose component Proxima has confirmed exoplanets." },
  { name: "Hadar", bayer: "β Cen", constellation: "Cen", ra: 14.064, dec: -60.373, magnitude: 0.61, distanceLy: 525, spectralType: "B1III", spectralClass: "B", description: "A giant triple star system; one of the Southern Pointers to the Southern Cross." },
  { name: "Menkent", bayer: "θ Cen", constellation: "Cen", ra: 14.111, dec: -36.370, magnitude: 2.06, distanceLy: 61, spectralType: "K0IIIb", spectralClass: "K", description: "The third-brightest star in Centaurus; an orange giant 60 light-years away." },
  { name: "Muhlifain", bayer: "γ Cen", constellation: "Cen", ra: 12.692, dec: -48.960, magnitude: 2.17, distanceLy: 130, spectralType: "A1IV", spectralClass: "A", description: "A close binary pair of blue-white stars." },
  { name: "Epsilon Centauri", bayer: "ε Cen", constellation: "Cen", ra: 13.665, dec: -53.467, magnitude: 2.30, distanceLy: 380, spectralType: "B1III", spectralClass: "B", description: "A hot blue giant in the centaur's body." },

  // ─── Additional bright stars for fill ───
  { name: "Canopus", bayer: "α Car", constellation: "Car", ra: 6.399, dec: -52.696, magnitude: -0.74, distanceLy: 310, spectralType: "A9II", spectralClass: "A", description: "The second brightest star in the sky; a white supergiant used for spacecraft navigation." },
  { name: "Arcturus", bayer: "α Boo", constellation: "Boo", ra: 14.261, dec: 19.182, magnitude: -0.05, distanceLy: 37, spectralType: "K1.5IIIFe", spectralClass: "K", description: "The brightest star in the northern hemisphere; an orange giant approaching us at 5 km/s." },
  { name: "Capella", bayer: "α Aur", constellation: "Aur", ra: 5.278, dec: 45.998, magnitude: 0.08, distanceLy: 43, spectralType: "G5III", spectralClass: "G", description: "Actually four stars: two yellow giants plus a pair of red dwarfs." },
  { name: "Procyon", bayer: "α CMi", constellation: "CMi", ra: 7.655, dec: 5.225, magnitude: 0.34, distanceLy: 11.5, spectralType: "F5IV", spectralClass: "F", description: "The 'before the dog' star; rises just before Sirius. Has a white dwarf companion." },
  { name: "Achernar", bayer: "α Eri", constellation: "Eri", ra: 1.629, dec: -57.237, magnitude: 0.46, distanceLy: 139, spectralType: "B6Vep", spectralClass: "B", description: "The flattest known star — spins so fast its equatorial diameter is 56% greater than its polar." },
  { name: "Altair", bayer: "α Aql", constellation: "Aql", ra: 19.846, dec: 8.868, magnitude: 0.77, distanceLy: 17, spectralType: "A7V", spectralClass: "A", description: "One of the Summer Triangle; rotates in 10 hours, making it visibly oblate." },
  { name: "Fomalhaut", bayer: "α PsA", constellation: "PsA", ra: 22.961, dec: -29.622, magnitude: 1.16, distanceLy: 25, spectralType: "A3Va", spectralClass: "A", description: "Surrounded by a dramatic debris disk; one of the first stars with a directly imaged exoplanet candidate." },
  { name: "Acrux", bayer: "α Cru", constellation: "Cru", ra: 12.443, dec: -63.099, magnitude: 0.76, distanceLy: 320, spectralType: "B0.5IV", spectralClass: "B", description: "The brightest star in the Southern Cross; appears on several national flags." },
  { name: "Mimosa", bayer: "β Cru", constellation: "Cru", ra: 12.795, dec: -59.689, magnitude: 1.25, distanceLy: 280, spectralType: "B0.5III", spectralClass: "B", description: "A Beta Cephei variable that pulsates every 4.6 hours." },
  { name: "Gacrux", bayer: "γ Cru", constellation: "Cru", ra: 12.519, dec: -57.113, magnitude: 1.64, distanceLy: 88, spectralType: "M3.5III", spectralClass: "M", description: "The nearest red giant to the Sun; the top of the Southern Cross." },
  { name: "Alnair", bayer: "α Gru", constellation: "Gru", ra: 22.137, dec: -46.961, magnitude: 1.74, distanceLy: 101, spectralType: "B6V", spectralClass: "B", description: "The brightest star in Grus; a blue main-sequence star." },
  { name: "Alhena", bayer: "γ Gem", constellation: "Gem", ra: 6.629, dec: 16.399, magnitude: 1.93, distanceLy: 109, spectralType: "A1IV", spectralClass: "A", description: "The foot of Pollux; one of the brightest stars near the ecliptic." },
  { name: "Peacock", bayer: "α Pav", constellation: "Pav", ra: 20.427, dec: -56.735, magnitude: 1.94, distanceLy: 179, spectralType: "B2IV", spectralClass: "B", description: "Named for the constellation Pavo (the Peacock); a spectroscopic binary." },
  { name: "Diphda", bayer: "β Cet", constellation: "Cet", ra: 0.727, dec: -17.987, magnitude: 2.02, distanceLy: 96, spectralType: "K0III", spectralClass: "K", description: "The brightest star in Cetus; also called Deneb Kaitos, the 'tail of the whale'." },
  { name: "Rasalhague", bayer: "α Oph", constellation: "Oph", ra: 17.582, dec: 12.560, magnitude: 2.07, distanceLy: 48, spectralType: "A5III", spectralClass: "A", description: "The 'head of the serpent bearer'; a rapidly rotating white giant." },
  { name: "Alphecca", bayer: "α CrB", constellation: "CrB", ra: 15.578, dec: 26.715, magnitude: 2.23, distanceLy: 75, spectralType: "A0V", spectralClass: "A", description: "The gem of the Northern Crown; an eclipsing binary dimming slightly every 17 days." },

  // ─── Extra stars to fill constellations and reach ~200 ───
  { name: "Tarazed", bayer: "γ Aql", constellation: "Aql", ra: 19.771, dec: 10.614, magnitude: 2.72, distanceLy: 461, spectralType: "K3II", spectralClass: "K", description: "An orange giant that contrasts with nearby white Altair." },
  { name: "Alshain", bayer: "β Aql", constellation: "Aql", ra: 19.922, dec: 6.407, magnitude: 3.71, distanceLy: 45, spectralType: "G8IV", spectralClass: "G", description: "A nearby subgiant in Aquila with a red dwarf companion." },
  { name: "Zubeneschamali", bayer: "β Lib", constellation: "Lib", ra: 15.283, dec: -9.383, magnitude: 2.61, distanceLy: 185, spectralType: "B8V", spectralClass: "B", description: "Claims of a greenish color make this one of the most debated star colors." },
  { name: "Zubenelgenubi", bayer: "α Lib", constellation: "Lib", ra: 14.848, dec: -16.042, magnitude: 2.75, distanceLy: 77, spectralType: "A3IV", spectralClass: "A", description: "The 'southern claw' of the scorpion; a wide double star." },
  { name: "Hamal", bayer: "α Ari", constellation: "Ari", ra: 2.120, dec: 23.462, magnitude: 2.00, distanceLy: 66, spectralType: "K2III", spectralClass: "K", description: "The brightest star in Aries; has a confirmed Jupiter-mass exoplanet." },
  { name: "Sheratan", bayer: "β Ari", constellation: "Ari", ra: 1.911, dec: 20.808, magnitude: 2.64, distanceLy: 60, spectralType: "A5V", spectralClass: "A", description: "A white main-sequence star in the ram's head." },
  { name: "Menkar", bayer: "α Cet", constellation: "Cet", ra: 3.038, dec: 4.090, magnitude: 2.53, distanceLy: 249, spectralType: "M1.5IIIa", spectralClass: "M", description: "A red giant in the sea monster's jaw; 89 times the Sun's diameter." },
  { name: "Izar", bayer: "ε Boo", constellation: "Boo", ra: 14.750, dec: 27.074, magnitude: 2.37, distanceLy: 210, spectralType: "K0II", spectralClass: "K", description: "One of the most beautiful double stars — gold and blue pair nicknamed 'Pulcherrima'." },
  { name: "Kornephoros", bayer: "β Her", constellation: "Her", ra: 16.503, dec: 21.490, magnitude: 2.77, distanceLy: 139, spectralType: "G7IIIa", spectralClass: "G", description: "The brightest star in Hercules; a yellow giant with a spectroscopic companion." },
  { name: "Ras Algethi", bayer: "α Her", constellation: "Her", ra: 17.244, dec: 14.390, magnitude: 3.48, distanceLy: 360, spectralType: "M5Ib", spectralClass: "M", description: "A red supergiant surrounded by a circumstellar envelope of ejected gas." },

  // ─── More fill stars ───
  { name: "Unukalhai", bayer: "α Ser", constellation: "Ser", ra: 15.738, dec: 6.426, magnitude: 2.65, distanceLy: 73, spectralType: "K2III", spectralClass: "K", description: "The 'neck of the serpent'; an orange giant star." },
  { name: "Ankaa", bayer: "α Phe", constellation: "Phe", ra: 0.438, dec: -42.306, magnitude: 2.39, distanceLy: 77, spectralType: "K0III", spectralClass: "K", description: "The brightest star in Phoenix; an orange giant." },
  { name: "Atria", bayer: "α TrA", constellation: "TrA", ra: 16.811, dec: -69.028, magnitude: 1.92, distanceLy: 415, spectralType: "K2IIb", spectralClass: "K", description: "The brightest star in Triangulum Australe; an orange giant." },
  { name: "Suhail", bayer: "λ Vel", constellation: "Vel", ra: 9.133, dec: -43.433, magnitude: 2.21, distanceLy: 545, spectralType: "K4.5Ib", spectralClass: "K", description: "An orange supergiant in Vela; one of the brightest stars in the southern sky." },
  { name: "Naos", bayer: "ζ Pup", constellation: "Pup", ra: 8.059, dec: -40.003, magnitude: 2.25, distanceLy: 1080, spectralType: "O4I", spectralClass: "O", description: "One of the hottest and most luminous stars visible to the naked eye." },
  { name: "Avior", bayer: "ε Car", constellation: "Car", ra: 8.375, dec: -59.509, magnitude: 1.86, distanceLy: 630, spectralType: "K3III", spectralClass: "K", description: "A binary star in Carina with an orange giant primary." },
  { name: "Miaplacidus", bayer: "β Car", constellation: "Car", ra: 9.220, dec: -69.717, magnitude: 1.68, distanceLy: 111, spectralType: "A1IV", spectralClass: "A", description: "The second brightest star in Carina; a white subgiant." },
  { name: "Wezn", bayer: "β Col", constellation: "Col", ra: 5.849, dec: -35.768, magnitude: 3.12, distanceLy: 86, spectralType: "K1III", spectralClass: "K", description: "An orange giant in Columba, south of Orion." },
  { name: "Phact", bayer: "α Col", constellation: "Col", ra: 5.661, dec: -34.074, magnitude: 2.64, distanceLy: 268, spectralType: "B7IV", spectralClass: "B", description: "A blue subgiant and the brightest star in Columba." },
  { name: "Alsephina", bayer: "δ Vel", constellation: "Vel", ra: 8.745, dec: -54.709, magnitude: 1.96, distanceLy: 80, spectralType: "A1V", spectralClass: "A", description: "The brightest eclipsing binary visible to the naked eye." },

  // ─── More stars to reach ~200 ───
  { name: "Tureis", bayer: "ρ Pup", constellation: "Pup", ra: 8.126, dec: -24.304, magnitude: 2.81, distanceLy: 63, spectralType: "F6IIp", spectralClass: "F", description: "A nearby yellow-white star in Puppis." },
  { name: "Wezen", bayer: "δ CMa", constellation: "CMa", ra: 7.140, dec: -26.393, magnitude: 1.84, distanceLy: 1800, spectralType: "F8Ia", spectralClass: "F", description: "A rare yellow supergiant visible from across the galaxy." },
  { name: "Aspidiske", bayer: "ι Car", constellation: "Car", ra: 9.285, dec: -59.275, magnitude: 2.25, distanceLy: 690, spectralType: "A8Ib", spectralClass: "A", description: "A white supergiant in the keel of the ship Argo." },
  { name: "Yed Prior", bayer: "δ Oph", constellation: "Oph", ra: 16.239, dec: -3.694, magnitude: 2.74, distanceLy: 171, spectralType: "M0.5III", spectralClass: "M", description: "A red giant forming the 'hand' of Ophiuchus." },
  { name: "Sabik", bayer: "η Oph", constellation: "Oph", ra: 17.173, dec: -15.725, magnitude: 2.43, distanceLy: 88, spectralType: "A2V", spectralClass: "A", description: "A close binary star; the two stars orbit every 88 years." },
  { name: "Cebalrai", bayer: "β Oph", constellation: "Oph", ra: 17.725, dec: 4.567, magnitude: 2.77, distanceLy: 82, spectralType: "K2III", spectralClass: "K", description: "An orange giant and the second brightest star in Ophiuchus." },
  { name: "Dabih", bayer: "β Cap", constellation: "Cap", ra: 20.350, dec: -14.781, magnitude: 3.08, distanceLy: 328, spectralType: "F8V", spectralClass: "F", description: "A complex multiple star system in Capricornus." },
  { name: "Deneb Algedi", bayer: "δ Cap", constellation: "Cap", ra: 21.784, dec: -16.127, magnitude: 2.87, distanceLy: 39, spectralType: "A7III", spectralClass: "A", description: "The brightest star in Capricornus; an eclipsing binary." },
  { name: "Nashira", bayer: "γ Cap", constellation: "Cap", ra: 21.668, dec: -16.662, magnitude: 3.68, distanceLy: 139, spectralType: "F0p", spectralClass: "F", description: "A variable star in Capricornus with unusually strong metallic spectral lines." },
  { name: "Algedi", bayer: "α Cap", constellation: "Cap", ra: 20.294, dec: -12.509, magnitude: 3.57, distanceLy: 109, spectralType: "G2Ib", spectralClass: "G", description: "An optical double — two unrelated stars that appear close together from Earth." },
  { name: "Keid", bayer: "40 Eri", constellation: "Eri", ra: 4.255, dec: -7.653, magnitude: 4.43, distanceLy: 16.5, spectralType: "K1V", spectralClass: "K", description: "A triple star only 16.5 ly away; its white dwarf companion was the first discovered." },
  { name: "Cursa", bayer: "β Eri", constellation: "Eri", ra: 5.131, dec: -5.086, magnitude: 2.79, distanceLy: 89, spectralType: "A3IV", spectralClass: "A", description: "The 'footstool of the central one' (Orion); a white subgiant." },
  { name: "Zaurak", bayer: "γ Eri", constellation: "Eri", ra: 3.967, dec: -13.509, magnitude: 2.95, distanceLy: 203, spectralType: "M0.5III", spectralClass: "M", description: "A red giant in the river Eridanus." },

  // ─── Additional stars to pad toward 200 ───
  { name: "Zubenelhakrabi", bayer: "γ Lib", constellation: "Lib", ra: 15.592, dec: -14.789, magnitude: 3.91, distanceLy: 152, spectralType: "K0III", spectralClass: "K", description: "An orange giant in the southern part of Libra." },
  { name: "Muscida", bayer: "ο UMa", constellation: "UMa", ra: 8.505, dec: 60.718, magnitude: 3.36, distanceLy: 184, spectralType: "G4II", spectralClass: "G", description: "A yellow giant in the nose of the Great Bear." },
  { name: "Talitha", bayer: "ι UMa", constellation: "UMa", ra: 8.987, dec: 48.042, magnitude: 3.14, distanceLy: 48, spectralType: "A7V", spectralClass: "A", description: "A quadruple star system in the feet of the Great Bear." },
  { name: "Tania Borealis", bayer: "λ UMa", constellation: "UMa", ra: 10.284, dec: 42.915, magnitude: 3.45, distanceLy: 138, spectralType: "A2IV", spectralClass: "A", description: "A white subgiant meaning the 'second leap' of the gazelle." },
  { name: "Al Giauza", bayer: "λ Ori", constellation: "Ori", ra: 5.585, dec: 9.934, magnitude: 3.54, distanceLy: 1100, spectralType: "O8III", spectralClass: "O", description: "Orion's head; a massive hot star ionizing its surroundings." },
  { name: "Nihal", bayer: "β Lep", constellation: "Lep", ra: 5.471, dec: -20.759, magnitude: 2.84, distanceLy: 160, spectralType: "G5II", spectralClass: "G", description: "A yellow bright giant beneath Orion in Lepus the hare." },
  { name: "Arneb", bayer: "α Lep", constellation: "Lep", ra: 5.545, dec: -17.822, magnitude: 2.58, distanceLy: 2200, spectralType: "F0Ib", spectralClass: "F", description: "A distant supergiant; the brightest star in Lepus." },
  { name: "Muphrid", bayer: "η Boo", constellation: "Boo", ra: 13.911, dec: 18.398, magnitude: 2.68, distanceLy: 37, spectralType: "G0IV", spectralClass: "G", description: "A nearby star very similar to our Sun but slightly more evolved." },
  { name: "Seginus", bayer: "γ Boo", constellation: "Boo", ra: 14.534, dec: 38.308, magnitude: 3.03, distanceLy: 85, spectralType: "A7III", spectralClass: "A", description: "A Delta Scuti variable star in Bootes." },
  { name: "Nekkar", bayer: "β Boo", constellation: "Boo", ra: 15.032, dec: 40.391, magnitude: 3.50, distanceLy: 219, spectralType: "G8IIIa", spectralClass: "G", description: "A yellow giant; one of the few stars observed to produce X-ray flares." },
  { name: "Alderamin", bayer: "α Cep", constellation: "Cep", ra: 21.310, dec: 62.586, magnitude: 2.51, distanceLy: 49, spectralType: "A8V", spectralClass: "A", description: "Will become the pole star around AD 7500; one of the fastest rotating A stars." },
  { name: "Errai", bayer: "γ Cep", constellation: "Cep", ra: 23.656, dec: 77.632, magnitude: 3.21, distanceLy: 45, spectralType: "K1IV", spectralClass: "K", description: "Has a confirmed exoplanet; will be the pole star around AD 4000." },
  { name: "Alfirk", bayer: "β Cep", constellation: "Cep", ra: 21.478, dec: 70.561, magnitude: 3.23, distanceLy: 690, spectralType: "B1IV", spectralClass: "B", description: "The prototype of Beta Cephei variable stars." },

  // ─── Final batch ───
  { name: "Ras Alhague", bayer: "α Oph", constellation: "Oph", ra: 17.582, dec: 12.560, magnitude: 2.07, distanceLy: 48, spectralType: "A5III", spectralClass: "A", description: "The head of the serpent bearer." },
  { name: "Navi", bayer: "γ Cas", constellation: "Cas", ra: 0.945, dec: 60.717, magnitude: 2.47, distanceLy: 550, spectralType: "B0.5IVe", spectralClass: "B", description: "Named by astronaut Gus Grissom (his middle name 'Ivan' reversed) as a navigational aid." },
  { name: "Almach", bayer: "γ And", constellation: "And", ra: 2.065, dec: 42.330, magnitude: 2.17, distanceLy: 355, spectralType: "K3IIb", spectralClass: "K", description: "A striking gold-and-blue double star in Andromeda." },
  { name: "Rana", bayer: "δ Eri", constellation: "Eri", ra: 3.721, dec: -9.763, magnitude: 3.54, distanceLy: 29, spectralType: "K0IV", spectralClass: "K", description: "A nearby orange subgiant only 29 light-years from Earth." },
  { name: "Botein", bayer: "δ Ari", constellation: "Ari", ra: 3.194, dec: 19.727, magnitude: 4.35, distanceLy: 168, spectralType: "K2III", spectralClass: "K", description: "An orange giant in the ram's belly." },
  { name: "Mesarthim", bayer: "γ Ari", constellation: "Ari", ra: 1.892, dec: 19.294, magnitude: 3.88, distanceLy: 164, spectralType: "A1p", spectralClass: "A", description: "One of the first double stars ever discovered through a telescope (Robert Hooke, 1664)." },
];
