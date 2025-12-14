import { NaE } from "@/app/data/elements";

export default function ElementCard() {
  const symbolStyling = `min-w-32 w-min min-h-40 bg-black border-3 shadow-2x1 font-bold ${NaE.color} flex justify-center items-center hover:cursor-default`;
  const dataStyling = `min-w-110 w-min min-h-40 bg-black border-3 shadow-2x1 font-bold ${NaE.color} flex justify-center items-center ml-8 px-8 hover:cursor-default`;

  return (
    <div id="elementCard" className="w-screen flex justify-center items-center pb-20 hover:cursor-default">
      <div className={symbolStyling}>
        <p id="elementCardSymbol" className="flex justify-center items-center text-7xl px-4">${NaE.symbol}</p>
      </div>
      <div className={dataStyling}>
        <table>
          <tbody>
            <tr>
              <th className="pr-12 float-left">Name</th>
              <td id="elementCardName" className="text-white">{NaE.name}</td>
            </tr>
            <tr>
              <th className="pr-12 float-left">Family</th>
              <td id="elementCardFamily" className="text-white">{NaE.familyText}</td>
            </tr>
            <tr>
              <th className="pr-12 float-left">Atomic Number</th>
              <td id="elementCardAtomicNumber" className="text-white">{NaE.atomicNumber}</td>
            </tr>
            <tr>
              <th className="pr-12 float-left">Group</th>
              <td id="elementCardGroup" className="text-white">{NaE.group}</td>
            </tr>
            <tr>
              <th className="pr-12 float-left">Period</th>
              <td id="elementCardPeriod" className="text-white">{NaE.period}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}