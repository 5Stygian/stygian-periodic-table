"use client";

import React from "react";

import config from "@/app/data/config";
import { Element } from "@/app/data/elements";

const defaultCellStyles = "min-w-32 w-min min-h-25 -my-4 scale-67 transform-gpu";

interface ElementProps {
  // element data
  element?: Element;
  
  // display
  text?: string;
  range?: string;
  empty?: boolean;
  amount?: number;
  compressedFBlock?: boolean;

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
  compressedFBlock = false
}: ElementProps) {
  if (!empty && !element && !compressedFBlock) {
    console.log("Something fucked up somewhere");
    
    return (
      <div className="z-5 bg-black border-2 border-red-500 w-fit p-2 content-center font-bold">
        <span>Invalid Element</span>
      </div>
    ); // return
  } else if (!empty) {
    let blockStyle = `${defaultCellStyles} bg-black border-3 shadow-2x1 font-bold`;

    if (!compressedFBlock) {
      blockStyle = `${blockStyle} ${element!.color} duration-75 ease-[cubic-bezier(0.06, 0.98, 0.41, 0.93)] hover:cursor-default hover:scale-105 hover:z-10`;

      function handleClick() {
        console.log(element!.name + " was clicked!");
      }

      return (
        <button type="button" onClick={handleClick} className={blockStyle}>
          <span className="text-lg pl-1.5">{element!.atomicNumber}</span>
          <div className="text-center text-5xl -mt-1">{element!.symbol}</div>
          <div className="text-center">{element!.name}</div>
          <div className="text-center text-sm mt-1">{element!.familyText}</div>
        </button>
      ); // return regualr cell
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
          Error("When compressedFBlock is true, text must either be 'Lanthanide Series' or 'Actinide Series'");
          break;
      } // switch

      blockStyle = `${blockStyle} ${color} place-content-center`;

      return (
        <div className={blockStyle}>
          <div className="text-xl pl-1.5 text-center mb-3">{range}</div>
          <div className="text-center text-lg">{text}</div>
        </div>
      ); // return compressed f block
    } // if (!compressedFBlock)
  } else { // if cell is empty
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
