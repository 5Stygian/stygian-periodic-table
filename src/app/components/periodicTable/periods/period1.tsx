import Cell from "../cell/cell.tsx";
import Label from "../cell/label.tsx";

import elements from "@/app/data/newelements.ts";

export default function Period1() {
  return (
    <>
      <Label isPeriod={true} text="1" />
      <Cell element={elements.hydrogen} />
      <Cell empty={true} amount={16} />
      <Cell element={elements.helium} />
    </>
  );
}
