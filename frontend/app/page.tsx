import Carousel from "@/components/carousel";
import PokemonList from "@/components/pokemon-list";
import StickyImage from "@/components/sticky-image";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="max-w-7xl mx-auto p-4 space-y-6 main-container">
      <section className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 h-64 rounded-xl bg-pink-100">
          <Carousel />
        </div>

        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
          <div className="relative h-30 w-full rounded-xl border-2 border-[#00b200] bg-pink-100 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[200%] animate-down">
              <Image
                src="/images/gif/pokemon1.gif"
                alt="banner 1"
                fill
                className="object-cover object-bottom"
              />
            </div>
          </div>

        <div className="relative h-30 w-full rounded-xl border-2 border-[#00b200] bg-pink-100 overflow-hidden">
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
        <StickyImage colSpan={2} position="left" />

        <div className="col-span-12 md:col-span-6">
          <PokemonList />
        </div>

        <StickyImage colSpan={4} position="right" />
      </section>
    </main>
  );
}
