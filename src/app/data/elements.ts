import config from "./config";

export type validKeys = "name" | "symbol" | "family" | "atomicNumber" | "group" | "period" | "electronegativity" | "fullElectronConfiguration" | "nobleGasElectronConfiguration" | "electronsPerShell" | "oxidationStates";
export type elementType  = Record<string, string|number|number[]>;
export type elementsType = Record<string, elementType>;

/**
 * A dictionary of every element in the periodic table with data about each element.
 */
const elements: elementsType = {
  NaE: {
    name: "Not an Element",
    symbol: "NaE",
    family: "N/A",
    atomicNumber: NaN,
    group: NaN,
    period: NaN,
    electronegativity: NaN,
    fullElectronConfiguration: "N/A",
    nobleGasElectronConfiguration: "N/A",
    electronsPerShell: [ NaN ],
    oxidationStates: [ NaN ]
  },
  hydrogen: {
    name: "Hydrogen",
    symbol: "H",
    family: "nonmetal",
    atomicNumber: 1,
    group: 1,
    period: 1,
    electronegativity: 2.2,
    fullElectronConfiguration: "1s1",
    nobleGasElectronConfiguration: "N/A",
    electronsPerShell: [ 1 ],
    oxidationStates: [ +1, -1 ]
  },
  helium: {
    name: "Helium",
    symbol: "He",
    family: "nobleGas",
    atomicNumber: 2,
    group: 18,
    period: 1,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2",
    nobleGasElectronConfiguration: "N/A",
    electronsPerShell: [ 2 ],
    oxidationStates: [ 0 ]
  },
  lithium: {
    name: "Lithium",
    symbol: "Li",
    family: "alkaliMetal",
    atomicNumber: 3,
    group: 1,
    period: 2,
    electronegativity: 0.98,
    fullElectronConfiguration: "1s2 2s1",
    nobleGasElectronConfiguration: "[He] 2s1",
    electronsPerShell: [ 2, 1 ],
    oxidationStates: [ +1 ]
  },
  beryllium: {
    name: "Beryllium",
    symbol: "Be",
    family: "alkalineEarthMetal",
    atomicNumber: 4,
    group: 2,
    period: 2,
    electronegativity: 1.57,
    fullElectronConfiguration: "1s2 2s2",
    nobleGasElectronConfiguration: "[He] 2s2",
    electronsPerShell: [ 2, 2 ],
    oxidationStates: [ +2 ]
  },
  boron: {
    name: "Boron",
    symbol: "B",
    family: "metalloid",
    atomicNumber: 5,
    group: 13,
    period: 2,
    electronegativity: 2.04,
    fullElectronConfiguration: "1s2 2s2 2p1",
    nobleGasElectronConfiguration: "[He] 2s2 2p1",
    electronsPerShell: [ 2, 3 ],
    oxidationStates: [ +3 ]
  },
  carbon: {
    name: "Carbon",
    symbol: "C",
    family: "nonmetal",
    atomicNumber: 6,
    group: 14,
    period: 2,
    electronegativity: 2.55,
    fullElectronConfiguration: "1s2 2s2 2p2",
    nobleGasElectronConfiguration: "[He] 2s2 2p2",
    electronsPerShell: [ 2, 4 ],
    oxidationStates: [ +4, +2, -4 ]
  },
  nitrogen: {
    name: "Nitrogen",
    symbol: "N",
    family: "nonmetal",
    atomicNumber: 7,
    group: 15,
    period: 2,
    electronegativity: 3.04,
    fullElectronConfiguration: "1s2 2s2 2p3",
    nobleGasElectronConfiguration: "[He] 2s2 2p3",
    electronsPerShell: [ 2, 5 ],
    oxidationStates: [ +5, +4, +3, +2, +1, -1, -2, -3 ]
  },
  oxygen: {
    name: "Oxygen",
    symbol: "O",
    family: "nonmetal",
    atomicNumber: 8,
    group: 16,
    period: 2,
    electronegativity: 3.44,
    fullElectronConfiguration: "1s2 2s2 2p4",
    nobleGasElectronConfiguration: "[He] 2s2 2p4",
    electronsPerShell: [ 2, 6 ],
    oxidationStates: [ -2 ]
  },
  fluorine: {
    name: "Fluorine",
    symbol: "F",
    family: "halogen",
    atomicNumber: 9,
    group: 17,
    period: 2,
    electronegativity: 3.98,
    fullElectronConfiguration: "1s2 2s2 2p5",
    nobleGasElectronConfiguration: "[He] 2s2 2p5",
    electronsPerShell: [ 2, 7 ],
    oxidationStates: [ -1 ]
  },
  neon: {
    name: "Neon",
    symbol: "Ne",
    family: "nobleGas",
    atomicNumber: 10,
    group: 18,
    period: 2,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6",
    nobleGasElectronConfiguration: "[He] 2s2 2p6",
    electronsPerShell: [ 2, 8 ],
    oxidationStates: [ 0 ]
  },
  sodium: {
    name: "Sodium",
    symbol: "Na",
    family: "alkaliMetal",
    atomicNumber: 11,
    group: 1,
    period: 3,
    electronegativity: 0.93,
    fullElectronConfiguration: "1s2 2s2 2p6 3s1",
    nobleGasElectronConfiguration: "[Ne] 3s1",
    electronsPerShell: [ 2, 8, 1 ],
    oxidationStates: [ +1 ]
  },
  magnesium: {
    name: "Magnesium",
    symbol: "Mg",
    family: "alkalineEarthMetal",
    atomicNumber: 12,
    group: 2,
    period: 3,
    electronegativity: 1.31,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2",
    nobleGasElectronConfiguration: "[Ne] 3s2",
    electronsPerShell: [ 2, 8, 2 ],
    oxidationStates: [ +2 ]
  },
  aluminum: {
    name: "Aluminum",
    symbol: "Al",
    family: "postTransitionMetal",
    atomicNumber: 13,
    group: 13,
    period: 3,
    electronegativity: 1.61,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p1",
    nobleGasElectronConfiguration: "[Ne] 3s2 3p1",
    electronsPerShell: [ 2, 8, 3 ],
    oxidationStates: [ +3 ]
  },
  silicon: {
    name: "Silicon",
    symbol: "Si",
    family: "metalloid",
    atomicNumber: 14,
    group: 14,
    period: 3,
    electronegativity: 1.9,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p2",
    nobleGasElectronConfiguration: "[Ne] 3s2 3p2",
    electronsPerShell: [ 2, 8, 4 ],
    oxidationStates: [ +4, +2, -4 ]
  },
  phosphorus: {
    name: "Phosphorus",
    symbol: "P",
    family: "nonmetal",
    atomicNumber: 15,
    group: 15,
    period: 3,
    electronegativity: 2.19,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p3",
    nobleGasElectronConfiguration: "[Ne] 3s2 3p3",
    electronsPerShell: [ 2, 8, 5 ],
    oxidationStates: [ +5, +3, -3 ]
  },
  sulfur: {
    name: "Sulfur",
    symbol: "S",
    family: "nonmetal",
    atomicNumber: 16,
    group: 16,
    period: 3,
    electronegativity: 2.58,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p4",
    nobleGasElectronConfiguration: "[Ne] 3s2 3p4",
    electronsPerShell: [ 2, 8, 6 ],
    oxidationStates: [ +6, +4, -2 ]
  },
  chlorine: {
    name: "Chlorine",
    symbol: "Cl",
    family: "halogen",
    atomicNumber: 17,
    group: 17,
    period: 3,
    electronegativity: 3.16,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p5",
    nobleGasElectronConfiguration: "[Ne] 3s2 3p5",
    electronsPerShell: [ 2, 8, 7 ],
    oxidationStates: [ +7, +5, +1, -1 ]
  },
  argon: {
    name: "Argon",
    symbol: "Ar",
    family: "nobleGas",
    atomicNumber: 18,
    group: 18,
    period: 3,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6",
    nobleGasElectronConfiguration: "[Ne] 3s2 3p6",
    electronsPerShell: [ 2, 8, 8 ],
    oxidationStates: [ 0 ]
  },
  potassium: {
    name: "Potassium",
    symbol: "K",
    family: "alkaliMetal",
    atomicNumber: 19,
    group: 1,
    period: 4,
    electronegativity: 0.82,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s1",
    nobleGasElectronConfiguration: "[Ar] 4s1",
    electronsPerShell: [ 2, 8, 8, 1 ],
    oxidationStates: [ +1 ]
  },
  calcium: {
    name: "Calcium",
    symbol: "Ca",
    family: "alkalineEarthMetal",
    atomicNumber: 20,
    group: 2,
    period: 4,
    electronegativity: 1,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2",
    nobleGasElectronConfiguration: "[Ar] 4s2",
    electronsPerShell: [ 2, 8, 8, 2 ],
    oxidationStates: [ +2 ]
  },
  scandium: {
    name: "Scandium",
    symbol: "Sc",
    family: "transitionMetal",
    atomicNumber: 21,
    group: 3,
    period: 4,
    electronegativity: 1.36,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d1 4s2",
    nobleGasElectronConfiguration: "[Ar] 4s2 3d1",
    electronsPerShell: [ 2, 8, 9, 2 ],
    oxidationStates: [ +3 ]
  },
  titanium: {
    name: "Titanium",
    symbol: "Ti",
    family: "transitionMetal",
    atomicNumber: 22,
    group: 4,
    period: 4,
    electronegativity: 1.54,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d2 4s2",
    nobleGasElectronConfiguration: "[Ar] 3d2 4s2",
    electronsPerShell: [ 2, 8, 10, 2 ],
    oxidationStates: [ +4, +3, +2 ]
  },
  vanadium: {
    name: "Vanadium",
    symbol: "V",
    family: "transitionMetal",
    atomicNumber: 23,
    group: 5,
    period: 4,
    electronegativity: 1.63,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d3 4s2",
    nobleGasElectronConfiguration: "[Ar] 3d3 4s2",
    electronsPerShell: [ 2, 8, 11, 2 ],
    oxidationStates: [ +5, +4, +3, +2 ]
  },
  chromium: {
    name: "Chromium",
    symbol: "Cr",
    family: "transitionMetal",
    atomicNumber: 24,
    group: 6,
    period: 4,
    electronegativity: 1.66,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d4 4s2",
    nobleGasElectronConfiguration: "[Ar] 3d4 4s2",
    electronsPerShell: [ 2, 8, 12, 2 ],
    oxidationStates: [ +6, +3, +2 ]
  },
  manganese: {
    name: "Manganese",
    symbol: "Mn",
    family: "transitionMetal",
    atomicNumber: 25,
    group: 7,
    period: 4,
    electronegativity: 1.55,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d5 4s2",
    nobleGasElectronConfiguration: "[Ar] 3d5 4s2",
    electronsPerShell: [ 2, 8, 13, 2 ],
    oxidationStates: [ +7, +4, +3, +2 ]
  },
  iron: {
    name: "Iron",
    symbol: "Fe",
    family: "transitionMetal",
    atomicNumber: 26,
    group: 8,
    period: 4,
    electronegativity: 1.83,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d6 4s2",
    nobleGasElectronConfiguration: "[Ar] 3d6 4s2",
    electronsPerShell: [ 2, 8, 14, 2 ],
    oxidationStates: [ +4, +2 ]
  },
  cobalt: {
    name: "Cobalt",
    symbol: "Co",
    family: "transitionMetal",
    atomicNumber: 27,
    group: 9,
    period: 4,
    electronegativity: 1.88,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d7 4s2",
    nobleGasElectronConfiguration: "[Ar] 3d7 4s2",
    electronsPerShell: [ 2, 8, 15, 2 ],
    oxidationStates: [ +3, +2 ]
  },
  nickel: {
    name: "Nickel",
    symbol: "Ni",
    family: "transitionMetal",
    atomicNumber: 28,
    group: 10,
    period: 4,
    electronegativity: 1.91,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d8 4s2",
    nobleGasElectronConfiguration: "[Ar] 3d8 4s2",
    electronsPerShell: [ 2, 8, 16, 2 ],
    oxidationStates: [ +3, +2 ]
  },
  copper: {
    name: "Copper",
    symbol: "Cu",
    family: "transitionMetal",
    atomicNumber: 29,
    group: 11,
    period: 4,
    electronegativity: 1.9,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d9 4s2",
    nobleGasElectronConfiguration: "[Ar] 3d9 4s2",
    electronsPerShell: [ 2, 8, 17, 2 ],
    oxidationStates: [ +2, +1 ]
  },
  zinc: {
    name: "Zinc",
    symbol: "Zn",
    family: "transitionMetal",
    atomicNumber: 30,
    group: 12,
    period: 4,
    electronegativity: 1.65,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2",
    nobleGasElectronConfiguration: "[Ar] 3d10 4s2",
    electronsPerShell: [ 2, 8, 18, 2 ],
    oxidationStates: [ +2 ]
  },
  gallium: {
    name: "Gallium",
    symbol: "Ga",
    family: "postTransitionMetal",
    atomicNumber: 31,
    group: 13,
    period: 4,
    electronegativity: 1.81,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p1",
    nobleGasElectronConfiguration: "[Ar] 3d10 4s2 4p1",
    electronsPerShell: [ 2, 8, 18, 3 ],
    oxidationStates: [ +3 ]
  },
  germanium: {
    name: "Germanium",
    symbol: "Ge",
    family: "metalloid",
    atomicNumber: 32,
    group: 14,
    period: 4,
    electronegativity: 2.01,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p2",
    nobleGasElectronConfiguration: "[Ar] 3d10 4s2 4p2",
    electronsPerShell: [ 2, 8, 18, 4 ],
    oxidationStates: [ +4, +2 ]
  },
  arsenic: {
    name: "Arsenic",
    symbol: "As",
    family: "metalloid",
    atomicNumber: 33,
    group: 15,
    period: 4,
    electronegativity: 2.18,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p3",
    nobleGasElectronConfiguration: "[Ar] 3d10 4s2 4p3",
    electronsPerShell: [ 2, 8, 18, 5 ],
    oxidationStates: [ +5, +3, -3 ]
  },
  selenium: {
    name: "Selenium",
    symbol: "Se",
    family: "nonmetal",
    atomicNumber: 34,
    group: 16,
    period: 4,
    electronegativity: 2.55,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p4",
    nobleGasElectronConfiguration: "[Ar] 3d10 4s2 4p4",
    electronsPerShell: [ 2, 8, 18, 6 ],
    oxidationStates: [ +6, +4, -2 ]
  },
  bromine: {
    name: "Bromine",
    symbol: "Br",
    family: "halogen",
    atomicNumber: 35,
    group: 17,
    period: 4,
    electronegativity: 2.96,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p5",
    nobleGasElectronConfiguration: "[Ar] 3d10 4s2 4p5",
    electronsPerShell: [ 2, 8, 18, 7 ],
    oxidationStates: [ +5, +1, -1 ]
  },
  krypton: {
    name: "Krypton",
    symbol: "Kr",
    family: "nobleGas",
    atomicNumber: 36,
    group: 18,
    period: 4,
    electronegativity: 3,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6",
    nobleGasElectronConfiguration: "[Ar] 3d10 4s2 4p6",
    electronsPerShell: [ 2, 8, 18, 8 ],
    oxidationStates: [ 0 ]
  },
  rubidium: {
    name: "Rubidium",
    symbol: "Rb",
    family: "alkaliMetal",
    atomicNumber: 37,
    group: 1,
    period: 5,
    electronegativity: 0.82,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 5s1",
    nobleGasElectronConfiguration: "[Kr] 5s1",
    electronsPerShell: [ 2, 8, 18, 8, 1 ],
    oxidationStates: [ +1 ]
  },
  strontium: {
    name: "Strontium",
    symbol: "Sr",
    family: "alkalineEarthMetal",
    atomicNumber: 38,
    group: 2,
    period: 5,
    electronegativity: 0.95,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 5s2",
    nobleGasElectronConfiguration: "[Kr] 5s2",
    electronsPerShell: [ 2, 8, 18, 8, 2 ],
    oxidationStates: [ +2 ]
  },
  yttrium: {
    name: "Yttrium",
    symbol: "Y",
    family: "transitionMetal",
    atomicNumber: 39,
    group: 3,
    period: 5,
    electronegativity: 1.22,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d1 5s2",
    nobleGasElectronConfiguration: "[Kr] 4d1 5s2",
    electronsPerShell: [ 2, 8, 18, 9, 2 ],
    oxidationStates: [ +3 ]
  },
  zirconium: {
    name: "Zirconium",
    symbol: "Zr",
    family: "transitionMetal",
    atomicNumber: 40,
    group: 4,
    period: 5,
    electronegativity: 1.33,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d2 5s2",
    nobleGasElectronConfiguration: "[Kr] 4d2 5s2",
    electronsPerShell: [ 2, 8, 18, 10, 2 ],
    oxidationStates: [ +4 ]
  },
  niobium: {
    name: "Niobium",
    symbol: "Nb",
    family: "transitionMetal",
    atomicNumber: 41,
    group: 5,
    period: 5,
    electronegativity: 1.6,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d3 5s2",
    nobleGasElectronConfiguration: "[Kr] 4d3 5s2",
    electronsPerShell: [ 2, 8, 18, 11, 2 ],
    oxidationStates: [ +5, +3 ]
  },
  molybdenum: {
    name: "Molybdenum",
    symbol: "Mo",
    family: "transitionMetal",
    atomicNumber: 42,
    group: 6,
    period: 5,
    electronegativity: 2.16,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d4 5s2",
    nobleGasElectronConfiguration: "[Kr] 4d4 5s2",
    electronsPerShell: [ 2, 8, 18, 12, 2 ],
    oxidationStates: [ +6 ]
  },
  technetium: {
    name: "Technetium",
    symbol: "Tc",
    family: "transitionMetal",
    atomicNumber: 43,
    group: 7,
    period: 5,
    electronegativity: 1.9,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d5 5s2",
    nobleGasElectronConfiguration: "[Kr] 4d5 5s2",
    electronsPerShell: [ 2, 8, 18, 13, 2 ],
    oxidationStates: [ +7, +6, +4 ]
  },
  ruthenium: {
    name: "Ruthenium",
    symbol: "Ru",
    family: "transitionMetal",
    atomicNumber: 44,
    group: 8,
    period: 5,
    electronegativity: 2.2,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d6 5s2",
    nobleGasElectronConfiguration: "[Kr] 4d6 5s2",
    electronsPerShell: [ 2, 8, 18, 14, 2 ],
    oxidationStates: [ +3 ]
  },
  rhodium: {
    name: "Rhodium",
    symbol: "Rh",
    family: "transitionMetal",
    atomicNumber: 45,
    group: 9,
    period: 5,
    electronegativity: 2.28,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d7 5s2",
    nobleGasElectronConfiguration: "[Kr] 4d7 5s2",
    electronsPerShell: [ 2, 8, 18, 15, 2 ],
    oxidationStates: [ +3 ]
  },
  palladium: {
    name: "Palladium",
    symbol: "Pd",
    family: "transitionMetal",
    atomicNumber: 46,
    group: 10,
    period: 5,
    electronegativity: 2.2,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d8 5s2",
    nobleGasElectronConfiguration: "[Kr] 4d8 5s2",
    electronsPerShell: [ 2, 8, 18, 16, 2 ],
    oxidationStates: [ +3, +2 ]
  },
  silver: {
    name: "Silver",
    symbol: "Ag",
    family: "transitionMetal",
    atomicNumber: 47,
    group: 11,
    period: 5,
    electronegativity: 1.93,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d9 5s2",
    nobleGasElectronConfiguration: "[Kr] 4d9 5s2",
    electronsPerShell: [ 2, 8, 18, 17, 2 ],
    oxidationStates: [ +1 ]
  },
  cadmium: {
    name: "Cadmium",
    symbol: "Cd",
    family: "transitionMetal",
    atomicNumber: 48,
    group: 12,
    period: 5,
    electronegativity: 1.69,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2",
    nobleGasElectronConfiguration: "[Kr] 4d10 5s2",
    electronsPerShell: [ 2, 8, 18, 18, 2 ],
    oxidationStates: [ +2 ]
  },
  indium: {
    name: "Indium",
    symbol: "In",
    family: "postTransitionMetal",
    atomicNumber: 49,
    group: 13,
    period: 5,
    electronegativity: 1.78,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p1",
    nobleGasElectronConfiguration: "[Kr] 4d10 5s2 5p1",
    electronsPerShell: [ 2, 8, 18, 18, 3 ],
    oxidationStates: [ +3 ]
  },
  tin: {
    name: "Tin",
    symbol: "Sn",
    family: "postTransitionMetal",
    atomicNumber: 50,
    group: 14,
    period: 5,
    electronegativity: 1.96,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p2",
    nobleGasElectronConfiguration: "[Kr] 4d10 5s2 5p2",
    electronsPerShell: [ 2, 8, 18, 18, 4 ],
    oxidationStates: [ +4, +2 ]
  },
  antimony: {
    name: "Antimony",
    symbol: "Sb",
    family: "metalloid",
    atomicNumber: 51,
    group: 15,
    period: 5,
    electronegativity: 2.05,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p3",
    nobleGasElectronConfiguration: "[Kr] 4d10 5s2 5p3",
    electronsPerShell: [ 2, 8, 18, 18, 5 ],
    oxidationStates: [ +5, +3, -3 ]
  },
  tellurium: {
    name: "Tellurium",
    symbol: "Te",
    family: "metalloid",
    atomicNumber: 52,
    group: 16,
    period: 5,
    electronegativity: 2.1,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p4",
    nobleGasElectronConfiguration: "[Kr] 4d10 5s2 5p4",
    electronsPerShell: [ 2, 8, 18, 18, 6 ],
    oxidationStates: [ +6, +4, -2 ]
  },
  iodine: {
    name: "Iodine",
    symbol: "I",
    family: "halogen",
    atomicNumber: 53,
    group: 17,
    period: 5,
    electronegativity: 2.66,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p5",
    nobleGasElectronConfiguration: "[Kr] 4d10 5s2 5p5",
    electronsPerShell: [ 2, 8, 18, 18, 7 ],
    oxidationStates: [ +7, +5, +1, -1 ]
  },
  xenon: {
    name: "Xenon",
    symbol: "Xe",
    family: "nobleGas",
    atomicNumber: 54,
    group: 18,
    period: 5,
    electronegativity: 2.6,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p6",
    nobleGasElectronConfiguration: "[Kr] 4d10 5s2 5p6",
    electronsPerShell: [ 2, 8, 18, 18, 8 ],
    oxidationStates: [ 0 ]
  },
  cesium: {
    name: "Cesium",
    symbol: "Cs",
    family: "alkaliMetal",
    atomicNumber: 55,
    group: 1,
    period: 6,
    electronegativity: 0.79,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p6 6s1",
    nobleGasElectronConfiguration: "[Xe] 6s1",
    electronsPerShell: [ 2, 8, 18, 18, 8, 1 ],
    oxidationStates: [ +1 ]
  },
  barium: {
    name: "Barium",
    symbol: "Ba",
    family: "alkalineEarthMetal",
    atomicNumber: 56,
    group: 2,
    period: 6,
    electronegativity: 0.89,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p6 6s2",
    nobleGasElectronConfiguration: "[Xe] 6s2",
    electronsPerShell: [ 2, 8, 18, 18, 8, 2 ],
    oxidationStates: [ +2 ]
  },
  lanthanum: {
    name: "Lanthanum",
    symbol: "La",
    family: "lanthanide",
    atomicNumber: 57,
    group: "lanthanide",
    period: 6,
    electronegativity: 1.1,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p6 5d1 6s2",
    nobleGasElectronConfiguration: "[Xe] 5d1 6s2",
    electronsPerShell: [ 2, 8, 18, 18, 9, 2 ],
    oxidationStates: [ +3 ]
  },
  cerium: {
    name: "Cerium",
    symbol: "Ce",
    family: "lanthanide",
    atomicNumber: 58,
    group: "lanthanide",
    period: 6,
    electronegativity: 1.12,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f1 5s2 5p6 5d1 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f1 5d1 6s2",
    electronsPerShell: [ 2, 8, 18, 19, 9, 2 ],
    oxidationStates: [ +4, +3 ]
  },
  praseodymium: {
    name: "Praseodymium",
    symbol: "Pr",
    family: "lanthanide",
    atomicNumber: 59,
    group: "lanthanide",
    period: 6,
    electronegativity: 1.13,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f3 5s2 5p6 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f3 6s2",
    electronsPerShell: [ 2, 8, 18, 21, 8, 2 ],
    oxidationStates: [ +3 ]
  },
  neodymium: {
    name: "Neodymium",
    symbol: "Nd",
    family: "lanthanide",
    atomicNumber: 60,
    group: "lanthanide",
    period: 6,
    electronegativity: 1.14,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f4 5s2 5p6 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f4 6s2",
    electronsPerShell: [ 2, 8, 18, 22, 8, 2 ],
    oxidationStates: [ +3 ]
  },
  promethium: {
    name: "Promethium",
    symbol: "Pm",
    family: "lanthanide",
    atomicNumber: 61,
    group: "lanthanide",
    period: 6,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f5 5s2 5p6 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f5 6s2",
    electronsPerShell: [ 2, 8, 18, 23, 8, 2 ],
    oxidationStates: [ +3 ]
  },
  samarium: {
    name: "Samarium",
    symbol: "Sm",
    family: "lanthanide",
    atomicNumber: 62,
    group: "lanthanide",
    period: 6,
    electronegativity: 1.17,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f6 5s2 5p6 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f6 6s2",
    electronsPerShell: [ 2, 8, 18, 24, 8, 2 ],
    oxidationStates: [ +3, +2 ]
  },
  europium: {
    name: "Europium",
    symbol: "Eu",
    family: "lanthanide",
    atomicNumber: 63,
    group: "lanthanide",
    period: 6,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f7 5s2 5p6 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f7 6s2",
    electronsPerShell: [ 2, 8, 18, 25, 8, 2 ],
    oxidationStates: [ +3, +2 ]
  },
  gadolinium: {
    name: "Gadolinium",
    symbol: "Gd",
    family: "lanthanide",
    atomicNumber: 64,
    group: "lanthanide",
    period: 6,
    electronegativity: 1.2,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f8 5s2 5p6 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f8 6s2",
    electronsPerShell: [ 2, 8, 18, 26, 8, 2 ],
    oxidationStates: [ +3 ]
  },
  terbium: {
    name: "Terbium",
    symbol: "Tb",
    family: "lanthanide",
    atomicNumber: 65,
    group: "lanthanide",
    period: 6,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f9 5s2 5p6 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f9 6s2",
    electronsPerShell: [ 2, 8, 18, 27, 8, 2 ],
    oxidationStates: [ +3 ]
  },
  dysprosium: {
    name: "Dysprosium",
    symbol: "Dy",
    family: "lanthanide",
    atomicNumber: 66,
    group: "lanthanide",
    period: 6,
    electronegativity: 1.22,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f10 5s2 5p6 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f10 6s2",
    electronsPerShell: [ 2, 8, 18, 28, 8, 2 ],
    oxidationStates: [ +3 ]
  },
  holmium: {
    name: "Holmium",
    symbol: "Ho",
    family: "lanthanide",
    atomicNumber: 67,
    group: "lanthanide",
    period: 6,
    electronegativity: 1.23,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f11 5s2 5p6 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f11 6s2",
    electronsPerShell: [ 2, 8, 18, 29, 8, 2 ],
    oxidationStates: [ +3 ]
  },
  erbium: {
    name: "Erbium",
    symbol: "Er",
    family: "lanthanide",
    atomicNumber: 68,
    group: "lanthanide",
    period: 6,
    electronegativity: 1.24,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f12 5s2 5p6 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f12 6s2",
    electronsPerShell: [ 2, 8, 18, 30, 8, 2 ],
    oxidationStates: [ +3 ]
  },
  thulium: {
    name: "Thulium",
    symbol: "Tm",
    family: "lanthanide",
    atomicNumber: 69,
    group: "lanthanide",
    period: 6,
    electronegativity: 1.25,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f13 5s2 5p6 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f13 6s2",
    electronsPerShell: [ 2, 8, 18, 31, 8, 2 ],
    oxidationStates: [ +3 ]
  },
  ytterbium: {
    name: "Ytterbium",
    symbol: "Yb",
    family: "lanthanide",
    atomicNumber: 70,
    group: "lanthanide",
    period: 6,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f14 6s2",
    electronsPerShell: [ 2, 8, 18, 32, 8, 2 ],
    oxidationStates: [ +3, +2 ]
  },
  lutetium: {
    name: "Lutetium",
    symbol: "Lu",
    family: "lanthanide",
    atomicNumber: 71,
    group: 3,
    period: 6,
    electronegativity: 1.27,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d1 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f14 5d1 6s2",
    electronsPerShell: [ 2, 8, 18, 32, 9, 2 ],
    oxidationStates: [ +3 ]
  },
  hafnium: {
    name: "Hafnium",
    symbol: "Hf",
    family: "transitionMetal",
    atomicNumber: 72,
    group: 4,
    period: 6,
    electronegativity: 1.3,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d2 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f14 5d2 6s2",
    electronsPerShell: [ 2, 8, 18, 32, 10, 2 ],
    oxidationStates: [ +4 ]
  },
  tantalum: {
    name: "Tantalum",
    symbol: "Ta",
    family: "transitionMetal",
    atomicNumber: 73,
    group: 5,
    period: 6,
    electronegativity: 1.5,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d3 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f14 5d3 6s2",
    electronsPerShell: [ 2, 8, 18, 32, 11, 2 ],
    oxidationStates: [ +5 ]
  },
  tungsten: {
    name: "Tungsten",
    symbol: "W",
    family: "transitionMetal",
    atomicNumber: 74,
    group: 6,
    period: 6,
    electronegativity: 2.36,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d4 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f14 5d4 6s2",
    electronsPerShell: [ 2, 8, 18, 32, 12, 2 ],
    oxidationStates: [ +6 ]
  },
  rhenium: {
    name: "Rhenium",
    symbol: "Re",
    family: "transitionMetal",
    atomicNumber: 75,
    group: 7,
    period: 6,
    electronegativity: 1.9,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d5 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f14 5d5 6s2",
    electronsPerShell: [ 2, 8, 18, 32, 13, 2 ],
    oxidationStates: [ +7, +6, +4 ]
  },
  osmium: {
    name: "Osmium",
    symbol: "Os",
    family: "transitionMetal",
    atomicNumber: 76,
    group: 8,
    period: 6,
    electronegativity: 2.2,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d6 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f14 5d6 6s2",
    electronsPerShell: [ 2, 8, 18, 32, 14, 2 ],
    oxidationStates: [ +4, +3 ]
  },
  iridium: {
    name: "Iridium",
    symbol: "Ir",
    family: "transitionMetal",
    atomicNumber: 77,
    group: 9,
    period: 6,
    electronegativity: 2.2,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d7 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f14 5d7 6s2",
    electronsPerShell: [ 2, 8, 18, 32, 15, 2 ],
    oxidationStates: [ +4, +3 ]
  },
  platinum: {
    name: "Platinum",
    symbol: "Pt",
    family: "transitionMetal",
    atomicNumber: 78,
    group: 10,
    period: 6,
    electronegativity: 2.28,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d8 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f14 5d8 6s2",
    electronsPerShell: [ 2, 8, 18, 32, 16, 2 ],
    oxidationStates: [ +4, +2 ]
  },
  gold: {
    name: "Gold",
    symbol: "Au",
    family: "transitionMetal",
    atomicNumber: 79,
    group: 11,
    period: 6,
    electronegativity: 2.54,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d9 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f14 5d9 6s2",
    electronsPerShell: [ 2, 8, 18, 32, 17, 2 ],
    oxidationStates: [ +3, +1 ]
  },
  mercury: {
    name: "Mercury",
    symbol: "Hg",
    family: "transitionMetal",
    atomicNumber: 80,
    group: 13,
    period: 6,
    electronegativity: 2,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2",
    nobleGasElectronConfiguration: "[Xe] 4f14 5d10 6s2",
    electronsPerShell: [ 2, 8, 18, 32, 18, 2 ],
    oxidationStates: [ +2, +1 ]
  },
  thallium: {
    name: "Thallium",
    symbol: "Tl",
    family: "postTransitionMetal",
    atomicNumber: 81,
    group: 14,
    period: 6,
    electronegativity: 1.62,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p1",
    nobleGasElectronConfiguration: "[Xe] 4f14 5d10 6s2 6p1",
    electronsPerShell: [ 2, 8, 18, 32, 18, 3 ],
    oxidationStates: [ +3, +1 ]
  },
  lead: {
    name: "Lead",
    symbol: "Pb",
    family: "postTransitionMetal",
    atomicNumber: 82,
    group: 14,
    period: 6,
    electronegativity: 2.33,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p2",
    nobleGasElectronConfiguration: "[Xe] 4f14 5d10 6s2 6p2",
    electronsPerShell: [ 2, 8, 18, 32, 18, 4 ],
    oxidationStates: [ +4, +2 ]
  },
  bismuth: {
    name: "Bismuth",
    symbol: "Bi",
    family: "postTransitionMetal",
    atomicNumber: 83,
    group: 15,
    period: 6,
    electronegativity: 2.02,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p3",
    nobleGasElectronConfiguration: "[Xe] 4f14 5d10 6s2 6p3",
    electronsPerShell: [ 2, 8, 18, 32, 18, 5 ],
    oxidationStates: [ +5, +3 ]
  },
  polonium: {
    name: "Polonium",
    symbol: "Sb",
    family: "postTransitionMetal",
    atomicNumber: 84,
    group: 16,
    period: 6,
    electronegativity: 2,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p4",
    nobleGasElectronConfiguration: "[Xe] 4f14 5d10 6s2 6p4",
    electronsPerShell: [ 2, 8, 18, 32, 18, 6 ],
    oxidationStates: [ +4, +2 ]
  },
  astatine: {
    name: "Astatine",
    symbol: "At",
    family: "metalloid",
    atomicNumber: 85,
    group: 17,
    period: 6,
    electronegativity: 2.2,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p5",
    nobleGasElectronConfiguration: "[Xe] 4f14 5d10 6s2 6p5",
    electronsPerShell: [ 2, 8, 18, 32, 18, 7 ],
    oxidationStates: [ +7, +5, +3, +1, -1 ]
  },
  radon: {
    name: "Radon",
    symbol: "Rn",
    family: "nobleGas",
    atomicNumber: 86,
    group: 18,
    period: 6,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p6",
    nobleGasElectronConfiguration: "[Xe] 4f14 5d10 6s2 6p6",
    electronsPerShell: [ 2, 8, 18, 32, 18, 8 ],
    oxidationStates: [ 0 ]
  },
  francium: {
    name: "Francium",
    symbol: "Fr",
    family: "alkaliMetal",
    atomicNumber: 87,
    group: 1,
    period: 7,
    electronegativity: 0.7,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p6 7s1",
    nobleGasElectronConfiguration: "[Rn] 7s1",
    electronsPerShell: [ 2, 8, 18, 32, 18, 8, 1 ],
    oxidationStates: [ +1 ]
  },
  radium: {
    name: "Radium",
    symbol: "Ra",
    family: "alkalineEarthMetal",
    atomicNumber: 88,
    group: 2,
    period: 7,
    electronegativity: 0.9,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p6 7s2",
    nobleGasElectronConfiguration: "[Rn] 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 18, 8, 2 ],
    oxidationStates: [ +2 ]
  },
  actinium: {
    name: "Actinium",
    symbol: "Ac",
    family: "actinide",
    atomicNumber: 89,
    group: "actinide",
    period: 7,
    electronegativity: 1.1,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p6 6d1 7s2",
    nobleGasElectronConfiguration: "[Rn] 6d1 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 18, 9, 2 ],
    oxidationStates: [ +3 ]
  },
  thorium: {
    name: "Thorium",
    symbol: "Th",
    family: "actinide",
    atomicNumber: 90,
    group: "actinide",
    period: 7,
    electronegativity: 1.3,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p6 6d2 7s2",
    nobleGasElectronConfiguration: "[Rn] 6d2 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 18, 10, 2 ],
    oxidationStates: [ +4 ]
  },
  protactinium: {
    name: "Protactinium",
    symbol: "Pa",
    family: "actinide",
    atomicNumber: 91,
    group: "actinide",
    period: 7,
    electronegativity: 1.5,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f2 6s2 6p6 6d1 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f2 6d1 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 20, 9, 2 ],
    oxidationStates: [ +5, +4 ]
  },
  uranium: {
    name: "Uranium",
    symbol: "U",
    family: "actinide",
    atomicNumber: 92,
    group: "actinide",
    period: 7,
    electronegativity: 1.38,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f3 6s2 6p6 6d1 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f3 6d1 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 21, 9, 2 ],
    oxidationStates: [ +6, +5, +4, +3 ]
  },
  neptunium: {
    name: "Neptunium",
    symbol: "Np",
    family: "actinide",
    atomicNumber: 93,
    group: "actinide",
    period: 7,
    electronegativity: 1.36,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f4 6s2 6p6 6d1 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f4 6d1 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 22, 9, 2 ],
    oxidationStates: [ +6, +5, +4, +3 ]
  },
  plutonium: {
    name: "Plutonium",
    symbol: "Pu",
    family: "actinide",
    atomicNumber: 94,
    group: "actinide",
    period: 7,
    electronegativity: 1.28,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f6 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 24, 8, 2 ],
    oxidationStates: [ +6, +5, +4, +3 ]
  },
  americium: {
    name: "Americium",
    symbol: "Am",
    family: "actinide",
    atomicNumber: 95,
    group: "actinide",
    period: 7,
    electronegativity: 1.3,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f7 6s2 6p6 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f7 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 25, 8, 2 ],
    oxidationStates: [ +6, +5, +4, +3 ]
  },
  curium: {
    name: "Curium",
    symbol: "Cm",
    family: "actinide",
    atomicNumber: 96,
    group: "actinide",
    period: 7,
    electronegativity: 1.3,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f8 6s2 6p6 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f8 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 26, 8, 2 ],
    oxidationStates: [ +3 ]
  },
  berkelium: {
    name: "Berkelium",
    symbol: "Bk",
    family: "actinide",
    atomicNumber: 97,
    group: "actinide",
    period: 7,
    electronegativity: 1.3,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f9 6s2 6p6 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f9 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 27, 8, 2 ],
    oxidationStates: [ +4, +3 ]
  },
  californium: {
    name: "Californium",
    symbol: "Cf",
    family: "actinide",
    atomicNumber: 98,
    group: "actinide",
    period: 7,
    electronegativity: 1.3,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f10 6s2 6p6 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f10 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 28, 8, 2 ],
    oxidationStates: [ +3 ]
  },
  einsteinium: {
    name: "Einsteinium",
    symbol: "Es",
    family: "actinide",
    atomicNumber: 99,
    group: "actinide",
    period: 7,
    electronegativity: 1.3,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f11 6s2 6p6 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f11 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 29, 8, 2 ],
    oxidationStates: [ +3 ]
  },
  fermium: {
    name: "Fermium",
    symbol: "Er",
    family: "actinide",
    atomicNumber: 100,
    group: "actinide",
    period: 7,
    electronegativity: 1.3,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f12 6s2 6p6 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f12 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 30, 8, 2 ],
    oxidationStates: [ +3 ]
  },
  mendelevium: {
    name: "Mendelevium",
    symbol: "Md",
    family: "actinide",
    atomicNumber: 101,
    group: "actinide",
    period: 7,
    electronegativity: 1.3,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f13 6s2 6p6 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f13 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 31, 8, 2 ],
    oxidationStates: [ +3, +2 ]
  },
  nobelium: {
    name: "Nobelium",
    symbol: "No",
    family: "actinide",
    atomicNumber: 102,
    group: "actinide",
    period: 7,
    electronegativity: 1.3,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f14 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 32, 8, 2 ],
    oxidationStates: [ +3, +2 ]
  },
  lawrencium: {
    name: "Lawrencium",
    symbol: "Lr",
    family: "actinide",
    atomicNumber: 103,
    group: 3,
    period: 7,
    electronegativity: 1.3,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 7s2 7p1",
    nobleGasElectronConfiguration: "[Rn] 5f6 7s2 7p1",
    electronsPerShell: [ 2, 8, 18, 32, 32, 9, 2 ],
    oxidationStates: [ +3 ]
  },
  rutherfordium: {
    name: "Rutherfordium",
    symbol: "Rf",
    family: "transitionMetal",
    atomicNumber: 104,
    group: 4,
    period: 7,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 6d2 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f6 6d2 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 32, 10, 2 ],
    oxidationStates: [ +4 ]
  },
  dubnium: {
    name: "Dubnium",
    symbol: "Db",
    family: "transitionMetal",
    atomicNumber: 105,
    group: 5,
    period: 7,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 6d3 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f6 6d3 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 32, 11, 2 ],
    oxidationStates: [ +5, +4, +3 ]
  },
  seaborgium: {
    name: "Seaborgium",
    symbol: "Sg",
    family: "transitionMetal",
    atomicNumber: 106,
    group: 6,
    period: 7,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 6d4 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f6 6d4 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 32, 12, 2 ],
    oxidationStates: [ +6, +5, +4, +3, 0 ]
  },
  bohrium: {
    name: "Bohrium",
    symbol: "Bh",
    family: "transitionMetal",
    atomicNumber: 107,
    group: 7,
    period: 7,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 6d5 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f6 6d5 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 32, 13, 2 ],
    oxidationStates: [ +7, +5, +4, +3 ]
  },
  hassium: {
    name: "Hassium",
    symbol: "Hs",
    family: "transitionMetal",
    atomicNumber: 108,
    group: 8,
    period: 7,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 6d6 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f6 6d6 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 32, 14, 2 ],
    oxidationStates: [ +8, +6, +5, +4, +3, +2 ]
  },
  meitnerium: {
    name: "Meitnerium",
    symbol: "Mt",
    family: "unknown",
    atomicNumber: 109,
    group: 9,
    period: 7,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 6d7 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f6 6d7 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 32, 15, 2 ],
    oxidationStates: [ +9, +8, +6, +4, +3, +1 ]
  },
  darmstadtium: {
    name: "Darmstadtium",
    symbol: "Ds",
    family: "unknown",
    atomicNumber: 110,
    group: 10,
    period: 7,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 6d8 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f6 6d8 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 32, 16, 2 ],
    oxidationStates: [ +8, +6, +4, +2, 0 ]
  },
  roentgenium: {
    name: "Roentgenium",
    symbol: "Rg",
    family: "unknown",
    atomicNumber: 111,
    group: 11,
    period: 7,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 6d9 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f6 6d9 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 32, 17, 2 ],
    oxidationStates: [ +5, +3, +1, -1 ]
  },
  copernicium: {
    name: "Copernicium",
    symbol: "Cn",
    family: "transitionMetal",
    atomicNumber: 112,
    group: 13,
    period: 7,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 6d10 7s2",
    nobleGasElectronConfiguration: "[Rn] 5f6 6d10 7s2",
    electronsPerShell: [ 2, 8, 18, 32, 32, 18, 2 ],
    oxidationStates: [ +2, +1, 0 ]
  },
  nihonium: {
    name: "Nihonium",
    symbol: "Nh",
    family: "unknown",
    atomicNumber: 113,
    group: 14,
    period: 7,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 6d10 7s2 7p1",
    nobleGasElectronConfiguration: "[Rn] 5f6 6d10 7s2 7p1",
    electronsPerShell: [ 2, 8, 18, 32, 32, 18, 3 ],
    oxidationStates: [ NaN ]
  },
  flerovium: {
    name: "Flerovium",
    symbol: "Fl",
    family: "postTransitionMetal",
    atomicNumber: 114,
    group: 14,
    period: 7,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 6d10 7s2 7p2",
    nobleGasElectronConfiguration: "[Rn] 5f6 6d10 7s2 7p2",
    electronsPerShell: [ 2, 8, 18, 32, 32, 18, 4 ],
    oxidationStates: [ +6, +4, +2, +1, 0 ]
  },
  moscovium: {
    name: "Moscovium",
    symbol: "Mc",
    family: "unknown",
    atomicNumber: 115,
    group: 15,
    period: 7,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 6d10 7s2 7p3",
    nobleGasElectronConfiguration: "[Rn] 5f6 6d10 7s2 7p3",
    electronsPerShell: [ 2, 8, 18, 32, 32, 18, 5 ],
    oxidationStates: [ +3, +1 ]
  },
  livermorium: {
    name: "Livermorium",
    symbol: "Lv",
    family: "unknown",
    atomicNumber: 116,
    group: 16,
    period: 7,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 6d10 7s2 7p4",
    nobleGasElectronConfiguration: "[Rn] 5f6 6d10 7s2 7p4",
    electronsPerShell: [ 2, 8, 18, 32, 32, 18, 6 ],
    oxidationStates: [ +4, +2, -2 ]
  },
  tennessine: {
    name: "Tennessine",
    symbol: "Ts",
    family: "unknown",
    atomicNumber: 117,
    group: 17,
    period: 7,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 6d10 7s2 7p5",
    nobleGasElectronConfiguration: "[Rn] 5f6 6d10 7s2 7p5",
    electronsPerShell: [ 2, 8, 18, 32, 32, 18, 7 ],
    oxidationStates: [ +5, +3, +1, -1 ]
  },
  oganesson: {
    name: "Oganesson",
    symbol: "Og",
    family: "unknown",
    atomicNumber: 118,
    group: 18,
    period: 7,
    electronegativity: NaN,
    fullElectronConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 6d10 7s2 7p6",
    nobleGasElectronConfiguration: "[Rn] 5f6 6d10 7s2 7p6",
    electronsPerShell: [ 2, 8, 18, 32, 32, 18, 8 ],
    oxidationStates: [ +6, +4, +2, +1, 0, -1 ]
  }
};

