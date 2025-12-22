"use client"

import { useState } from "react";

export default function Search({onSearch} : {onSearch: (value: string) => void}) {
  const [searchInput, setSearchInput] = useState("");
  function handleSearch(event: React.FormEvent) {
    event.preventDefault();
    onSearch(searchInput);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        placeholder="Pokemon Name"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        className="flex-1 rounded-lg border border-[#00b200] px-4 py-2 bg-[#eaffea] text-[#488948]"
      />
      <button 
        type="submit"
        className="bg-orange-400 text-white px-4 py-2 rounded-lg">
        Search
      </button>
    </form>
  )
}