import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import { bookQuotes } from "../data/siteContent";

export default function QuotesSection() {
  return (
    <section id="quotes" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="font-halimum text-center text-4xl text-candle-text md:text-5xl">Quote Showcase</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm italic text-candle-muted md:text-base">
            Only the MMC&apos;s quotes because women don&apos;t need to advocate for themselves 😉
          </p>
        </SectionReveal>

        <div className="mt-12 space-y-10 md:mt-14 md:space-y-16">
          {bookQuotes.map((quote, index) => (
            <SectionReveal key={index} delay={Math.min(index * 0.015, 0.14)}>
              <motion.article
                className="mx-auto max-w-4xl rounded-3xl border border-white/90 bg-white/40 px-4 py-3 text-center shadow-[0_0_30px_rgba(2,24,109,0.75)] transition-all duration-300"
                initial={{ backgroundColor: "rgba(255,255,255,0.35)" }}
                whileInView={{
                  backgroundColor: ["rgba(255,255,255,0.35)", "rgba(219,234,254,0.5)", "rgba(255,255,255,0.35)"],
                  boxShadow: [
                    "0 0 26px rgba(2,24,109,0.72)",
                    "0 0 54px rgba(2,24,109,0.95)",
                    "0 0 26px rgba(2,24,109,0.72)",
                  ],
                }}
                whileHover={{
                  backgroundColor: "rgba(191,219,254,0.62)",
                  boxShadow: "0 0 62px rgba(2,24,109,0.98)",
                  scale: 1.012,
                }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <p
                  className="text-xl leading-relaxed text-candle-text md:text-3xl"
                  style={{ fontFamily: "Times New Roman, Times, serif", fontStyle: "italic", fontWeight: 400 }}
                >
                  “{quote}”
                </p>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
