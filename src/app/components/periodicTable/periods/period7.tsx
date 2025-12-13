import Cell from "../cell/cell.tsx"

import config from "../../../data/config.ts";

export default function Period7() {
  return (
    <>
      <Cell symbol="Fr" name="Francium" atomicNumber={88} color={config.colors.alkaliMetal} />
      <Cell symbol="Ra" name="Radium" atomicNumber={87} color={config.colors.alkalineEarthMetal} />
      <Cell compressedFBlock={true} name="Actinide Series" symbol="89 - 103" color={config.colors.actinide} />
      <Cell symbol="Rf" name="Rutherfordium" atomicNumber={104} color={config.colors.transitionMetal} />
      <Cell symbol="Db" name="Dubnium" atomicNumber={105} color={config.colors.transitionMetal} />
      <Cell symbol="Sg" name="Seaborgium" atomicNumber={106} color={config.colors.transitionMetal} />
      <Cell symbol="Bh" name="Bohrium" atomicNumber={107} color={config.colors.transitionMetal} />
      <Cell symbol="Hs" name="Hassium" atomicNumber={108} color={config.colors.transitionMetal} />
      <Cell symbol="Mt" name="Meitnerium" atomicNumber={109} color={config.colors.transitionMetal} />
      <Cell symbol="Ds" name="Darmstadtium" atomicNumber={110} color={config.colors.transitionMetal} />
      <Cell symbol="Rg" name="Roentgenium" atomicNumber={111} color={config.colors.transitionMetal} />
      <Cell symbol="Cn" name="Copernicium" atomicNumber={112} color={config.colors.transitionMetal} />
      <Cell symbol="Nh" name="Nihonium" atomicNumber={113} color={config.colors.postTransitionMetal} />
      <Cell symbol="Fl" name="Flerovium" atomicNumber={114} color={config.colors.postTransitionMetal} />
      <Cell symbol="Mc" name="Moscovium" atomicNumber={115} color={config.colors.postTransitionMetal} />
      <Cell symbol="Lv" name="Livermorium" atomicNumber={116} color={config.colors.postTransitionMetal} />
      <Cell symbol="Ts" name="Tennessine" atomicNumber={117} color={config.colors.halogen} />
      <Cell symbol="Og" name="Oganesson" atomicNumber={118} color={config.colors.nobleGas} />
    </>
  );
}