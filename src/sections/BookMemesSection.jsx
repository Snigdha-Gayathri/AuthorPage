import { useRef } from "react";
import SectionReveal from "../components/SectionReveal";
import { bookMemesGallery } from "../data/siteContent";

export default function BookMemesSection() {
  const ribbonRef = useRef(null);
  const visibleMemes = bookMemesGallery.filter((_, index) => index !== 2);

  const pushRibbon = (direction) => {
    if (!ribbonRef.current) return;
    const viewport = ribbonRef.current;
    const amount = Math.max(viewport.clientWidth * 0.72, 260);
    viewport.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section id="book-memes" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="font-halimum text-center text-4xl text-candle-text md:text-5xl">Book Memes</h2>
          <p className="spoiler-alert-red mt-2 text-center text-[0.62rem] uppercase tracking-[0.26em] md:text-[0.66rem]">
            spoiler alert
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm italic text-candle-muted md:text-base">
            Meme ribbon. Swipe left to reveal more.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <div className="mx-auto mt-12 max-w-6xl rounded-[2rem] border border-white/90 bg-gradient-to-br from-[#eff6ff]/92 via-[#dbeafe]/92 to-[#bfdbfe]/92 p-3 shadow-[0_0_44px_rgba(2,24,109,0.72)] md:p-4">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-[#1e90ff]/75 bg-white/82 p-2 md:p-2.5">
              <div ref={ribbonRef} className="memes-scroll" aria-label="Book memes ribbon">
                {visibleMemes.map((image, index) => (
                  <article key={image} className="meme-item">
                    <img src={image} alt={`Book meme ${index + 1}`} loading={index < 2 ? "eager" : "lazy"} />
                  </article>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between px-1">
                <button
                  type="button"
                  onClick={() => pushRibbon(-1)}
                  className="rounded-full border border-candle-gold/45 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.16em] text-candle-text transition hover:border-candle-gold hover:bg-[#dbeafe]"
                  aria-label="Push meme ribbon right"
                >
                  Prev
                </button>

                <p className="text-[0.64rem] uppercase tracking-[0.22em] text-candle-muted/95 md:text-xs">Swipe or drag left to reveal more</p>

                <button
                  type="button"
                  onClick={() => pushRibbon(1)}
                  className="rounded-full border border-candle-gold/45 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.16em] text-candle-text transition hover:border-candle-gold hover:bg-[#dbeafe]"
                  aria-label="Push meme ribbon left"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}