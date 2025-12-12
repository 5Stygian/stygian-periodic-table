import Cell from "../cell/cell.tsx"

import config from "../../../data/config.ts";

export default function Period6() {
  return (
    <>
      <Cell symbol="Cs" name="Cesium" atomicNumber={55} color={config.colors.alkaliMetal} />
      <Cell symbol="Ba" name="Barium" atomicNumber={56} color={config.colors.alkalineEarthMetal} />
      <Cell compressedFBlock={true} name="Lanthanide Series" color={config.colors.lanthanide} />
      <Cell symbol="Hf" name="Hafnium" atomicNumber={72} color={config.colors.transitionMetal} />
      <Cell symbol="Ta" name="Tantalum" atomicNumber={73} color={config.colors.transitionMetal} />
      <Cell symbol="W" name="Tungsten" atomicNumber={74} color={config.colors.transitionMetal} />
      <Cell symbol="Re" name="Rhenium" atomicNumber={75} color={config.colors.transitionMetal} />
      <Cell symbol="Os" name="Osmium" atomicNumber={76} color={config.colors.transitionMetal} />
      <Cell symbol="Ir" name="Iridium" atomicNumber={77} color={config.colors.transitionMetal} />
      <Cell symbol="Pt" name="Platinum" atomicNumber={78} color={config.colors.transitionMetal} />
      <Cell symbol="Au" name="Gold" atomicNumber={79} color={config.colors.transitionMetal} />
      <Cell symbol="Hg" name="Mercury" atomicNumber={80} color={config.colors.transitionMetal} />
      <Cell symbol="Tl" name="Thallium" atomicNumber={81} color={config.colors.postTransitionMetal} />
      <Cell symbol="Pb" name="Lead" atomicNumber={82} color={config.colors.postTransitionMetal} />
      <Cell symbol="Bi" name="Bismuth" atomicNumber={83} color={config.colors.postTransitionMetal} />
      <Cell symbol="Po" name="Polonium" atomicNumber={84} color={config.colors.metalloid} />
      <Cell symbol="At" name="Astatine" atomicNumber={85} color={config.colors.halogen} />
      <Cell symbol="Rn" name="Radon" atomicNumber={86} color={config.colors.nobleGas} />
    </>
  );
}