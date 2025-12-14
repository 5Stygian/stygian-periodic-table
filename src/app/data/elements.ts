"use client";

import config from "./config";

export class Element {
  [x: string|number]: string|number;
  public constructor({name, symbol, family, atomicNumber, group, period}: {
    name: string,
    symbol: string,
    family: string,
    atomicNumber: number,
    group: number|string,
    period: number,
  }
  ) {
    this.name = name;
    this.symbol = symbol;
    this.family = family;
    this.atomicNumber = atomicNumber;
    this.group = group;
    this.period = period;

    switch (this.family) {
      case "alkaliMetal":
        this.familyText = "alkaliMetal";
        this.color = config.family.alkaliMetal;
        break;
      case "alkalineEarthMetal":
        this.familyText = "Alkaline Earth Metal";
        this.color = config.family.alkalineEarthMetal;
        break;
      case "transitionMetal":
        this.familyText = "Transition Metal";
        this.color = config.family.transitionMetal;
        break;
      case "postTransitionMetal":
        this.familyText = "Post-Transition Metal";
        this.color = config.family.postTransitionMetal;
        break;
      case "metalloid":
        this.familyText = "Metalloid";
        this.color = config.family.metalloid;
        break;
      case "nonmetal":
        this.familyText = "Nonmetal";
        this.color = config.family.nonmetal;
        break;
      case "halogen":
        this.familyText = "Halogen";
        this.color = config.family.halogen;
        break;
      case "nobleGas":
        this.familyText = "Noble Gas";
        this.color = config.family.nobleGas;
        break;
      case "lanthanide":
        this.familyText = "Lanthanide";
        this.color = config.family.lanthanide;
        break;
      case "actinide":
        this.familyText = "Actinide";
        this.color = config.family.actinide;
        break;
      default:
        this.familyText = "Unknown";
        this.break;
    }
  }
}

// !! ELEMENTS no longer exists !!
// This exists so that you can access the ELEMENTS array by
// referring to the element's atomic number instead of an array index.
// Without NaE, you would access Neon by doing ELEMENTS[9] (array index)
// instead of ELEMENTS[10], with 10 being Neon's atomic number.
// NaE - Not an Element
export const NaE: Element = new Element({name: "NaE", symbol: "NaE", family: "NaE", atomicNumber: NaN, group: NaN, period: NaN});

// Period 1
export const Hydrogen: Element = new Element({name: "Hydrogen", symbol: "H", family: "nonmetal", atomicNumber: 1, group: 1, period: 1});
export const Helium: Element   = new Element({name: "Helium", symbol: "He", family: "nobleGas", atomicNumber: 2, group: 18, period: 1});

// Period 2
export const Lithium: Element   = new Element({name: "Lithium", symbol: "Li", family: "alkaliMetal", atomicNumber: 3, group: 1, period: 2});
export const Beryllium: Element = new Element({name: "Beryllium", symbol: "Be", family: "alkalineEarthMetal", atomicNumber: 4, group: 2, period: 2});
export const Boron: Element     = new Element({name: "Boron", symbol: "B", family: "metalloid", atomicNumber: 5, group: 13, period: 2});
export const Carbon: Element    = new Element({name: "Carbon", symbol: "C", family: "nonmetal", atomicNumber: 6, group: 14, period: 2});
export const Nitrogen: Element  = new Element({name: "Nitrogen", symbol: "N", family: "nonmetal", atomicNumber: 7, group: 15, period: 2});
export const Oxygen: Element    = new Element({name: "Oxygen", symbol: "O", family: "nonmetal", atomicNumber: 8, group: 16, period: 2});
export const Fluorine: Element  = new Element({name: "Fluorine", symbol: "F", family: "halogen", atomicNumber: 9, group: 17, period: 2});
export const Neon: Element      = new Element({name: "Neon", symbol: "Ne", family: "nobleGas", atomicNumber: 10, group: 18, period: 2});

