"use client"

import { useEffect, useState } from "react";
import Card from "./card";
import Search from "./search";

interface Pokemon {
  name: string,
  image: string,
  types: string[],
  weight: number,
  height: number
}

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true);

  const fetchPokemons = async (currentPage: number, currentLimit: number) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/pokemons?page=${currentPage}&limit=${currentLimit}`);
      const data = await res.json();

      if (data && data.length > 0) {
        setPokemons((prev) => [...prev, ...data]);
        if (data.length < currentLimit) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error fetching pokemons: ", error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons(1, limit);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPokemons(nextPage, limit);
  }

  return (
    <>
      <div className="sticky top-4 z-20 bg-white pb-4">
        <Search pokemons={pokemons} />
      </div>

      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {pokemons.map((pokemon) => (
            <Card key={pokemon.name} name={pokemon.name} image={pokemon.image} types={pokemon.types} />
          ))}
        </ul>

        {isLoading && <p>Loading more pokemons...</p>}

        {!isLoading && hasMore && (
          <button onClick={handleLoadMore}>Load More</button>
        )}

        {!hasMore && <p>You have reached the end of the list.</p>}
      </div>
      
    </>
  );
}