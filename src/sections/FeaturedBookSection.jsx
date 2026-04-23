import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import { blurb, buyUrl, media, tropes } from "../data/siteContent";

export default function FeaturedBookSection() {
  return (
    <section id="book" className="px-6 py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <SectionReveal>
          <div className="mx-auto w-full max-w-xs -rotate-6 rounded-3xl border border-candle-gold/25 bg-gradient-to-br from-[#eff6ff] to-[#bfdbfe] p-5 shadow-candle md:max-w-sm">
            <div className="aspect-[2/3] rounded-2xl border border-candle-gold/20 bg-white/90 p-6">
              <div
                className="flex h-full flex-col justify-between rounded-xl border border-dashed border-candle-gold/35 bg-center bg-cover p-6 text-center"
                style={{ backgroundImage: `linear-gradient(rgba(8, 26, 77, 0.24), rgba(8, 26, 77, 0.24)), url(${media.bookCover})` }}
              />
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.06}>
          <h2 className="font-serif text-4xl text-candle-text md:text-5xl">Ashes and Algorithms</h2>
          <p className="mt-6 whitespace-pre-line text-[1.03rem] leading-relaxed text-candle-muted">{blurb}</p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {tropes.map((trope) => (
              <span
                key={trope}
                className="rounded-full border border-candle-gold/30 bg-white/80 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-candle-muted"
              >
                {trope}
              </span>
            ))}
          </div>
          <motion.a
            id="buy"
            href={buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-[#ffffff] via-[#dbeafe] to-[#bfdbfe] px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-candle-text shadow-candle transition hover:shadow-glow"
          >
            Buy Ashes &amp; Algorithms
          </motion.a>
        </SectionReveal>
      </div>
    </section>
  );
}
