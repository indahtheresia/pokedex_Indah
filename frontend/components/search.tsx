interface Pokemon {
  name: string,
  image: string,
  types: string[],
  weight: number,
  height: number
}

export default function Search({pokemons} : {pokemons: Pokemon[]}) {
  return (
    <div className="flex gap-2">
          <input
            placeholder="Pokemon Name"
            className="flex-1 rounded-lg border border-[#90ee90] px-4 py-2 bg-[#eaffea] text-[#488948]"
          />
          <button className="bg-orange-400 text-white px-4 py-2 rounded-lg">
            Search
          </button>
        </div>
  )
}