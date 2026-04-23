import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import { media } from "../data/siteContent";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-20 pt-32 md:px-6 md:pb-28 md:pt-44"
      style={{
        background:
          "radial-gradient(900px 440px at 24% 28%, rgba(255,255,255,0.22), transparent 58%), radial-gradient(760px 420px at 86% 26%, rgba(10,31,92,0.18), transparent 60%)",
      }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <SectionReveal>
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-candle-muted/80">About The Author</p>
          <h1 className="text-metallic-gold font-serif text-4xl leading-tight md:text-6xl lg:text-7xl">
            Snigdha Gayathri
            <br />
            Mandapati
          </h1>
          <p className="mt-6 max-w-3xl whitespace-pre-line text-[1.03rem] leading-relaxed text-candle-muted md:text-[1.08rem]">
            {`I’m Snigdha Gayathri Mandapati — a new author who blends artificial intelligence with obsessive devotion.

With a background in AI & Machine Learning, I build my stories the way I build systems: layered, intentional, and precise. I’m drawn to morally grey men, emotionally resilient women, and love that feels consuming rather than convenient.

I don’t write softness for the sake of it. I write intensity. Strategy. Possession. The kind of devotion that is terrifying in its depth and beautiful in its certainty.`}
          </p>
          <motion.a
            href="#book"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-[#ffffff] via-[#dbeafe] to-[#bfdbfe] px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-candle-text shadow-candle transition hover:shadow-glow"
          >
            Explore The Book
          </motion.a>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] border border-candle-gold/25 bg-gradient-to-br from-[#eff6ff] via-[#dbeafe] to-[#bfdbfe] p-4 shadow-candle">
            <div className="h-full rounded-[1.7rem] border border-candle-gold/20 bg-[#ffffff]/88 p-6">
              <div
                className="flex h-full items-center justify-center rounded-[1.4rem] border border-dashed border-candle-gold/35 bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(8, 26, 77, 0.2), rgba(8, 26, 77, 0.2)), url(${media.authorPhoto})` }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] shadow-[0_0_55px_rgba(10,31,92,0.2)]" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
