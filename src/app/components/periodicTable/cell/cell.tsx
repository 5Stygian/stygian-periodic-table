"use client";

import React from "react";

import config from "@/app/data/config";

const blockSizing = "min-w-27 w-min min-h-25 -my-4 scale-67";

interface ElementProps {
  // element data
  symbol?: string;
  name?: string;
  atomicNumber?: number;
  
  // display
  color?: string;
  empty?: boolean;
  amount?: number;
  compressedFBlock?: boolean;

  // html props
  className?: string;
  style?: React.CSSProperties;
}

export default function Cell({
  symbol,
  name,
  atomicNumber,
  color,
  empty = false,
  amount = 0,
  compressedFBlock = false
}: ElementProps) {
  if (!empty) {
    let blockStyle = `${blockSizing} bg-black border-2 shadow-2x1 ${color} font-bold select-none`;

    if (!compressedFBlock) {
      let family;

      switch (color) {
        case config.colors.alkaliMetal:
          family = "Alkali Metal";
          break;
        case config.colors.alkalineEarthMetal:
          family = "Alkaline Earth Metal";
          break;
        case config.colors.transitionMetal:
          family = <span>Transition<br />Metal</span>;
          break;
        case config.colors.postTransitionMetal:
          family = "Post-Transition Metal";
          break;
        case config.colors.metalloid:
          family = "Metalloid";
          break;
        case config.colors.nonmetal:
          family = "Nonmetal";
          break;
        case config.colors.halogen:
          family = "Halogen";
          break;
        case config.colors.nobleGas:
          family = "Noble Gas";
          break;
        case config.colors.lanthanide:
          family = "Lanthanide";
          break;
        case config.colors.actinide:
          family = "Actinide";
          break;
        default:
          family = "Unknown";
          break;
      } // switch

      blockStyle = `${blockStyle} duration-75 ease-[cubic-bezier(0.06, 0.98, 0.41, 0.93)] hover:scale-105 hover:z-10`;

      return (
        <div className={blockStyle}>
          <span className="text-lg pl-1.5">{atomicNumber}</span>
          <div className="text-center text-5xl -mt-2">{symbol}</div>
          <div className="text-center">{name}</div>
          <div className="text-center text-sm mt-1">{family}</div>
        </div>
      ); // return
    } else {
      blockStyle = `${blockStyle} place-content-center`;

      return (
        <div className={blockStyle}>
          <div className="text-xl pl-1.5 text-center mb-3">{symbol}</div>
          <div className="text-center text-lg">{name}</div>
        </div>
      ); // return
    } // if
  } else {
    const elementArray: React.ReactNode[] = [];
    
    for (let i = 0; i < amount; i++) {
      elementArray.push(
        <div key={i} className={blockSizing} />
      ); // push
    } // for

    return (
      <>
        {elementArray}
      </>
    ); // return
  } // else
} // Cell