// Period 3
export const Sodium: Element     = new Element({name: "Sodium", symbol: "Na", family: "alkaliMetal", atomicNumber: 11, group: 1, period: 3});
export const Magnesium: Element  = new Element({name: "Magnesium", symbol: "Mg", family: "alkalineEarthMetal", atomicNumber: 12, group: 2, period: 3});
export const Aluminum: Element   = new Element({name: "Aluminum", symbol: "Al", family: "postTransitionMetal", atomicNumber: 13, group: 13, period: 3});
export const Silicon: Element    = new Element({name: "Silicon", symbol: "Si", family: "metalloid", atomicNumber: 14, group: 14, period: 3});
export const Phosphorus: Element = new Element({name: "Phosphorus", symbol: "P", family: "nonmetal", atomicNumber: 15, group: 15, period: 3});
export const Sulfur: Element     = new Element({name: "Sulfur", symbol: "S", family: "nonmetal", atomicNumber: 16, group: 16, period: 3});
export const Chlorine: Element   = new Element({name: "Chlorine", symbol: "Cl", family: "halogen", atomicNumber: 17, group: 17, period: 3});
export const Argon: Element      = new Element({name: "Argon", symbol: "Ar", family: "nobleGas", atomicNumber: 18, group: 18, period: 3});

// Period 4
export const Potassium: Element = new Element({name: "Potassium", symbol: "K", family: "alkaliMetal", atomicNumber: 19, group: 1, period: 4});
export const Calcium: Element   = new Element({name: "Calcium", symbol: "Ca", family: "alkalineEarthMetal", atomicNumber: 20, group: 2, period: 4});
export const Scandium: Element  = new Element({name: "Scandium", symbol: "Sc", family: "transitionMetal", atomicNumber: 21, group: 3, period: 4});
export const Titanium: Element  = new Element({name: "Titanium", symbol: "Ti", family: "transitionMetal", atomicNumber: 22, group: 4, period: 4});
export const Vandium: Element   = new Element({name: "Vandium", symbol: "V", family: "transitionMetal", atomicNumber: 23, group: 5, period: 4});
export const Chromium: Element  = new Element({name: "Chromium", symbol: "Cr", family: "transitionMetal", atomicNumber: 24, group: 6, period: 4});
export const Manganese: Element = new Element({name: "Manganese", symbol: "Mn", family: "transitionMetal", atomicNumber: 25, group: 7, period: 4});
export const Iron: Element      = new Element({name: "Iron", symbol: "Fe", family: "transitionMetal", atomicNumber: 26, group: 8, period: 4});
export const Cobalt: Element    = new Element({name: "Cobalt", symbol: "Co", family: "transitionMetal", atomicNumber: 27, group: 9, period: 4});
export const Nickel: Element    = new Element({name: "Nickel", symbol: "Ni", family: "transitionMetal", atomicNumber: 28, group: 10, period: 4});
export const Copper: Element    = new Element({name: "Calcium", symbol: "Ca", family: "transitionMetal", atomicNumber: 29, group: 11, period: 4});
export const Zinc: Element      = new Element({name: "Zinc", symbol: "Zn", family: "transitionMetal", atomicNumber: 30, group: 12, period: 4});
export const Gallium: Element   = new Element({name: "Gallium", symbol: "Ga", family: "postTransitionMetal", atomicNumber: 31, group: 13, period: 4});
export const Germanium: Element = new Element({name: "Germanium", symbol: "Ge", family: "metalloid", atomicNumber: 32, group: 14, period: 4});
export const Arsenic: Element   = new Element({name: "Arsenic", symbol: "As", family: "metalloid", atomicNumber: 33, group: 15, period: 4});
export const Selenium: Element  = new Element({name: "Selenium", symbol: "Se", family: "nonmetal", atomicNumber: 34, group: 16, period: 4});
export const Bromine: Element   = new Element({name: "Bromine", symbol: "Br", family: "halogen", atomicNumber: 35, group: 17, period: 4});
export const Krypton: Element   = new Element({name: "Krypton", symbol: "Kr", family: "nobleGas", atomicNumber: 36, group: 18, period: 4});

