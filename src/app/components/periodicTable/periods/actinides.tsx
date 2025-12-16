import Cell from "../cell/cell.tsx";

import { Actinium, Thorium, Protactinium, Uranium, Neptunium, Plutonium, Americium, Curium, Berkelium, Californium, Einsteinium, Fermium, Mendelevium, Nobelium, Lawrencium } from "@/app/data/elements.ts";

export default function Actinides() {
  return (
    <>
      <Cell empty={true} amount={4} />
      <Cell element={Actinium} />
      <Cell element={Thorium} />
      <Cell element={Protactinium} />
      <Cell element={Uranium} />
      <Cell element={Neptunium} />
      <Cell element={Plutonium} />
      <Cell element={Americium} />
      <Cell element={Curium} />
      <Cell element={Berkelium} />
      <Cell element={Californium} />
      <Cell element={Einsteinium} />
      <Cell element={Fermium} />
      <Cell element={Mendelevium} />
      <Cell element={Nobelium} />
      <Cell element={Lawrencium} />
    </>
  );
}
