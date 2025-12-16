export default function ElementCard() {
  const symbolStyling = `min-w-32 w-min min-h-40 bg-black border-3 shadow-2x1 font-bold flex justify-center items-center hover:cursor-default`;
  const dataTableStyling = `basis-5x1 min-h-40 bg-black border-3 shadow-2x1 font-bold flex justify-center items-center ml-8 mt-60 px-8 py-6 hover:cursor-default`;
  const dataTitleStyling = "pr-12 float-left text-nowrap";
  const dataContentStyling = "text-white";
  
  return (
    <div id="elementCard" className="hidden w-screen flex justify-center items-center pb-20 hover:cursor-default">
      <div className={symbolStyling}>
        <p id="elementCardSymbol" className="flex justify-center items-center text-7xl px-4">$element.symbol</p>
      </div>
      <div className={dataTableStyling}>
        <table>
          <tbody>
            <tr>
              <th className={dataTitleStyling}>Name</th>
              <td id="elementCardName" className={dataContentStyling}>$element.name</td>
            </tr>
            <tr>
              <th className={dataTitleStyling}>Family</th>
              <td id="elementCardFamily" className={dataContentStyling}>$element.familyText</td>
            </tr>
            <tr>
              <th className={dataTitleStyling}>Atomic Number</th>
              <td id="elementCardAtomicNumber" className={dataContentStyling}>$element.atomicNumber</td>
            </tr>
            <tr>
              <th className={dataTitleStyling}>Group</th>
              <td id="elementCardGroup" className={dataContentStyling}>$element.group</td>
            </tr>
            <tr>
              <th className={dataTitleStyling}>Period</th>
              <td id="elementCardPeriod" className={dataContentStyling}>$element.period</td>
            </tr>
            <tr>
              <th className={dataContentStyling} colSpan={2}><br />Electron Configuration</th>
            </tr>
            <tr>
              <th className={dataTitleStyling}>Full</th>
              <td id="elementCardECFull" className={dataContentStyling}>$element.fullElectronConfiguration</td>
            </tr>
            <tr>
              <th className={dataTitleStyling}>Noble Gas</th>
              <td id="elementCardECNobleGas" className={dataContentStyling}>$element.nobleGasElectronConfiguration</td>
            </tr>
            <tr>
              <th className={dataContentStyling} colSpan={2}><br />Misc</th>
            </tr>
            <tr>
              <th className={dataTitleStyling}>Tags</th>
              <td id="elementCardTags" className={dataContentStyling}>$element.tags</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
