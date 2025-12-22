"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/banner1.webp",
  "/images/banner2.webp",
  "/images/banner3.webp"
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-full rounded-xl border-2 border-[#00b200] overflow-hidden">
      <Image
        src={images[index]}
        alt="Pokemon banner"
        fill
        className="object-cover transition-opacity duration-500"
        priority
      />

      {/* dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-orange-400" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}