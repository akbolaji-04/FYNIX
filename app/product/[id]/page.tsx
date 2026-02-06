"use client";

import React from "react";
import { ArrowUpRight, MoveRight, MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- Constants matching the design ---
const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=400", // Orange-ish chair placeholder
  "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=400", // Plywood chair placeholder
  "https://images.unsplash.com/photo-1617503752587-97d2103a96ea?auto=format&fit=crop&q=80&w=400", // Rattan/metal chair placeholder
];

const STATIC_TAGS = [
  "Long-lasting", "Best Quality", "Dustproof",
  "Soft cushioning", "Elegant design"
];

// --- Components ---

const Navbar = () => (
  <nav className="absolute top-8 left-0 right-0 z-50 flex justify-between items-start px-8 max-w-[1700px] mx-auto pointer-events-none">
    {/* Left Glass Nav */}
    <div className="glass-panel rounded-full p-1 flex items-center pointer-events-auto">
      {["Home", "Product", "About", "Pricing"].map((item, i) => (
        <Link 
          key={item}
          href={item === "Product" ? "/shop" : "#"}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
        >
          {item}
        </Link>
      ))}
    </div>

    {/* Right Contact Button */}
    <Link href="/contact" className="bg-white text-black pl-6 pr-2 py-2 rounded-full text-sm font-bold flex items-center gap-3 hover:scale-105 transition-transform pointer-events-auto">
      Contact us 
      <div className="bg-black rounded-full p-2 flex items-center justify-center">
        <ArrowUpRight size={18} className="text-white relative top-[1px] right-[1px]" />
      </div>
    </Link>
  </nav>
);

const FloatingTag = ({ text, top, left, right }: { text: string, top?: string, left?: string, right?: string }) => (
  <div className="absolute z-20 flex items-center" style={{ top, left, right }}>
    {/* The tag itself */}
    <div className="bg-white text-black text-[10px] font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap relative order-1">
      {text}
      {/* The pointer dot - adjusted position based on placement */}
      <div className={`absolute w-3 h-3 bg-white rounded-full ${right ? '-bottom-1 -right-1' : '-bottom-1 -left-1'} `}></div>
    </div>
    {/* Connector line placeholder - can be added with SVG if needed for total precision */}
  </div>
);

// --- Main Page ---

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-4 lg:p-8 overflow-hidden">
      
      <div className="relative w-full max-w-[1700px] aspect-[16/10] bg-[#121212] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
        
        <Navbar />

        {/* Main Layout Grid */}
        <div className="grid grid-cols-12 h-full">

          {/* --- LEFT SECTION (Text & Carousel) --- */}
          <div className="col-span-5 relative flex flex-col justify-end p-12 pb-16 z-10 font-sans">
            
            {/* Faded Texture Background for Left Side */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
                <Image 
                   src="https://images.unsplash.com/photo-1503602642458-23211144584b?auto=format&fit=crop&q=80&w=1000" // Placeholder for faded chairs texture
                   alt="Texture"
                   fill
                   className="object-cover grayscale blur-sm"
                />
                 <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 mb-auto mt-32">
              <h1 className="text-5xl lg:text-6xl leading-[1.1] text-editorial font-medium mb-8 tracking-wide text-white">
                MODERN DESIGNS.<br />
                EFFORTLESS COMFORT.<br />
                LASTING QUALITY.
              </h1>
            </div>

            {/* Carousel Section */}
            <div className="relative z-10 space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {CAROUSEL_IMAGES.map((src, i) => (
                  <div key={i} className="aspect-square rounded-[2rem] overflow-hidden relative bg-zinc-200/10 border border-white/10 group cursor-pointer">
                    <div className="absolute top-3 right-3 bg-white/10 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20">
                       <ArrowUpRight size={12} className="text-white"/>
                    </div>
                    <Image src={src} alt="Chair" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>
              <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
                Contemporary chairs crafted for your lifestyle, designed to bring effortless elegance into your everyday space.
              </p>
              {/* Carousel Controls */}
              <div className="flex gap-4 pt-2">
                 <button className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"><MoveLeft className="text-white" /></button>
                 <button className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"><MoveRight className="text-white" /></button>
              </div>
            </div>
          </div>


          {/* --- RIGHT SECTION (Hero Image & Tags) --- */}
          <div className="col-span-7 relative h-full">
            <Image 
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1400" // Placeholder for courtyard lounge image
              alt="Hero Scene"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

            {/* Floating Tags */}
            <FloatingTag text="Premium materials" top="35%" right="20%" />
            <FloatingTag text="Natural Finish" top="65%" left="45%" />

            {/* Bottom Right Static Tags */}
            <div className="absolute bottom-12 right-12 flex flex-col items-end gap-3 z-20 font-sans">
                <div className="flex gap-3">
                    {STATIC_TAGS.slice(0,3).map(tag => (
                        <div key={tag} className="glass-panel bg-black/50 px-5 py-2 rounded-full text-[10px] uppercase font-bold text-zinc-300 backdrop-blur-xl border-white/5">{tag}</div>
                    ))}
                </div>
                <div className="flex gap-3">
                    {STATIC_TAGS.slice(3).map(tag => (
                        <div key={tag} className="glass-panel bg-black/50 px-5 py-2 rounded-full text-[10px] uppercase font-bold text-zinc-300 backdrop-blur-xl border-white/5">{tag}</div>
                    ))}
                </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}