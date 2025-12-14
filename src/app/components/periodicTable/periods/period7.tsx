import Cell from "../cell/cell.tsx"

import config from "../../../data/config.ts";

export default function Period7() {
  return (
    <>
      <Cell symbol="Fr" name="Francium" atomicNumber={87} family={config.family.alkaliMetal} />
      <Cell symbol="Ra" name="Radium" atomicNumber={88} family={config.family.alkalineEarthMetal} />
      <Cell compressedFBlock={true} name="Actinide Series" symbol="89 - 103" family={config.family.actinide} />
      <Cell symbol="Rf" name="Rutherfordium" atomicNumber={104} family={config.family.transitionMetal} />
      <Cell symbol="Db" name="Dubnium" atomicNumber={105} family={config.family.transitionMetal} />
      <Cell symbol="Sg" name="Seaborgium" atomicNumber={106} family={config.family.transitionMetal} />
      <Cell symbol="Bh" name="Bohrium" atomicNumber={107} family={config.family.transitionMetal} />
      <Cell symbol="Hs" name="Hassium" atomicNumber={108} family={config.family.transitionMetal} />
      <Cell symbol="Mt" name="Meitnerium" atomicNumber={109} family={config.family.transitionMetal} />
      <Cell symbol="Ds" name="Darmstadtium" atomicNumber={110} family={config.family.transitionMetal} />
      <Cell symbol="Rg" name="Roentgenium" atomicNumber={111} family={config.family.transitionMetal} />
      <Cell symbol="Cn" name="Copernicium" atomicNumber={112} family={config.family.transitionMetal} />
      <Cell symbol="Nh" name="Nihonium" atomicNumber={113} family={config.family.postTransitionMetal} />
      <Cell symbol="Fl" name="Flerovium" atomicNumber={114} family={config.family.postTransitionMetal} />
      <Cell symbol="Mc" name="Moscovium" atomicNumber={115} family={config.family.postTransitionMetal} />
      <Cell symbol="Lv" name="Livermorium" atomicNumber={116} family={config.family.postTransitionMetal} />
      <Cell symbol="Ts" name="Tennessine" atomicNumber={117} family={config.family.halogen} />
      <Cell symbol="Og" name="Oganesson" atomicNumber={118} family={config.family.nobleGas} />
    </>
  );
}