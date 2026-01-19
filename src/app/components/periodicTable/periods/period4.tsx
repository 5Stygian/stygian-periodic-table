import Cell from "../cell/cell.tsx"
import Label from "../cell/label.tsx";

import elements from "@/app/data/elements.ts";

export default function Period4() {
  return (
    <>
      <Label isPeriod={true} text="4"/>
      <Cell element={elements.potassium} />
      <Cell element={elements.calcium} />
      <Cell element={elements.scandium} />
      <Cell element={elements.titanium} />
      <Cell element={elements.vanadium} />
      <Cell element={elements.chromium} />
      <Cell element={elements.manganese} />
      <Cell element={elements.iron} />
      <Cell element={elements.cobalt} />
      <Cell element={elements.nickel} />
      <Cell element={elements.copper} />
      <Cell element={elements.zinc} />
      <Cell element={elements.gallium} />
      <Cell element={elements.germanium} />
      <Cell element={elements.arsenic} />
      <Cell element={elements.selenium} />
      <Cell element={elements.bromine} />
      <Cell element={elements.krypton} />
    </>
  );
}