import Cell from "../cell/cell.tsx"

import config from "../../../data/config.ts";

export default function Period7() {
  return (
    <>
      <Cell symbol="Fr" name="Francium" atomicNumber={19} color={config.colors.alkaliMetal} />
      <Cell symbol="Ra" name="Radium" atomicNumber={20} color={config.colors.alkalineEarthMetal} />
      <Cell compressedFBlock={true} name="Actinide Series" color={config.colors.actinide} />
      <Cell symbol="Rf" name="Rutherfordium" atomicNumber={23} color={config.colors.transitionMetal} />
      <Cell symbol="Db" name="Dubnium" atomicNumber={24} color={config.colors.transitionMetal} />
      <Cell symbol="Sg" name="Seaborgium" atomicNumber={24} color={config.colors.transitionMetal} />
      <Cell symbol="Bh" name="Bohrium" atomicNumber={25} color={config.colors.transitionMetal} />
      <Cell symbol="Hs" name="Hassium" atomicNumber={26} color={config.colors.transitionMetal} />
      <Cell symbol="Mt" name="Meitnerium" atomicNumber={27} color={config.colors.transitionMetal} />
      <Cell symbol="Ds" name="Darmstadtium" atomicNumber={28} color={config.colors.transitionMetal} />
      <Cell symbol="Rg" name="Roentgenium" atomicNumber={29} color={config.colors.transitionMetal} />
      <Cell symbol="Cn" name="Copernicium" atomicNumber={30} color={config.colors.transitionMetal} />
      <Cell symbol="Nh" name="Nihonium" atomicNumber={31} color={config.colors.postTransitionMetal} />
      <Cell symbol="Fl" name="Flerovium" atomicNumber={32} color={config.colors.postTransitionMetal} />
      <Cell symbol="Mc" name="Moscovium" atomicNumber={33} color={config.colors.postTransitionMetal} />
      <Cell symbol="Lv" name="Livermorium" atomicNumber={34} color={config.colors.postTransitionMetal} />
      <Cell symbol="Ts" name="Tennessine" atomicNumber={35} color={config.colors.halogen} />
      <Cell symbol="Og" name="Oganesson" atomicNumber={36} color={config.colors.nobleGas} />
    </>
  );
}