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
        ELEMENTS.push(this);
    }
}

// period 1
export const Hydrogen: Element = new Element({name: "Hydrogen", symbol: "H", family: "nonmetal", atomicNumber: 1, group: 1, period: 1});
export const Helium: Element = new Element({name: "Helium", symbol: "He", family: "nobleGas", atomicNumber: 2, group: 18, period: 1});

/**
// period 2
export const Hydrogen: Element = new Element({name: "Hydrogen", symbol: "H", family: "nonmetal", atomicNumber: 3, group: 1, period: 2});
export const Hydrogen: Element = new Element({name: "Hydrogen", symbol: "H", family: "nonmetal", atomicNumber: 4, group: 1, period: 2});
export const Hydrogen: Element = new Element({name: "Hydrogen", symbol: "H", family: "nonmetal", atomicNumber: 5, group: 1, period: 2});
export const Hydrogen: Element = new Element({name: "Hydrogen", symbol: "H", family: "nonmetal", atomicNumber: 6, group: 1, period: 2});
export const Hydrogen: Element = new Element({name: "Hydrogen", symbol: "H", family: "nonmetal", atomicNumber: 7, group: 1, period: 2});
export const Hydrogen: Element = new Element({name: "Hydrogen", symbol: "H", family: "nonmetal", atomicNumber: 8, group: 1, period: 2});
export const Hydrogen: Element = new Element({name: "Hydrogen", symbol: "H", family: "nonmetal", atomicNumber: 9, group: 1, period: 2});
export const Hydrogen: Element = new Element({name: "Hydrogen", symbol: "H", family: "nonmetal", atomicNumber: 10, group: 1, period: 2});
*/

export default ELEMENTS;