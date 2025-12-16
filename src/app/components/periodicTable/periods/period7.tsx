import Cell from "../cell/cell.tsx"

import { Bohrium, Copernicium, Darmstadtium, Dubnium, Flerovium, Francium, Hassium, Livermorium, Meitnerium, Moscovium, Nihonium, Oganesson, Radium, Roentgenium, Rutherfordium, Seaborgium, Tennessine } from "@/app/data/elements.ts";
import Label from "../cell/label.tsx";

export default function Period7() {
  return (
    <>
      <Label isPeriod={true} text="7"/>
      <Cell element={Francium} />
      <Cell element={Radium} />
      <Cell nonElement={true} text="Actinide Series" range="57 - 71" />
      <Cell element={Rutherfordium} />
      <Cell element={Dubnium} />
      <Cell element={Seaborgium} />
      <Cell element={Bohrium} />
      <Cell element={Hassium} />
      <Cell element={Meitnerium} />
      <Cell element={Darmstadtium} />
      <Cell element={Roentgenium} />
      <Cell element={Copernicium} />
      <Cell element={Nihonium} />
      <Cell element={Flerovium} />
      <Cell element={Moscovium} />
      <Cell element={Livermorium} />
      <Cell element={Tennessine} />
      <Cell element={Oganesson} />
    </>
  );
}