"use client"

import { lookup, validKeys } from "@/app/data/elements";
import { SetStateAction, useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState("");

  function handleChange( event: { target: { value: SetStateAction<string>; }; } ): void {
    setInput(event.target.value);

    console.log(checked);
    console.log(JSON.stringify(input));

    lookup(checked as validKeys, input, true);
  }

  function handleRadioChange( event: { target: { value: SetStateAction<string>; }; } ): void {
    setChecked(event.target.value);
  }

  const radios = [
    { value: "name", label: "Name", checked: true },
    { value: "electronegativity", label: "Electronegativity", checked: true }
  ];

  return (
    <div id="search" className="hidden">
      <form className="w-120 h-12 ml-8 my-8 border-red-500 border-2 rounded-xl inline-flex items-center">
        <input className="pl-4 w-120 h-10" placeholder="Search by property..." value={input} onChange={handleChange} />
      </form>
      <form className="inline-flex ml-8">
        {radios.map((radio): React.ReactNode => (
          <label key={radio.value} className="ml-4">
            <input type="radio" name="data" value={radio.value} onChange={handleRadioChange} />
            {radio.label}
          </label>
        ))}
      </form>
    </div>
  );
}