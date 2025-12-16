import { NaE } from "@/app/data/elements";

export default function ElementCard() {
  const symbolStyling = `min-w-32 w-min min-h-40 bg-black border-3 shadow-2x1 font-bold ${NaE.color} flex justify-center items-center hover:cursor-default`;
  const dataTableStyling = `min-w-220 w-min min-h-40 bg-black border-3 shadow-2x1 font-bold ${NaE.color} flex justify-center items-center ml-8 px-8 py-6 hover:cursor-default`;
  const dataTitleStyling = "pr-12 float-left text-nowrap";
  const dataContentStyling = "text-white";
  
  return (
    <div id="elementCard" className="w-screen flex justify-center items-center pb-20 hover:cursor-default">
      <div className={symbolStyling}>
        <p id="elementCardSymbol" className="flex justify-center items-center text-7xl px-4">${NaE.symbol}</p>
      </div>
      <div className={dataTableStyling}>
        <table>
          <tbody>
            <tr>
              <th className={dataTitleStyling}>Name</th>
              <td id="elementCardName" className={dataContentStyling}>{NaE.name}</td>
            </tr>
            <tr>
              <th className={dataTitleStyling}>Family</th>
              <td id="elementCardFamily" className={dataContentStyling}>{NaE.familyText}</td>
            </tr>
            <tr>
              <th className={dataTitleStyling}>Atomic Number</th>
              <td id="elementCardAtomicNumber" className={dataContentStyling}>{NaE.atomicNumber}</td>
            </tr>
            <tr>
              <th className={dataTitleStyling}>Group</th>
              <td id="elementCardGroup" className={dataContentStyling}>{NaE.group}</td>
            </tr>
            <tr>
              <th className={dataTitleStyling}>Period</th>
              <td id="elementCardPeriod" className={dataContentStyling}>{NaE.period}</td>
            </tr>
            <tr>
              <th className={dataContentStyling} colSpan={2}><br />Electron Configuration</th>
            </tr>
            <tr>
              <th className={dataTitleStyling}>Full</th>
              <td id="elementCardECFull" className={dataContentStyling}>{NaE.fullElectronConfiguration}</td>
            </tr>
            <tr>
              <th className={dataTitleStyling}>Noble Gas</th>
              <td id="elementCardECNobleGas" className={dataContentStyling}>{NaE.nobleGasElectronConfiguration}</td>
            </tr>
            <tr>
              <th className={dataContentStyling} colSpan={2}><br />Misc</th>
            </tr>
            <tr>
              <th className={dataTitleStyling}>Tags</th>
              <td id="elementCardTags" className={dataContentStyling}>{NaE.tags}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
