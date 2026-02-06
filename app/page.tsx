"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MoveLeft, MoveRight } from "lucide-react";

/* -------------------- DATA -------------------- */

const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?q=80&w=687&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1074&auto=format&fit=crop",
];

const STATIC_TAGS = [
  "Long-lasting",
  "Best Quality",
  "Dustproof",
  "Soft cushioning",
  "Elegant design",
];

/* -------------------- COMPONENTS -------------------- */

const Navbar = () => (
  <nav className="absolute top-6 left-0 right-0 z-50 flex justify-between items-center px-8 max-w-[1700px] mx-auto pointer-events-none">
    <div className="flex items-center gap-1 bg-black/40 border border-white/20 backdrop-blur-xl rounded-full px-1.5 py-1.5 pointer-events-auto">
      {/* UPDATED: Mapping over objects to handle specific paths */}
      {[
        { label: "Home", path: "/" },
        { label: "Product", path: "/shop" },
        { label: "About", path: "/about" },
        { label: "Pricing", path: "#" } // Placeholder
      ].map((item, i) => (
        <Link
          key={item.label}
          href={item.path}
          className={`px-6 py-2 rounded-full text-[15px] transition font-medium ${
            i === 0 ? "text-white" : "text-zinc-400 hover:text-white"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>

    <Link
      href="/contact"
      className="pointer-events-auto bg-white text-black px-5 py-2.5 rounded-full flex items-center gap-2 text-[15px] font-semibold hover:bg-zinc-100 transition"
    >
      Contact us
      <span className="bg-black text-white p-1.5 rounded-full">
        <ArrowUpRight size={18} />
      </span>
    </Link>
  </nav>
);

const FloatingTag = ({
  text,
  style,
}: {
  text: string;
  style: React.CSSProperties;
}) => (
  <div className="absolute z-40" style={style}>
    <div className="relative bg-white text-black text-[13px] font-semibold px-4 py-2 rounded-full shadow-xl">
      {text}
      <span className="absolute -bottom-1.5 left-4 w-2.5 h-2.5 bg-white rounded-full" />
    </div>
  </div>
);

/* -------------------- PAGE -------------------- */

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="relative w-full max-w-[1700px] aspect-[16/9.5] bg-[#0f0f0f] rounded-[2.5rem] overflow-hidden border border-white/15 shadow-2xl">
        <Navbar />

        {/* BACKGROUND SPLIT */}
        <div className="absolute inset-0 flex">
          {/* Left side - darker with overlay */}
          <div className="w-1/2 relative bg-[#0a0a0a]">
            <Image
              src="https://images.unsplash.com/photo-1503602642458-23211144584b?auto=format&fit=crop&q=80&w=1200"
              alt=""
              fill
              className="object-cover opacity-15 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/98 via-black/90 to-black/75" />
          </div>

          {/* Right side - main image */}
          <div className="w-1/2 relative">
            <Image
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1600"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>

        {/* HEADLINE */}
        <div className="absolute top-32 left-14 z-20">
          <h1 className="text-white text-[56px] leading-[1.1] tracking-tight font-bold">
            MODERN DESIGNS.
            <br />
            EFFORTLESS COMFORT.
            <br />
            LASTING QUALITY.
          </h1>
        </div>

        {/* CAROUSEL - FLOATING */}
        <div className="absolute z-30 top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
          {CAROUSEL_IMAGES.map((src, i) => (
            <div
              key={i}
              className={`relative rounded-[24px] overflow-hidden bg-white/95 backdrop-blur-xl shadow-2xl transition-all
              ${i === 0 ? "w-[150px] h-[190px] opacity-85" : ""}
              ${i === 1 ? "w-[160px] h-[200px] z-10" : ""}
              ${i === 2 ? "w-[150px] h-[190px] opacity-85" : ""}`}
            >
              <Image src={src} alt="" fill className="object-cover" />
              <span className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-md">
                <ArrowUpRight size={16} className="text-black" />
              </span>
            </div>
          ))}
        </div>

        {/* DESCRIPTION + ARROWS */}
        <div className="absolute z-30 bottom-[15%] left-14 max-w-[380px]">
          <p className="text-zinc-300 text-[14px] mb-6 leading-relaxed">
            Contemporary chairs crafted for your lifestyle, designed to bring
            effortless elegance into your everyday space.
          </p>

          <div className="flex gap-3">
            <button className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition backdrop-blur-sm">
              <MoveLeft className="text-white" size={18} />
            </button>
            <button className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition backdrop-blur-sm">
              <MoveRight className="text-white" size={18} />
            </button>
          </div>
        </div>

        {/* FLOATING TAGS */}
        <FloatingTag
          text="Premium materials"
          style={{ top: "32%", right: "15%" }}
        />
        <FloatingTag
          text="Natural Finish"
          style={{ bottom: "22%", right: "35%" }}
        />

        {/* STATIC TAGS - Bottom Right */}
        <div className="absolute bottom-12 right-12 z-30 flex flex-col gap-2.5 items-end">
          <div className="flex gap-2.5">
            {STATIC_TAGS.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-black/60 backdrop-blur-md border border-white/20 text-zinc-200 text-[11px] px-4 py-2 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2.5">
            {STATIC_TAGS.slice(3).map((tag) => (
              <span
                key={tag}
                className="bg-black/60 backdrop-blur-md border border-white/20 text-zinc-200 text-[11px] px-4 py-2 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}