import { motion } from "framer-motion";
import { navItems } from "../data/siteContent";

export default function StickyNav({ scrolled }) {
  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`mx-auto mt-3 w-[94%] max-w-6xl rounded-3xl border border-white/10 px-3 py-3 md:mt-4 md:rounded-full md:px-6 ${
          scrolled ? "bg-[#1a1223]/85 shadow-candle backdrop-blur-xl" : "bg-[#1a1223]/55 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#home" className="font-serif text-xs tracking-[0.18em] text-candle-gold/90 uppercase sm:text-sm sm:tracking-[0.22em]">
            Snigdha Gayathri
          </a>

          <div className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-xs uppercase tracking-[0.18em] text-candle-muted/90 transition hover:text-candle-text"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-2 flex gap-3 overflow-x-auto pb-1 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="shrink-0 rounded-full border border-candle-gold/20 px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-candle-muted/95 transition hover:text-candle-text"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
