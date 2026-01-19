import Cell from "../cell/cell.tsx"
import Label from "../cell/label.tsx";

import elements from "@/app/data/elements.ts";

export default function Period7() {
  return (
    <>
      <Label isPeriod={true} text="7"/>
      <Cell element={elements.francium} />
      <Cell element={elements.radium} />
      <Cell nonElement={true} text="Actinide Series" range="57 - 71" />
      <Cell element={elements.rutherfordium} />
      <Cell element={elements.dubnium} />
      <Cell element={elements.seaborgium} />
      <Cell element={elements.bohrium} />
      <Cell element={elements.hassium} />
      <Cell element={elements.meitnerium} />
      <Cell element={elements.darmstadtium} />
      <Cell element={elements.roentgenium} />
      <Cell element={elements.copernicium} />
      <Cell element={elements.nihonium} />
      <Cell element={elements.flerovium} />
      <Cell element={elements.moscovium} />
      <Cell element={elements.livermorium} />
      <Cell element={elements.tennessine} />
      <Cell element={elements.oganesson} />
    </>
  );
}