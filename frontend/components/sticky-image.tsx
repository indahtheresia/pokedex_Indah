import Image from "next/image";

export default function StickyImage({colSpan, position}: {colSpan: number, position: string}) {
  const colSpanMap: Record<number, string> = {
    2: "md:col-span-2",
    4: "md:col-span-4"
  }
  return (
    <aside className={`hidden md:block ${colSpanMap[colSpan]}`}>
      <div className="sticky top-4">
        <div className="relative h-125 rounded-xl border-2 border-[#90ee90] bg-slate-100 overflow-hidden">
          <Image
            src={`/images/${position}_banner.webp`}
            alt={`${position} banner`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </aside>
  )
}