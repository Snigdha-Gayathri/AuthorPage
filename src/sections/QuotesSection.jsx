import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import { bookQuotes } from "../data/siteContent";

export default function QuotesSection() {
  return (
    <section id="quotes" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="text-center font-serif text-4xl text-candle-text md:text-5xl">Quote Showcase</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm italic text-candle-muted md:text-base">
            Only the MMC&apos;s quotes because women don&apos;t need to advocate for themselves 😉
          </p>
        </SectionReveal>

        <div className="mt-12 space-y-10 md:mt-14 md:space-y-16">
          {bookQuotes.map((quote, index) => (
            <SectionReveal key={index} delay={Math.min(index * 0.015, 0.14)}>
              <motion.article
                className="mx-auto max-w-4xl rounded-3xl border border-candle-gold/45 bg-[#24182c]/22 px-4 py-3 text-center transition-all duration-300"
                initial={{ boxShadow: "0 0 0 rgba(213,178,119,0)", backgroundColor: "rgba(36,24,44,0.22)" }}
                whileInView={{
                  boxShadow: ["0 0 0 rgba(213,178,119,0)", "0 0 16px rgba(213,178,119,0.22)", "0 0 8px rgba(213,178,119,0.14)"],
                  backgroundColor: ["rgba(36,24,44,0.22)", "rgba(36,24,44,0.30)", "rgba(36,24,44,0.22)"],
                }}
                whileHover={{
                  boxShadow: "0 0 26px rgba(230,182,87,0.72), 0 0 50px rgba(223,166,55,0.55), inset 0 0 18px rgba(248,216,138,0.22)",
                  borderColor: "rgba(243, 193, 87, 0.95)",
                  backgroundColor: "rgba(48,33,22,0.52)",
                  y: -3,
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
