import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";

export default function NewsletterSection() {
  return (
    <section id="contact" className="px-6 py-24 md:py-28">
      <SectionReveal className="mx-auto max-w-4xl rounded-[2rem] border border-candle-gold/25 bg-gradient-to-br from-[#eff6ff] via-[#dbeafe] to-[#bfdbfe] px-6 py-12 text-center shadow-candle md:px-12">
        <h2 className="font-serif text-3xl text-candle-text md:text-4xl">Newsletter</h2>
        <p className="mx-auto mt-5 max-w-2xl text-candle-muted">
          Join my newsletter for updates on future releases.
        </p>

        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email"
            className="h-12 flex-1 rounded-full border border-candle-gold/25 bg-white/80 px-5 text-candle-text placeholder:text-candle-muted/70 outline-none transition focus:border-candle-gold/60"
          />
          <motion.button
            type="submit"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="h-12 rounded-full bg-gradient-to-r from-[#ffffff] via-[#dbeafe] to-[#bfdbfe] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-candle-text transition hover:shadow-glow"
          >
            Subscribe
          </motion.button>
        </form>
      </SectionReveal>
    </section>
  );
}
