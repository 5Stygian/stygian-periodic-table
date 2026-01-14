import Cell from "../cell/cell";

import elements from "@/app/data/newelements";

export default function Lanthanides() {
  return (
    <>
      <Cell empty={true} amount={4} />
      <Cell element={elements.lanthanum} />
      <Cell element={elements.cerium} />
      <Cell element={elements.praseodymium} />
      <Cell element={elements.neodymium} />
      <Cell element={elements.promethium} />
      <Cell element={elements.samarium} />
      <Cell element={elements.europium} />
      <Cell element={elements.gadolinium} />
      <Cell element={elements.terbium} />
      <Cell element={elements.dysprosium} />
      <Cell element={elements.holmium} />
      <Cell element={elements.erbium} />
      <Cell element={elements.thulium} />
      <Cell element={elements.ytterbium} />
      <Cell element={elements.lutetium} />
    </>
  );
}
