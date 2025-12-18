import Card from "@/components/card";
import Carousel from "@/components/carousel";

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
          <div className="sticky top-4 z-20 bg-white pb-4">
            <div className="flex gap-2">
              <input
                placeholder="Pokemon Name"
                className="flex-1 rounded-lg border px-4 py-2"
              />
              <button className="bg-orange-400 text-white px-4 py-2 rounded-lg">
                Search
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <Card name="ivysaur" image="/next.svg" types={["grass", "poison"]} />
            <Card name="ivysaur" image="/next.svg" types={["grass", "poison"]} />
            <Card name="ivysaur" image="/next.svg" types={["grass", "poison"]} />
            <Card name="ivysaur" image="/next.svg" types={["grass", "poison"]} />
          </div>
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
