"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Filter, ChevronDown, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- Mock Data (Expanded) ---
const PRODUCTS = [
  {
    id: 1,
    name: "Eames Molded",
    price: "$450",
    category: "Seating",
    material: "Wood",
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Hans Wegner",
    price: "$820",
    category: "Seating",
    material: "Leather",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
    tag: "New",
  },
  {
    id: 3,
    name: "Rattan Lounge",
    price: "$640",
    category: "Lounge",
    material: "Wood",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0",
    tag: "Limited",
  },
  {
    id: 4,
    name: "Cesca Chair",
    price: "$550",
    category: "Seating",
    material: "Metal",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600",
    tag: "Vintage",
  },
  {
    id: 5,
    name: "Wassily Chair",
    price: "$1200",
    category: "Lounge",
    material: "Leather",
    image:
      "https://images.unsplash.com/photo-1506898667547-42e22a46e125?auto=format&fit=crop&q=80&w=600",
    tag: "Iconic",
  },
  {
    id: 6,
    name: "Minimal Stool",
    price: "$220",
    category: "Seating",
    material: "Wood",
    image:
      "https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    tag: "Minimal",
  },
];

const FILTERS = {
  Category: ["All", "Seating", "Lounge", "Lighting"],
  Material: ["All", "Wood", "Leather", "Metal"],
};

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
    <div className="glass-panel rounded-full px-2 py-2 flex items-center justify-between w-full max-w-6xl pointer-events-auto">
      <Link href="/" className="hidden md:flex px-6">
        <span className="text-xl font-bold tracking-tighter text-editorial text-white">
          FYNIX.
        </span>
      </Link>
      <div className="flex gap-1 bg-black/20 rounded-full p-1 border border-white/5">
        {[
          { name: "Home", path: "/" },
          { name: "Product", path: "/shop" },
          { name: "About", path: "#" },
          { name: "Pricing", path: "#" },
        ].map((item, i) => (
          <Link
            key={item.name}
            href={item.path}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${item.name === "Product" ? "bg-zinc-800 text-white shadow-lg" : "text-zinc-400 hover:text-white"}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3 px-2">
        <Link
          href="/cart"
          className="bg-zinc-100 hover:bg-white text-black px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 transition-transform hover:scale-105"
        >
          Cart (0)
        </Link>
      </div>
    </div>
  </nav>
);

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter(
          (p) => p.category === activeCategory || p.material === activeCategory,
        );

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white selection:bg-orange-500/30 pb-20">
      <Navbar />

      {/* Cinematic Header */}
      <section className="pt-40 pb-12 px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12"
        >
          <div>
            <span className="text-zinc-500 text-sm uppercase tracking-widest mb-2 block">
              The Collection
            </span>
            <h1 className="text-5xl md:text-7xl text-editorial">
              All Products<span className="text-orange-500">.</span>
            </h1>
          </div>
          <p className="text-zinc-400 max-w-sm text-right mt-4 md:mt-0">
            Curated pieces for the modern home. <br />
            Designed to last a lifetime.
          </p>
        </motion.div>
      </section>

      <section className="px-4 md:px-8 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Sticky Filters Sidebar */}
        <div className="hidden md:block col-span-3 sticky top-32 h-fit space-y-8">
          {Object.entries(FILTERS).map(([key, options]) => (
            <div key={key}>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-zinc-300">
                {key}
              </h3>
              <div className="space-y-2">
                {options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setActiveCategory(opt)}
                    className={`flex items-center justify-between w-full text-left text-sm py-1 transition-colors ${activeCategory === opt ? "text-white font-semibold" : "text-zinc-500 hover:text-zinc-300"}`}
                  >
                    {opt}
                    {activeCategory === opt && <Check size={14} />}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="col-span-1 md:col-span-9">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
          >
            {filteredProducts.map((product, i) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/5 mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/20 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details
                      </div>
                    </div>
                    {/* Tag */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-white">
                      {product.tag}
                    </div>
                  </div>

                  <div className="flex justify-between items-start px-2">
                    <div>
                      <h3 className="text-lg text-editorial">{product.name}</h3>
                      <p className="text-zinc-500 text-sm">
                        {product.category}
                      </p>
                    </div>
                    <span className="text-white font-medium">
                      {product.price}
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