// Period 5
export const Rubidium: Element   = new Element({name: "Rubidium", symbol: "Rb", family: "alkaliMetal", atomicNumber: 37, group: 1, period: 5});
export const Strontium: Element  = new Element({name: "Strontium", symbol: "Sr", family: "alkalineEarthMetal", atomicNumber: 38, group: 2, period: 5});
export const Yttrium: Element    = new Element({name: "Yttrium", symbol: "Y", family: "transitionMetal", atomicNumber: 39, group: 3, period: 5});
export const Zirconium: Element  = new Element({name: "Zirconium", symbol: "Zr", family: "transitionMetal", atomicNumber: 40, group: 4, period: 5});
export const Niobium: Element    = new Element({name: "Niobium", symbol: "Nb", family: "transitionMetal", atomicNumber: 41, group: 5, period: 5});
export const Molybdenum: Element = new Element({name: "Molybdenum", symbol: "Mo", family: "transitionMetal", atomicNumber: 42, group: 6, period: 5});
export const Technetium: Element = new Element({name: "Technetium", symbol: "Tc", family: "transitionMetal", atomicNumber: 43, group: 7, period: 5});
export const Ruthenium: Element  = new Element({name: "Ruthenium", symbol: "Ru", family: "transitionMetal", atomicNumber: 44, group: 8, period: 5});
export const Rhodium: Element    = new Element({name: "Rhodium", symbol: "Rh", family: "transitionMetal", atomicNumber: 45, group: 9, period: 5});
export const Palladium: Element  = new Element({name: "Palladium", symbol: "Pd", family: "transitionMetal", atomicNumber: 46, group: 10, period: 5});
export const Silver: Element     = new Element({name: "Silver", symbol: "Ag", family: "transitionMetal", atomicNumber: 47, group: 11, period: 5});
export const Cadmium: Element    = new Element({name: "Cadmium", symbol: "Cd", family: "transitionMetal", atomicNumber: 48, group: 12, period: 5});
export const Indium: Element     = new Element({name: "Indium", symbol: "In", family: "postTransitionMetal", atomicNumber: 49, group: 13, period: 5});
export const Tin: Element        = new Element({name: "Tin", symbol: "Sn", family: "postTransitionMetal", atomicNumber: 50, group: 14, period: 5});
export const Antimony: Element   = new Element({name: "Antimony", symbol: "Sb", family: "metalloid", atomicNumber: 51, group: 15, period: 5});
export const Tellurium: Element  = new Element({name: "Tellurium", symbol: "Te", family: "metalloid", atomicNumber: 52, group: 16, period: 5});
export const Iodine: Element     = new Element({name: "Iodine", symbol: "I", family: "halogen", atomicNumber: 53, group: 17, period: 5});
export const Xenon: Element      = new Element({name: "Xenon", symbol: "Xe", family: "nobleGas", atomicNumber: 54, group: 18, period: 5});

// Period 6
export const Cesium: Element = new Element({name: "Cesium", symbol: "Cs", family: "alkaliMetal", atomicNumber: 55, group: 1, period: 6});
export const Barium: Element = new Element({name: "Barium", symbol: "Ba", family: "alkalineEarthMetal", atomicNumber: 56, group: 2, period: 6});

// Lanthanides
export const Lanthanum: Element    = new Element({name: "Lanthanum", symbol: "La", family: "lanthanide", atomicNumber: 57, group: "lanthanide", period: 6});
export const Cerium: Element       = new Element({name: "Cerium", symbol: "Ce", family: "lanthanide", atomicNumber: 58, group: "lanthanide", period: 6});
export const Praseodymium: Element = new Element({name: "Praseodymium", symbol: "Pr", family: "lanthanide", atomicNumber: 59, group: "lanthanide", period: 6});
export const Neodymium: Element    = new Element({name: "Neodymium", symbol: "Nd", family: "lanthanide", atomicNumber: 60, group: "lanthanide", period: 6});
export const Promethium: Element   = new Element({name: "Promethium", symbol: "Pm", family: "lanthanide", atomicNumber: 61, group: "lanthanide", period: 6});
export const Samarium: Element     = new Element({name: "Cerium", symbol: "Sm", family: "lanthanide", atomicNumber: 62, group: "lanthanide", period: 6});
export const Europium: Element     = new Element({name: "Europium", symbol: "Eu", family: "lanthanide", atomicNumber: 63, group: "lanthanide", period: 6});
export const Gadolinium: Element   = new Element({name: "Gadolinium", symbol: "Gd", family: "lanthanide", atomicNumber: 64, group: "lanthanide", period: 6});
export const Terbium: Element      = new Element({name: "Terbium", symbol: "Tb", family: "lanthanide", atomicNumber: 65, group: "lanthanide", period: 6});
export const Dysprosium: Element   = new Element({name: "Dysprosium", symbol: "Dy", family: "lanthanide", atomicNumber: 66, group: "lanthanide", period: 6});
export const Holmium: Element      = new Element({name: "Holmium", symbol: "Ho", family: "lanthanide", atomicNumber: 67, group: "lanthanide", period: 6});
export const Erbium: Element       = new Element({name: "Erbium", symbol: "Er", family: "lanthanide", atomicNumber: 68, group: "lanthanide", period: 6});
export const Thulium: Element      = new Element({name: "Thulium", symbol: "Tm", family: "lanthanide", atomicNumber: 69, group: "lanthanide", period: 6});
export const Ytterbium: Element    = new Element({name: "Ytterbium", symbol: "Yb", family: "lanthanide", atomicNumber: 70, group: "lanthanide", period: 6});
export const Lutetium: Element     = new Element({name: "Lutetium", symbol: "Lu", family: "lanthanide", atomicNumber: 71, group: 3, period: 6});

