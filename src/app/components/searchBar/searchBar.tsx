"use client"

import { SetStateAction, useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState("");

  function handleChange( event: { target: { value: SetStateAction<string>; }; } ): void {
    setInput(event.target.value);
    console.log(input);
  }

  return (
    <form className="w-120 h-12 mx-auto my-8 border-red-500 border-2 rounded-xl flex items-center">
      <input className="pl-4" type="text" placeholder="Search element..." value={input} onChange={handleChange} />
    </form>
  );
}