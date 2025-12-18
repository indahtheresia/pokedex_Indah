import Card from "@/components/card";
import Carousel from "@/components/carousel";
import PokemonList from "@/components/pokemonList";

export default async function Home() {
  return (
    <main className="max-w-7xl mx-auto p-4 space-y-6">
      <section className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 h-64 rounded-xl bg-pink-100">
          <Carousel />
        </div>

        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
          <div className="h-[120px] rounded-xl bg-pink-100 flex items-center justify-center">
            Static Banner
          </div>
          <div className="h-[120px] rounded-xl bg-pink-100 flex items-center justify-center">
            Static Banner
          </div>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-4">
        <aside className="hidden md:block md:col-span-2">
          <div className="sticky top-4 h-[500px] rounded-xl bg-slate-100 flex items-center justify-center">
            Left Static Image
          </div>
        </aside>

        <div className="col-span-12 md:col-span-6">
          <PokemonList />
        </div>

        <aside className="hidden md:block md:col-span-4">
          <div className="sticky top-4 h-[500px] rounded-xl bg-slate-100 flex items-center justify-center">
            Right Static Image
          </div>
        </aside>
      </section>
    </main>
  );
}
