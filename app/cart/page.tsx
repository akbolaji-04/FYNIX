"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Trash2, Minus, Plus, CreditCard, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- Mock Cart Data ---
const CART_ITEMS = [
  { id: 1, name: "Eames Molded", price: 450, quantity: 1, material: "Walnut", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "Rattan Lounge", price: 640, quantity: 2, material: "Natural", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0" },
];

export default function Cart() {
  const subtotal = CART_ITEMS.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping luxury
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white selection:bg-orange-500/30">
      
      {/* Minimal Header */}
      <nav className="flex items-center justify-between p-6 md:px-12 border-b border-white/5">
        <Link href="/shop" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={20} /> <span className="text-sm font-medium">Continue Shopping</span>
        </Link>
        <span className="text-xl font-bold tracking-tighter text-editorial">FYNIX.</span>
        <div className="w-24"></div> 
      </nav>

      <section className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 p-6 md:p-12">
        
        {/* Left: Cart Items */}
        <div className="lg:col-span-8 space-y-8">
            <h1 className="text-4xl text-editorial mb-8">Your Selection <span className="text-zinc-500 text-2xl">({CART_ITEMS.length})</span></h1>
            
            <div className="space-y-6">
                {CART_ITEMS.map((item, i) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-6 p-6 bg-zinc-900/50 rounded-3xl border border-white/5 items-center"
                    >
                        {/* Image */}
                        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-zinc-800 flex-shrink-0">
                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl text-editorial">{item.name}</h3>
                                <p className="text-sm text-zinc-500">{item.material} Finish</p>
                                <p className="text-sm text-zinc-500 mt-1">${item.price}</p>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-3 bg-black/40 rounded-full px-3 py-1 border border-white/10">
                                    <button className="p-1 hover:text-orange-400"><Minus size={14}/></button>
                                    <span className="text-sm w-4 text-center">{item.quantity}</span>
                                    <button className="p-1 hover:text-orange-400"><Plus size={14}/></button>
                                </div>
                                <span className="text-lg font-medium w-20 text-right">${item.price * item.quantity}</span>
                                <button className="text-zinc-600 hover:text-red-400 transition-colors">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Right: Checkout Summary */}
        <div className="lg:col-span-4">
            <div className="sticky top-12 bg-zinc-900/80 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 space-y-6">
                <h3 className="text-xl text-editorial">Order Summary</h3>
                
                <div className="space-y-4 text-sm text-zinc-400 border-b border-white/10 pb-6">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="text-white">${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping (Premium)</span>
                        <span className="text-green-400">Complimentary</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Taxes</span>
                        <span className="text-white">Calculated at next step</span>
                    </div>
                </div>

                <div className="flex justify-between items-end">
                    <span className="text-zinc-300">Total</span>
                    <span className="text-3xl text-editorial text-white">${total}</span>
                </div>

                <button className="w-full bg-white text-black py-4 rounded-full font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                    Checkout <CreditCard size={18} />
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-600 uppercase tracking-wider">
                    <Lock size={12} /> Secure Encryption
                </div>
            </div>
        </div>

      </section>
    </main>
  );
}