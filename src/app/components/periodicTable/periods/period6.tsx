import Cell from "../cell/cell.tsx"
import Label from "../cell/label.tsx";

import elements from "@/app/data/elements.ts";

export default function Period6() {
  return (
    <>
      <Label isPeriod={true} text="6"/>
      <Cell element={elements.cesium} />
      <Cell element={elements.barium} />
      <Cell nonElement={true} text="Lanthanide Series" range="57 - 71" />
      <Cell element={elements.hafnium} />
      <Cell element={elements.tantalum} />
      <Cell element={elements.tungsten} />
      <Cell element={elements.rhenium} />
      <Cell element={elements.osmium} />
      <Cell element={elements.iridium} />
      <Cell element={elements.platinum} />
      <Cell element={elements.gold} />
      <Cell element={elements.mercury} />
      <Cell element={elements.thallium} />
      <Cell element={elements.lead} />
      <Cell element={elements.bismuth} />
      <Cell element={elements.polonium} />
      <Cell element={elements.astatine} />
      <Cell element={elements.radon} />
    </>
  );
}