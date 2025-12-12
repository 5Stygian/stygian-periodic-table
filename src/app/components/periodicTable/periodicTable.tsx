import Period1 from "./periods/period1";
import Period2 from "./periods/period2";
import Period3 from "./periods/period3";

export default function PeriodicTable() {
  return (
    <div className="grid grid-cols-18 grid-rows-7 gap-x-4 scale-90 -ml-12">
      <Period1 />
      <Period2 />
      <Period3 />
    </div>
  );
}
