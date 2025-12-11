import Element from "../elements/element";
import HydrogenHeliumDist from "../elements/hydrogenHeliumDist";

import { config } from "../../index";

export default function Period1() {
  return (
    <>
      <Element symbol='H' name='Hydrogen' atomicNumber={1} color={config.colors.hydrogen} />
      <HydrogenHeliumDist />
      <Element symbol='He' name='Helium' atomicNumber={2} color={config.colors.nobleGasses} />
    </>
  );
}
