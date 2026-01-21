import Period1 from "./periods/period1.tsx";
import Period2 from "./periods/period2.tsx";
import Period3 from "./periods/period3.tsx";
import Period4 from "./periods/period4.tsx";
import Period5 from "./periods/period5.tsx";
import Period6 from "./periods/period6.tsx";
import Period7 from "./periods/period7.tsx";
import Lanthanides from "./periods/lanthanides.tsx";
import Actinides from "./periods/actinides.tsx";
import Groups from "./periods/groups.tsx";

export default function PeriodicTable() {
  return (
    <div id="periodicTable" className="grid gap-x-16 grid-cols-19 grid-rows-10 scale-87 max-w-420
                    lg:-ml-32 lg:-mt-40 lg:scale-80
                    xl:-translate-x-16 xl:mx-auto">
      <Groups />
      <Period1 />
      <Period2 />
      <Period3 />
      <Period4 />
      <Period5 />
      <Period6 />
      <Period7 />
      <Lanthanides />
      <Actinides />
    </div>
  );
}
