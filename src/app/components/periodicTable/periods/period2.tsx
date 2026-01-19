import Cell from "../cell/cell.tsx";
import Label from "../cell/label.tsx";

import elements from "@/app/data/elements.ts";

export default function Period2() {
  return (
    <>
      <Label isPeriod={true} text="2"/>
      <Cell element={elements.lithium} />
      <Cell element={elements.beryllium} />
      <Cell empty={true} amount={10} />
      <Cell element={elements.boron} />
      <Cell element={elements.carbon} />
      <Cell element={elements.nitrogen} />
      <Cell element={elements.oxygen} />
      <Cell element={elements.fluorine} />
      <Cell element={elements.neon} />
    </>
  );
}
