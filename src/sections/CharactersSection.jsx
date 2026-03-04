import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import { media } from "../data/siteContent";

function CharacterPanel({ name, subtitle, description, tone, image }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35 }}
      className={`h-full rounded-3xl border p-6 md:p-7 shadow-candle transition ${tone}`}
    >
      <div className="grid h-full gap-5 md:grid-cols-[220px_1fr] md:items-start">
        <div className="mx-auto h-[300px] w-full max-w-[220px] overflow-hidden rounded-2xl border border-white/20 bg-[#11151f] shadow-candle md:h-[340px]">
          <img src={image} alt={name} className="h-full w-full object-cover object-top" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-candle-muted/85">{subtitle}</p>
          <h3 className="mt-3 font-serif text-4xl text-candle-text">{name}</h3>
          <p className="mt-5 whitespace-pre-line leading-relaxed text-candle-muted">{description}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function CharactersSection() {
  return (
    <section id="characters" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="text-center font-serif text-4xl text-candle-text md:text-5xl">Meet the Characters</h2>
        </SectionReveal>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          <SectionReveal className="h-full">
            <CharacterPanel
              name="Myra"
              subtitle="AI Engineer"
              image={media.myraPhoto}
              tone="border-candle-gold/45 bg-gradient-to-br from-[#1e90ff] to-[#1a5fb8] hover:shadow-[0_0_28px_rgba(213,178,119,0.3)]"
              description={`Myra is precision in human form — intelligent, analytical, and composed to the point of quiet mystery. She dissects problems before they can touch her, trusts logic over impulse, and believes in systems because they don’t betray.

She wears control like armor. Measures her words. Guards her vulnerabilities behind reason and restraint.

Yet beneath all that discipline lives a heart far softer than she lets the world see — one that feels deeply, loves fiercely, and risks more than her careful exterior would ever suggest.`}
            />
          </SectionReveal>

          <SectionReveal delay={0.08} className="h-full">
            <CharacterPanel
              name="Aaron"
              subtitle="King of Ashes"
              image={media.aaronPhoto}
              tone="border-candle-gold/45 bg-gradient-to-br from-[#2b2d33] to-[#3a3d44] hover:shadow-[0_0_28px_rgba(213,178,119,0.3)]"
              description={`Aaron moves like strategy and ruin — every step measured, every decision deliberate. He isn’t reckless; he’s refined chaos, controlled and intentional. Morally grey not because he lacks a compass, but because he chooses outcomes over innocence. Dangerous by design, sharp at the edges, impossible to misread.

To the world, he is brutality wrapped in composure — a man built to command, to conquer, to dismantle without hesitation.

But to her, he is something else entirely.

Obsession, disciplined into devotion. The same intensity that makes him feared becomes precision when it comes to loving her. What the world calls menace, she calls loyalty. What they see as ruin, she knows as protection.`}
            />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
