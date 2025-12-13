import Period1 from "./periods/period1.tsx";
import Period2 from "./periods/period2.tsx";
import Period3 from "./periods/period3.tsx";
import Period4 from "./periods/period4.tsx";
import Period5 from "./periods/period5.tsx";
import Period6 from "./periods/period6.tsx";
import Period7 from "./periods/period7.tsx";
import Lanthanides from "./periods/lanthanides.tsx";
import Actinides from "./periods/actinides.tsx";

export default function PeriodicTable() {
  return (
    <div className="grid gap-x-16 grid-cols-18 grid-rows-9 scale-87 max-w-350 mx-auto md:-ml-24">
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
