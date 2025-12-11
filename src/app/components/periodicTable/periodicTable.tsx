import Period1 from "./periods/period1";

export default function PeriodicTable() {
  return (
    <div className="grid grid-cols-18 grid-rows-7 gap-4 scale-90 -ml-12">
      <Period1 />
    </div>
  );
}