/**
 * Looks through the elements dictionary for a 
 * matching key-value pair.
 * 
 * @param key - The data contained in the key to compare the value to.
 * @param value - The value to look for.
 * @param log - Whether or not to log the element to the console.
 * 
 * @returns An object of elementType if the value and key both exist and correspond.
 * It returns elements.NaE if the value given doesn't match the value held in any element's key.
 */
// TODO: figure out how this function should work if key is either group or period.
export function lookup(key: validKeys, value: string|number|number[], log: boolean = false): elementType {
  let returnElement: elementType = elements.NaE;

  for (const [element, data] of Object.entries(elements)) {
    if (JSON.stringify(data[key]) === JSON.stringify(value)) {
      returnElement = elements[element];
    }
  }

  if (log === true) { console.log(returnElement); }
  return elements.NaE;
}

/**
 * @param element - The element you want the name of.
 * 
 * @returns The name of the element that was passed.
 */
export function nameOf(element: elementType): string {
  return element.name as string;
}

/**
 * @param element - The element you want the symbol of.
 * 
 * @returns The symbol of the element that was passed.
 */
export function symbolOf(element: elementType): string {
  return element.symbol as string;
}

/**
 * @param element - The element you want the family of.
 * 
 * @returns The family of the element that was passed.
 */
