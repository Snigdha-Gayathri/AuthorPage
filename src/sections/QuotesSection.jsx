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
                className="mx-auto max-w-4xl rounded-3xl px-4 py-3 text-center transition-all duration-300"
                initial={{ boxShadow: "0 0 0 rgba(255,140,0,0)", backgroundColor: "rgba(0,0,0,0)" }}
                whileInView={{
                  boxShadow: [
                    "0 0 0 rgba(255,140,0,0)",
                    "0 0 28px rgba(255,140,0,0.48)",
                    "0 0 12px rgba(255,140,0,0.22)",
                  ],
                  backgroundColor: ["rgba(0,0,0,0)", "rgba(255,140,0,0.1)", "rgba(0,0,0,0)"],
                }}
                whileHover={{
                  boxShadow: "0 0 30px rgba(255,140,0,0.55)",
                  backgroundColor: "rgba(255,140,0,0.14)",
                }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <p
                  className="text-xl italic leading-relaxed text-candle-text md:text-3xl"
                  style={{ fontFamily: "Times New Roman, Times, serif" }}
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
