import Element from "../elements/element";
import HydrogenHeliumSep from "../elements/separators/hydrogenHeliumSep";

import config from "../../../config.ts";

export default function Period1() {
  return (
    <>
      <Element symbol='H' name='Hydrogen' atomicNumber={1} color={config.colors.hydrogen} />
      <HydrogenHeliumSep />
      <Element symbol='He' name='Helium' atomicNumber={2} color={config.colors.nobleGasses} />
    </>
  );
}
