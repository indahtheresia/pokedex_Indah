import Carousel from "@/components/carousel";
import PokemonList from "@/components/pokemonList";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="max-w-7xl mx-auto p-4 space-y-6 main-container">
      <section className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 h-64 rounded-xl bg-pink-100">
          <Carousel />
        </div>

        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
          <div className="relative h-30 w-full rounded-xl bg-pink-100 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[200%] animate-down">
              <Image
                src="/images/gif/pokemon1.gif"
                alt="banner 1"
                fill
                className="object-cover object-bottom"
              />
            </div>
          </div>

        <div className="relative h-30 w-full rounded-xl bg-pink-100 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[200%] animate-up">
            <Image
              src="/images/gif/pokemon2.gif"
              alt="banner 2"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        </div>
      </section>

      <section className="grid grid-cols-12 gap-4">
        <aside className="hidden md:block md:col-span-2">
          <div className="sticky top-4 h-125 rounded-xl bg-slate-100 flex items-center justify-center">
            Left Static Image
          </div>
        </aside>

        <div className="col-span-12 md:col-span-6">
          <PokemonList />
        </div>

        <aside className="hidden md:block md:col-span-4">
          <div className="sticky top-4 h-125 rounded-xl bg-slate-100 flex items-center justify-center">
            Right Static Image
          </div>
        </aside>
      </section>
    </main>
  );
}
