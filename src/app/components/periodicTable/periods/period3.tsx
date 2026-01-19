import Cell from "../cell/cell.tsx"
import Label from "../cell/label.tsx";

import elements from "@/app/data/elements.ts";

export default function Period3() {
  return (
    <>
      <Label isPeriod={true} text="3"/>
      <Cell element={elements.sodium} />
      <Cell element={elements.magnesium} />
      <Cell empty={true} amount={10} />
      <Cell element={elements.aluminum} />
      <Cell element={elements.silicon} />
      <Cell element={elements.phosphorus} />
      <Cell element={elements.sulfur} />
      <Cell element={elements.chlorine} />
      <Cell element={elements.argon} />
    </>
  );
}