export function familyOf(element: elementType): string {
  return element.family as string;
}

/**
 * @param element - The element you want the atomic number of.
 * 
 * @returns The atomic number of the element that was passed.
 */
export function atomicNumberOf(element: elementType): number {
  return element.atomicNumber as number;
}

/**
 * @param element - The element you want the group of.
 * 
 * @returns The group of the element that was passed.
 */
export function groupOf(element: elementType): number {
  return element.group as number;
}

/**
 * @param element - The element you want the period of.
 * 
 * @returns The period of the element that was passed.
 */
export function periodOf(element: elementType): number {
  return element.period as number;
}

/**
 * @param element - The element you want the electronegativity of.
 * 
 * @returns The electronegativity of the element that was passed.
 */
export function electronegativityOf(element: elementType): number {
  return element.electronegativity as number;
}

/**
 * @param element - The element you want the full electron configuration of.
 * 
 * @returns The full electron configuration of the element that was passed.
 */
export function fullElectronConfigurationOf(element: elementType): string {
  return element.fullElectronConfiguration as string;
}

/**
 * @param element - The element you want the noble gas electron configuration of.
 * 
 * @returns The noble gas electron configuration of the element that was passed.
 */
export function nobleGasElectronConfigurationOf(element: elementType): string {
  return element.nobleGasElectronConfiguration as string;
}

