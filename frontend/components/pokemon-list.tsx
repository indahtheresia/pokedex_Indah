"use client"

import { useEffect, useState } from "react";
import Card from "./card";
import Search from "./search";
import { useInView } from "react-intersection-observer";

interface Pokemon {
  name: string,
  image: string,
  types: string[],
  weight: number,
  height: number
}

const POKEMON_LIMIT_PER_PAGE = 15

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true);
  const [ref, inView] = useInView();
  const [searchValue, setSearchValue] = useState("");

  const handleLoadMore = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const res = await fetch(`/api/pokemons?page=${page}&limit=${POKEMON_LIMIT_PER_PAGE}`);
      const data = await res.json();

      if (data && data.length > 0) {
        setPokemons((prev) => [...prev, ...data]);
        setPage((prev) => prev + 1);
        if (data.length < POKEMON_LIMIT_PER_PAGE) setHasMore(false);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error(err);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleLoadMore()
  }, []);

  useEffect(() => {
    if (searchValue) return;
    if (inView && hasMore && !isLoading) {
      handleLoadMore()
    }
  }, [inView, hasMore, isLoading, searchValue]);

  useEffect(() => {
    if (searchValue) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
  }, [searchValue])

  const filteredPokemons = pokemons.filter(p => p.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>
      <div className="sticky top-4 z-20 mb-4">
        <Search onSearch={setSearchValue} />
      </div>

      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filteredPokemons.map((pokemon) => (
            <Card key={pokemon.name} name={pokemon.name} image={pokemon.image} types={pokemon.types} />
          ))}
        </ul>

        {!searchValue && (
          <div ref={ref} className="text-green-900 text-center">
          Loading more pokemons...
        </div>
        )}
      </div>
      
    </>
  );
}