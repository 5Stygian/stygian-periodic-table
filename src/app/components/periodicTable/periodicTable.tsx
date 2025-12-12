import Period1 from "./periods/period1";
import Period2 from "./periods/period2";
import Period3 from "./periods/period3";
import Period4 from "./periods/period4";
import Period5 from "./periods/period5";
import Period6 from "./periods/period6";
import Period7 from "./periods/period7";

export default function PeriodicTable() {
  return (
    <div className="grid gap-x-4 grid-cols-18 grid-rows-7 scale-90 -ml-12 -mt-4">
      <Period1 />
      <Period2 />
      <Period3 />
      <Period4 />
      <Period5 />
      <Period6 />
      <Period7 />
    </div>
  );
}
