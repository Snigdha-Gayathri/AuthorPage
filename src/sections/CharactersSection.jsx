import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import { media } from "../data/siteContent";

function CharacterPanel({ name, subtitle, description, tone, image, backgroundImage, overlay = [0.6, 0.72] }) {
  return (
    <motion.article
      transition={{ duration: 0.3 }}
      className={`character-card card h-full rounded-3xl border p-4 md:p-5 ${tone}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(5, 18, 44, ${overlay[0]}), rgba(5, 18, 44, ${overlay[1]})), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="flex h-full flex-col items-start gap-5">
        <div className="character-image bg-[#0c2138]">
          <img src={image} alt={name} />
        </div>
        <div>
          <h3 className="font-halimum text-4xl text-[#eaf4ff]">{name}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[#c6dbf4]">{subtitle}</p>
          <p className="mt-4 whitespace-pre-line leading-relaxed text-[#eaf4ff]">{description}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function CharactersSection() {
  return (
    <section id="characters" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <h2 className="font-halimum text-center text-4xl text-candle-text md:text-5xl">Meet the Characters</h2>
        </SectionReveal>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          <SectionReveal className="h-full">
            <CharacterPanel
              name="Myra Nishkar"
              subtitle="AI Engineer"
              image={media.myraPhoto}
              tone="myra-card border-[#2b5a84]/95"
              backgroundImage={media.fmcBackground}
              overlay={[0.24, 0.36]}
              description={`Myra is precision in human form — intelligent, analytical, and composed to the point of quiet mystery. She dissects problems before they can touch her, trusts logic over impulse, and believes in systems because they don’t betray.
She wears control like armor. Measures her words. Guards her vulnerabilities behind reason and restraint.
Yet beneath all that discipline lives a heart far softer than she lets the world see — one that feels deeply, loves fiercely, and risks more than her careful exterior would ever suggest. 
But when that control begins to fracture, it doesn’t shatter loudly — it unravels in silence, in the spaces between what she says and what she dares to feel.
She is not untouched by chaos; she simply refuses to let it define her.
And when she finally lets someone past her defenses, it isn’t halfway — it’s absolute, irrevocable, and dangerously real.`}
            />
          </SectionReveal>

          <SectionReveal delay={0.08} className="h-full">
            <CharacterPanel
              name="Aaron Rithan"
              subtitle="King of Ashes"
              image={media.aaronPhoto}
              tone="mmc-card border-[#2b5a84]/95"
              backgroundImage={media.mmcBackground}
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
