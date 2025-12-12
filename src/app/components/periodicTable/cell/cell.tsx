"use client";

import React from "react";

import config from "@/app/data/config";

const blockSizing = "min-w-25 min-h-25 scale-67";

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
    let blockStyle = `${blockSizing} -my-4 border-2 shadow-2x1 ${color} select-none`;

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
          family = "Transition Metal";
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
      }

      return (
        <div className={blockStyle}>
          <span className="text-lg pl-1.5">{atomicNumber}</span>
          <div className="text-center text-5xl -mt-2">{symbol}</div>
          <div className="text-center">{name}</div>
          <div className="text-center text-sm mt-1">{family}</div>
        </div>
      );
    } else {
      blockStyle = `${blockStyle} place-content-center`;

      return (
        <div className={blockStyle}>
          <div className="text-center">{name}</div>
        </div>
      );
    }
  } else {
    const elementArray: React.ReactNode[] = [];
    
    for (let i = 0; i < amount; i++) {
      elementArray.push(
        <div key={i} className={blockSizing} />
      );
    }

    return (<>{elementArray}</>);
  }
}
