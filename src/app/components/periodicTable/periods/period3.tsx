import Element from "../elements/element";
import SBlockToPBlockSep from "../elements/separators/stpSep.tsx";

import config from "../../../config.ts";

export default function Period3() {
  return (
    <>
      <Element symbol="Na" name="Sodium" atomicNumber={11} color={config.colors.alkaliMetals}/>
      <Element symbol="Mg" name="Magnesium" atomicNumber={12} color={config.colors.alkalineEarthMetals}/>
      <SBlockToPBlockSep />
      <Element symbol="Al" name="Aluminum" atomicNumber={13} color={config.colors.postTransitionMetals}/>
      <Element symbol="Si" name="Silicon" atomicNumber={14} color={config.colors.metalloid}/>
      <Element symbol="P" name="Phosphorus" atomicNumber={15} color={config.colors.nonmetal}/>
      <Element symbol="S" name="Sulfur" atomicNumber={16} color={config.colors.nonmetal}/>
      <Element symbol="Cl" name="Chlorine" atomicNumber={17} color={config.colors.nonmetal}/>
      <Element symbol="Ar" name="Argon" atomicNumber={18} color={config.colors.nobleGasses}/>
    </>
  );
}