export const Hafnium: Element  = new Element({name: "Hafnium", symbol: "Hf", family: "transitionMetal", atomicNumber: 72, group: 4, period: 6});
export const Tantalum: Element = new Element({name: "Tantalum", symbol: "Ta", family: "transitionMetal", atomicNumber: 73, group: 5, period: 6});
export const Tungsten: Element = new Element({name: "Tungsten", symbol: "W", family: "transitionMetal", atomicNumber: 74, group: 6, period: 6});
export const Rhenium: Element  = new Element({name: "Rhenium", symbol: "Re", family: "transitionMetal", atomicNumber: 75, group: 7, period: 6});
export const Osmium: Element   = new Element({name: "Osmium", symbol: "Os", family: "transitionMetal", atomicNumber: 76, group: 8, period: 6});
export const Iridium: Element  = new Element({name: "Iridium", symbol: "Ir", family: "transitionMetal", atomicNumber: 77, group: 9, period: 6});
export const Platinum: Element = new Element({name: "Platinum", symbol: "Pt", family: "transitionMetal", atomicNumber: 78, group: 10, period: 6});
export const Gold: Element     = new Element({name: "Gold", symbol: "Au", family: "transitionMetal", atomicNumber: 79, group: 11, period: 6});
export const Mercury: Element  = new Element({name: "Mercury", symbol: "Hg", family: "transitionMetal", atomicNumber: 80, group: 13, period: 6});
export const Thallium: Element = new Element({name: "Thallium", symbol: "Hl", family: "postTransitionMetal", atomicNumber: 81, group: 14, period: 6});
export const Lead: Element     = new Element({name: "Lead", symbol: "Pb", family: "postTransitionMetal", atomicNumber: 82, group: 14, period: 6});
export const Bismuth: Element  = new Element({name: "Bismuth", symbol: "Bi", family: "postTransitionMetal", atomicNumber: 83, group: 15, period: 6});
export const Polonium: Element = new Element({name: "Polonium", symbol: "Sb", family: "metalloid", atomicNumber: 84, group: 16, period: 6});
export const Astatine: Element = new Element({name: "Astatine", symbol: "At", family: "halogen", atomicNumber: 85, group: 17, period: 6});
export const Radon: Element    = new Element({name: "Radon", symbol: "Rn", family: "nobleGas", atomicNumber: 86, group: 18, period: 6});

// Period 7
export const Francium: Element = new Element({name: "Francium", symbol: "Fr", family: "alkaliMetal", atomicNumber: 87, group: 1, period: 7});
export const Radium: Element   = new Element({name: "Radium", symbol: "Ra", family: "alkalineEarthMetal", atomicNumber: 88, group: 2, period: 7});

