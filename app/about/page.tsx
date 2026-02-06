"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
    <div className="glass-panel rounded-full px-2 py-2 flex items-center justify-between w-full max-w-6xl pointer-events-auto">
      <Link href="/" className="hidden md:flex px-6">
        <span className="text-xl font-bold tracking-tighter text-editorial text-white">FYNIX.</span>
      </Link>
      <div className="flex gap-1 bg-black/20 rounded-full p-1 border border-white/5">
        {[{name: "Home", path: "/"}, {name: "Product", path: "/shop"}, {name: "About", path: "/about"}, {name: "Pricing", path: "#"}].map((item, i) => (
          <Link 
            key={item.name} 
            href={item.path}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${item.name === 'About' ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-400 hover:text-white'}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3 px-2">
         {/* Placeholder for layout balance */}
         <div className="w-10" />
      </div>
    </div>
  </nav>
);

export default function About() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white selection:bg-orange-500/30 pb-20">
      <Navbar />

      {/* Hero Text */}
      <section className="pt-48 pb-24 px-4 md:px-8 max-w-[1600px] mx-auto text-center">
        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-9xl text-editorial leading-[0.9] mb-8"
        >
            WE DON'T JUST<br />MAKE CHAIRS.
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto"
        >
            We sculpt moments of stillness in a chaotic world. 
            Fynix is born from the belief that your environment shapes your mind.
        </motion.p>
      </section>

      {/* The Atelier Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-[80vh] w-full">
        <div className="relative h-full min-h-[400px]">
             <Image 
                src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80&w=1000"
                alt="Craftsman"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
        </div>
        <div className="flex flex-col justify-center p-12 md:p-24 bg-zinc-900 border-y border-white/5">
            <span className="text-orange-500 uppercase tracking-widest text-xs font-bold mb-4">The Process</span>
            <h2 className="text-4xl md:text-6xl text-editorial mb-6">Slow Design.<br/>Lasting Impact.</h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
                In an era of fast furniture, we choose the long road. Every piece of wood is hand-selected. 
                Every joint is tested. We work with third-generation artisans in Kyoto and Copenhagen 
                to merge Scandinavian minimalism with Japanese precision.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-8 border-t border-white/10 pt-8">
                <div>
                    <span className="block text-3xl font-bold text-white mb-1">100%</span>
                    <span className="text-xs text-zinc-500 uppercase">Sustainable Wood</span>
                </div>
                <div>
                    <span className="block text-3xl font-bold text-white mb-1">50h+</span>
                    <span className="text-xs text-zinc-500 uppercase">Per Chair</span>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 text-center">
          <h2 className="text-4xl text-editorial mb-8">Ready to elevate your space?</h2>
          <Link href="/shop" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
             Explore the Collection <ArrowRight size={18} />
          </Link>
      </section>
    </main>
  );
}