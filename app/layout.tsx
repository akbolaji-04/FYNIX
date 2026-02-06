import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ['400', '500', '600', '700', '800', '900'] 
});

export const metadata: Metadata = {
  title: "FYNIX | Modern Living",
  description: "Effortless comfort. Lasting quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} bg-[#0f0f0f] text-zinc-100 antialiased selection:bg-orange-900 selection:text-white flex flex-col min-h-screen`}>
        
        {/* Main Content */}
        <div className="flex-grow">
          {children}
        </div>

        {/* --- TRADEMARK FOOTER --- */}
        <footer className="border-t border-white/5 py-12 mt-auto">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Brand / Copyright */}
            <div className="text-center md:text-left">
              <span className="text-xl font-bold tracking-tighter text-editorial text-white block">FYNIX.</span>
              <p className="text-xs text-zinc-600 mt-1">© 2026 Fynix Interiors. All rights reserved.</p>
            </div>

            {/* Links (Decorative) */}
            <div className="flex gap-6 text-xs text-zinc-500 font-medium uppercase tracking-wider">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>

            {/* THE SIGNATURE */}
            <div className="text-center md:text-right">
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Designed & Developed by</p>
              <a 
                href="https://github.com/akbolaji-04" target="blank"
                className="text-sm font-medium text-white hover:text-orange-400 transition-colors border-b border-transparent hover:border-orange-400 pb-0.5"
              >
                [ Abolaji Akorede ]
              </a>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}