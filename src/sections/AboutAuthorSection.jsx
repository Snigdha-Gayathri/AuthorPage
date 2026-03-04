import SectionReveal from "../components/SectionReveal";
import { media } from "../data/siteContent";

const instagramLink = "https://www.instagram.com/scintillating.snigdha/?hl=en";
const githubLink = "https://github.com/Snigdha-Gayathri";
const linkedinLink = "https://www.linkedin.com/in/snigdha-gayathri";

export default function AboutAuthorSection() {
  return (
    <section id="about" className="px-6 py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.82fr_1.18fr] md:items-center">
        <SectionReveal>
          <div className="mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] border border-candle-gold/25 bg-gradient-to-br from-[#26182f] to-[#4b2e44] p-4 shadow-candle">
            <div
              className="flex h-full items-center justify-center rounded-[1.6rem] border border-dashed border-candle-gold/35 bg-cover bg-center px-6 text-center font-serif text-lg text-candle-muted"
              style={{ backgroundImage: `linear-gradient(rgba(27, 19, 37, 0.4), rgba(27, 19, 37, 0.4)), url(${media.authorPhoto})` }}
            />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.07}>
          <h2 className="font-serif text-4xl text-candle-text md:text-5xl">Snigdha Gayathri</h2>
          <p className="mt-2 text-sm font-medium tracking-[0.14em] text-candle-gold/85 uppercase">
            Snigdha Gayathri Mandapati
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-candle-muted/75">
            Engineer of morally grey devotion from Andhra Pradesh, India.
          </p>
          <p className="mt-6 max-w-2xl text-[1.03rem] leading-relaxed text-candle-muted">
            Snigdha Gayathri is a romance author who blends artificial intelligence with obsessive devotion.
          </p>
          <p className="mt-5 text-candle-muted">More stories coming soon.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-candle-gold/30 bg-[#23172d]/70 px-5 py-2.5 text-sm font-medium text-candle-text transition hover:border-candle-gold/50 hover:shadow-glow"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-candle-gold/40 text-candle-gold">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.95 1.65a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                </svg>
              </span>
              Instagram
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-candle-gold/30 bg-[#23172d]/70 px-5 py-2.5 text-sm font-medium text-candle-text transition hover:border-candle-gold/50 hover:shadow-glow"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-candle-gold/40 text-candle-gold">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.21.68-.48 0-.24-.01-1.04-.01-1.88-2.5.46-3.15-.61-3.35-1.17-.11-.28-.57-1.17-.97-1.41-.33-.18-.79-.63-.01-.64.73-.01 1.25.67 1.42.95.83 1.4 2.15 1.01 2.68.77.08-.6.32-1.01.58-1.24-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.54 9.54 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.82-2.34 4.66-4.57 4.91.36.31.67.9.67 1.83 0 1.32-.01 2.38-.01 2.71 0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
              </span>
              GitHub
            </a>

            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-candle-gold/30 bg-[#23172d]/70 px-5 py-2.5 text-sm font-medium text-candle-text transition hover:border-candle-gold/50 hover:shadow-glow"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-candle-gold/40 text-candle-gold">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.3 6.92 1.96 1.96 0 0 0 5.25 3ZM20 13.3c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.09-3.38 1.86V8.5H8.94c.04 1.04 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.12-.92.27-.68.89-1.39 1.94-1.39 1.37 0 1.91 1.05 1.91 2.58V20H20v-6.7Z" />
                </svg>
              </span>
              LinkedIn
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
