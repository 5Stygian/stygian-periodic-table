import Cell from "../cell/cell.tsx";

import elements from "@/app/data/elements.ts";

export default function Actinides() {
  return (
    <>
      <Cell empty={true} amount={4} />
      <Cell element={elements.actinium} />
      <Cell element={elements.thorium} />
      <Cell element={elements.protactinium} />
      <Cell element={elements.uranium} />
      <Cell element={elements.neptunium} />
      <Cell element={elements.plutonium} />
      <Cell element={elements.americium} />
      <Cell element={elements.curium} />
      <Cell element={elements.berkelium} />
      <Cell element={elements.californium} />
      <Cell element={elements.einsteinium} />
      <Cell element={elements.fermium} />
      <Cell element={elements.mendelevium} />
      <Cell element={elements.nobelium} />
      <Cell element={elements.lawrencium} />
    </>
  );
}
