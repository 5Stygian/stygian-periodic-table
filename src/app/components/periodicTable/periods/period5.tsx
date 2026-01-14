import Cell from "../cell/cell.tsx"
import Label from "../cell/label.tsx";

import elements from "@/app/data/newelements.ts";

export default function Period5() {
  return (
    <>
      <Label isPeriod={true} text="5"/>
      <Cell element={elements.rubidium} />
      <Cell element={elements.strontium} />
      <Cell element={elements.yttrium} />
      <Cell element={elements.zirconium} />
      <Cell element={elements.niobium} />
      <Cell element={elements.molybdenum} />
      <Cell element={elements.technetium} />
      <Cell element={elements.ruthenium} />
      <Cell element={elements.rhodium} />
      <Cell element={elements.palladium} />
      <Cell element={elements.silver} />
      <Cell element={elements.cadmium} />
      <Cell element={elements.indium} />
      <Cell element={elements.tin} />
      <Cell element={elements.antimony} />
      <Cell element={elements.tellurium} />
      <Cell element={elements.iodine} />
      <Cell element={elements.xenon} />
    </>
  );
}