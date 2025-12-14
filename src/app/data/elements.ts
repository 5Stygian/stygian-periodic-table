let ELEMENTS: Element[] = [];

class Element {
    public constructor({name, symbol, family, atomicNumber, group, period}: {
        name: string,
        symbol: string,
        family: string,
        atomicNumber: number,
        group: number,
        period: number,
    }
    ) {
        this.name = name;
        this.symbol = symbol;
        this.family = family;
        this.atomicNumber = atomicNumber;
        this.group = group;
        this.period = period;

        ELEMENTS.push(this);
    }
}

export const NaE: Element = new Element({name: "NaE", symbol: "NaE", family: "NaE", atomicNumber: -1, group: -1, period: -1});

// period 1
export const Hydrogen: Element = new Element({name: "Hydrogen", symbol: "H", family: "nonmetal", atomicNumber: 1, group: 1, period: 1});
export const Helium: Element   = new Element({name: "Helium", symbol: "He", family: "nobleGas", atomicNumber: 2, group: 18, period: 1});

// period 2
export const Lithium: Element   = new Element({name: "Lithium", symbol: "Li", family: "alkaliMetal", atomicNumber: 3, group: 1, period: 2});
export const Beryllium: Element = new Element({name: "Beryllium", symbol: "Be", family: "alkalineEarthMetal", atomicNumber: 4, group: 2, period: 2});
export const Boron: Element     = new Element({name: "Boron", symbol: "B", family: "metalloid", atomicNumber: 5, group: 13, period: 2});
export const Carbon: Element    = new Element({name: "Carbon", symbol: "C", family: "nonmetal", atomicNumber: 6, group: 14, period: 2});
export const Nitrogen: Element  = new Element({name: "Nitrogen", symbol: "N", family: "nonmetal", atomicNumber: 7, group: 15, period: 2});
export const Oxygen: Element    = new Element({name: "Oxygen", symbol: "O", family: "nonmetal", atomicNumber: 8, group: 16, period: 2});
export const Fluorine: Element  = new Element({name: "Fluorine", symbol: "F", family: "halogen", atomicNumber: 9, group: 17, period: 2});
export const Neon: Element      = new Element({name: "Neon", symbol: "Ne", family: "nobleGas", atomicNumber: 10, group: 18, period: 2});

// period 3
export const Sodium: Element     = new Element({name: "Sodium", symbol: "Na", family: "alkaliMetal", atomicNumber: 11, group: 1, period: 3});
export const Magnesium: Element  = new Element({name: "Magnesium", symbol: "Mg", family: "alkalineEarthMetal", atomicNumber: 12, group: 2, period: 3});
export const Aluminum: Element   = new Element({name: "Aluminum", symbol: "Al", family: "postTransitionMetal", atomicNumber: 13, group: 13, period: 3});
export const Silicon: Element    = new Element({name: "Silicon", symbol: "Si", family: "metalloid", atomicNumber: 14, group: 14, period: 3});
export const Phosphorus: Element = new Element({name: "Phosphorus", symbol: "P", family: "nonmetal", atomicNumber: 15, group: 15, period: 3});
export const Sulfur: Element     = new Element({name: "Sulfur", symbol: "S", family: "nonmetal", atomicNumber: 16, group: 16, period: 3});
export const Chlorine: Element   = new Element({name: "Chlorine", symbol: "Cl", family: "halogen", atomicNumber: 17, group: 17, period: 3});
export const Argon: Element      = new Element({name: "Argon", symbol: "Ar", family: "nobleGas", atomicNumber: 18, group: 18, period: 3});

export default ELEMENTS;