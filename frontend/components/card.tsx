import Image from "next/image"

export default function Card({name, image, types}: {
  name: string,
  image: string,
  types: string[]
}) {
  return (
    <li className="flex items-center gap-4 rounded-sm border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
      <Image
        src={image}
        alt={name}
        width={56}
        height={56}
        className="shrink-0"
      />

      <div>
        <p className="font-semibold text-slate-800 capitalize text-xs">{name}</p>

        <div className="mt-1 flex gap-2">
          {types.map((type) => (
            <span
              key={type}
              className="rounded-xs bg-slate-200 py-0.5 text-xs text-slate-700 capitalize"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </li>
  )
}