// Actinides
export const Actinium: Element     = new Element({name: "Actinium", symbol: "Ac", family: "actinide", atomicNumber: 89, group: "actinide", period: 7});
export const Thorium: Element      = new Element({name: "Thorium", symbol: "Th", family: "actinide", atomicNumber: 90, group: "actinide", period: 7});
export const Protactinium: Element = new Element({name: "Protactinium", symbol: "Pa", family: "actinide", atomicNumber: 91, group: "actinide", period: 7});
export const Uranium: Element      = new Element({name: "Uranium", symbol: "U", family: "actinide", atomicNumber: 92, group: "actinide", period: 7});
export const Neptunium: Element    = new Element({name: "Neptunium", symbol: "Np", family: "actinide", atomicNumber: 93, group: "actinide", period: 7});
export const Plutonium: Element    = new Element({name: "Plutonium", symbol: "Pu", family: "actinide", atomicNumber: 94, group: "actinide", period: 7});
export const Americium: Element    = new Element({name: "Americium", symbol: "Am", family: "actinide", atomicNumber: 95, group: "actinide", period: 7});
export const Curium: Element       = new Element({name: "Curium", symbol: "Cm", family: "actinide", atomicNumber: 96, group: "actinide", period: 7});
export const Berkelium: Element    = new Element({name: "Berkelium", symbol: "Bk", family: "actinide", atomicNumber: 97, group: "actinide", period: 7});
export const Californium: Element  = new Element({name: "Californium", symbol: "Cf", family: "actinide", atomicNumber: 98, group: "actinide", period: 7});
export const Einstienium: Element  = new Element({name: "Einstienium", symbol: "Es", family: "actinide", atomicNumber: 99, group: "actinide", period: 7});
export const Fermium: Element      = new Element({name: "Fermium", symbol: "Er", family: "actinide", atomicNumber: 100, group: "actinide", period: 7});
export const Mendelevium: Element  = new Element({name: "Mendelevium", symbol: "Md", family: "actinide", atomicNumber: 101, group: "actinide", period: 7});
export const Nobelium: Element     = new Element({name: "Nobelium", symbol: "No", family: "actinide", atomicNumber: 102, group: "actinide", period: 7});
export const Lawrencium: Element   = new Element({name: "Lawrencium", symbol: "Lr", family: "actinide", atomicNumber: 103, group: 3, period: 7});

export const Rutherfordium: Element = new Element({name: "Rutherfordium", symbol: "Rf", family: "transitionMetal", atomicNumber: 104, group: 4, period: 7});
export const Dubnium: Element       = new Element({name: "Dubnium", symbol: "Db", family: "transitionMetal", atomicNumber: 105, group: 5, period: 7});
export const Seaborgium: Element    = new Element({name: "Seaborgium", symbol: "Sg", family: "transitionMetal", atomicNumber: 106, group: 6, period: 7});
export const Bohrium: Element       = new Element({name: "Bohrium", symbol: "Bh", family: "transitionMetal", atomicNumber: 107, group: 7, period: 7});
export const Hassium: Element       = new Element({name: "Hassium", symbol: "Hs", family: "transitionMetal", atomicNumber: 108, group: 8, period: 7});
export const Meitnerium: Element    = new Element({name: "Meitnerium", symbol: "Mt", family: "transitionMetal", atomicNumber: 109, group: 9, period: 7});
export const Darmstadium: Element   = new Element({name: "Darmstadium", symbol: "Ds", family: "transitionMetal", atomicNumber: 110, group: 10, period: 7});
export const Roentgenium: Element   = new Element({name: "Roentgenium", symbol: "Rg", family: "transitionMetal", atomicNumber: 111, group: 11, period: 7});
export const Copernicium: Element   = new Element({name: "Copernicium", symbol: "Cn", family: "transitionMetal", atomicNumber: 112, group: 13, period: 7});
export const Nihonium: Element      = new Element({name: "Nihonium", symbol: "Nh", family: "postTransitionMetal", atomicNumber: 113, group: 14, period: 7});
export const Flerovium: Element     = new Element({name: "Flerovium", symbol: "Fl", family: "postTransitionMetal", atomicNumber: 114, group: 14, period: 7});
export const Moscovium: Element     = new Element({name: "Moscovium", symbol: "Mc", family: "postTransitionMetal", atomicNumber: 115, group: 15, period: 7});
export const Livermorium: Element   = new Element({name: "Livermorium", symbol: "Lv", family: "postTransitionMetal", atomicNumber: 116, group: 16, period: 7});
export const Tenessine: Element     = new Element({name: "Tenessine", symbol: "Ts", family: "halogen", atomicNumber: 117, group: 17, period: 7});
export const Oganesson: Element     = new Element({name: "Oganesson", symbol: "Og", family: "nobleGas", atomicNumber: 118, group: 18, period: 7});