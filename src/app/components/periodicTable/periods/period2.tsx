import Element from "../elements/element";
import SBlockToPBlockSep from "../elements/separators/stpSep.tsx";

import config from "../../../config.ts";

export default function Period2() {
  return (
    <>
      <Element symbol="Li" name="Lithium" atomicNumber={3} color={config.colors.alkaliMetals}/>
      <Element symbol="Be" name="Beryllium" atomicNumber={4} color={config.colors.alkalineEarthMetals}/>
      <SBlockToPBlockSep />
      <Element symbol="B" name="Boron" atomicNumber={5} color={config.colors.metalloid}/>
      <Element symbol="C" name="Carbon" atomicNumber={6} color={config.colors.nonmetal}/>
      <Element symbol="O" name="Oxygen" atomicNumber={7} color={config.colors.nonmetal}/>
      <Element symbol="N" name="Nitrogen" atomicNumber={8} color={config.colors.nonmetal}/>
      <Element symbol="F" name="Florine" atomicNumber={9} color={config.colors.nonmetal}/>
      <Element symbol="Ne" name="Neon" atomicNumber={10} color={config.colors.nobleGasses}/>
    </>
  );
}
