// i don't care that this is hard af to read. you're smart, figure it out

"use client";

import React, { useState } from "react";

import config from "@/app/data/config";
import { elementType, nameOf, symbolOf, groupOf, periodOf, atomicNumberOf, electronegativityOf, fullElectronConfigurationOf, nobleGasElectronConfigurationOf, electronsPerShellOf, getFamilyTextOf, getColorOf } from "@/app/data/elements";

const defaultCellStyles = "min-w-32 w-min min-h-25 -my-4 scale-67";

interface ElementProps {
  // element data
  element?: elementType;
  
  // display
  text?: string;
  range?: string;
  empty?: boolean;
  amount?: number;
  nonElement?: boolean;
  label?: boolean;

  // html props
  className?: string;
  style?: React.CSSProperties;
}

export default function Cell({
  element,
  text,
  range,
  empty = false,
  amount = 0,
  nonElement = false,
  label = false
}: ElementProps) {
  let cellStyle = `${defaultCellStyles} bg-black border-3 shadow-2x1 font-bold`;

  if (!empty && !element && !nonElement && !label) {
    console.log("Something fucked up somewhere");
    
    return (
      <div className="z-5 bg-black border-2 border-red-500 w-fit p-2 content-center font-bold">
        <span>Invalid Element</span>
      </div>
    ); // return
  } else if (!empty) {
    if (!nonElement && !label) {
      const [heldElement, setHeldElement] = useState(element!);

      function handleClick(): void {
        const elementCard = document.getElementById("elementCard");
        const elementCardSymbol = document.getElementById("elementCardSymbol");
        const elementCardName = document.getElementById("elementCardName");
        const elementCardFamily = document.getElementById("elementCardFamily");
        const elementCardAtomicNumber = document.getElementById("elementCardAtomicNumber");
        const elementGroup = document.getElementById("elementCardGroup");
        const elementCardPeriod = document.getElementById("elementCardPeriod");
        const elementCardECFull = document.getElementById("elementCardECFull");
        const elementCardECNobleGas = document.getElementById("elementCardECNobleGas");
        const elementCardElectronegativity = document.getElementById("elementCardElectronegativity");
        const elementCardElectronsPerShell = document.getElementById("elementCardElectronsPerShell");

        elementCard!.className = `w-screen flex justify-center items-center pb-20 hover:cursor-default ${getColorOf(element!)}`;
        elementCardSymbol!.innerHTML = `${symbolOf(element!)}`;
        elementCardName!.innerHTML = `${nameOf(element!)}`;
        elementCardFamily!.innerHTML = `${getFamilyTextOf(element!)}`;
        elementCardAtomicNumber!.innerHTML = `${atomicNumberOf(element!)}`;
        elementGroup!.innerHTML = `${groupOf(element!)}`;
        elementCardPeriod!.innerHTML = `${periodOf(element!)}`;
        elementCardElectronegativity!.innerHTML = `${electronegativityOf(element!)}`;
        elementCardECFull!.innerHTML = `${fullElectronConfigurationOf(element!)}`;
        elementCardECNobleGas!.innerHTML = `${nobleGasElectronConfigurationOf(element!)}`;
        elementCardElectronsPerShell!.innerHTML = `${electronsPerShellOf(element!).join(", ")}`;
      }

      cellStyle = `${cellStyle} ${getColorOf(element!)} duration-75 ease-[cubic-bezier(0.06, 0.98, 0.41, 0.93)] select-none xl:select-auto hover:cursor-default hover:scale-105 hover:z-10 focus:cursor-default focus:scale-105 focus:z-10active:cursor-default active:scale-105 active:z-10`;

      const elementIDCell = `${nameOf(element!)}-cell`;

      return (
        <div onClick={handleClick} className={cellStyle} id={elementIDCell}>
          <span className="text-lg pl-1.5">{atomicNumberOf(element!)}</span>
          <div className="text-center text-5xl -mt-1">{symbolOf(element!)}</div>
          <div className="text-center">{nameOf(element!)}</div>
          <div className="text-center text-sm mt-1">{getFamilyTextOf(element!)}</div>
        </div>
      ); // return regular cell
    } else if (element == undefined) {
      let color;

      // fuck it we hardcode
      switch (text) {
        case "Lanthanide Series":
          color = config.family.lanthanide;
          break;
        case "Actinide Series":
          color = config.family.actinide;
          break;
        default:
          Error("When nonElement is true, text must either be 'Lanthanide Series' or 'Actinide Series'");
          break;
      } // switch

      cellStyle = `${cellStyle} ${color} place-content-center`;

      return (
        <div className={cellStyle}>
          <div className="text-xl pl-1.5 text-center mb-3">{range}</div>
          <div className="text-center text-lg">{text}</div>
        </div>
      ); // return compressed f block
    } // if element is a compressed f block
  } else { // if cell should be an empty cell
    const elementArray: React.ReactNode[] = [];
    
    for (let i = 0; i < amount; i++) {
      elementArray.push(
        <div key={i} className={defaultCellStyles} />
      ); // push empty cell
    } // for amount of empty cells

    return (
      <>
        {elementArray}
      </>
    ); // return empty cells
  } // else
} // Cell