/**
 * @param element - The element you want the electrons per shell of.
 * 
 * @returns The electrons per shell of the element that was passed.
 */
export function electronsPerShellOf(element: elementType): number[] {
  return element.electronsPerShell as number[];
}

/**
 * @param element - The element you want the oxidation states of.
 * 
 * @returns The oxidation states of the element that was passed.
 */
export function oxidationStatesOf(element: elementType): number[] {
  return element.oxidationStates as number[];
}

/**
 * @param element - The element you want all the data of.
 * 
 * @returns The data of the element that was passed.
 */
export function getElement(element: elementType): elementType {
  return element;
}

/**
 * @param element - The element you want the family text of.
 * 
 * @returns The more human readable version of the family of the element that was passed.
 */
export function getFamilyTextOf(element: elementType): string {
  switch (element.family) {
    case "alkaliMetal":
      return "Alkali Metal";
    case "alkalineEarthMetal":
      return "Alkaline Earth Metal";
    case "transitionMetal":
      return "Transition Metal";
    case "postTransitionMetal":
      return "Post-Transition Metal";
    case "metalloid":
      return "Metalloid";
    case "nonmetal":
      return "Nonmetal";
    case "halogen":
      return "Halogen";
    case "nobleGas":
      return "Noble Gas";
    case "lanthanide":
      return "Lanthanide";
    case "actinide":
      return "Actinide";
    case "unknown":
      return "Unknown";
    default:
      return "ERROR";
  }
}

/**
 * @param element - The element you want the color of.
 * 
 * @returns The color of the element that was passed. Based off of the elements family.
 */
export function getColorOf(element: elementType): string {
  switch (familyOf(element)) {
    case "alkaliMetal":
      return config.family.alkaliMetal;
    case "alkalineEarthMetal":
      return config.family.alkalineEarthMetal;
    case "transitionMetal":
      return config.family.transitionMetal;
    case "postTransitionMetal":
      return config.family.postTransitionMetal;
    case "metalloid":
      return config.family.metalloid;
    case "nonmetal":
      return config.family.nonmetal;
    case "halogen":
      return config.family.halogen;
    case "nobleGas":
      return config.family.nobleGas;
    case "lanthanide":
      return config.family.lanthanide;
    case "actinide":
      return config.family.actinide;
    default:
      return config.family.unknown;
  }
}

export default elements;