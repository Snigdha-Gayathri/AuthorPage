import { useRef } from "react";
import SectionReveal from "../components/SectionReveal";
import { bookArtGallery } from "../data/siteContent";

export default function BookArtSection() {
  const ribbonRef = useRef(null);

  const pushRibbon = (direction) => {
    if (!ribbonRef.current) return;
    const viewport = ribbonRef.current;
    const amount = Math.max(viewport.clientWidth * 0.78, 320);
    viewport.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section id="book-art" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="text-center font-serif text-4xl text-candle-text md:text-5xl">Book Art</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm italic text-candle-muted md:text-base">
            A wide ribbon of artwork. Swipe left to reveal more.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <div className="mx-auto mt-12 max-w-6xl rounded-[2rem] border border-candle-gold/35 bg-gradient-to-br from-[#261833]/85 via-[#21162d]/90 to-[#1a1224]/85 p-4 shadow-[0_24px_56px_rgba(8,6,12,0.55)] md:p-6">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-candle-gold/25 bg-[#140f1b]/92 px-2 py-5 md:px-3">
              <div
                ref={ribbonRef}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                aria-label="Book art ribbon"
              >
                {bookArtGallery.map((image, index) => (
                  <article
                    key={image}
                    className="w-[84vw] max-w-[620px] shrink-0 snap-center overflow-hidden rounded-2xl border border-candle-gold/30 bg-[#1a1224] sm:w-[70vw] md:w-[48vw] lg:w-[39vw]"
                  >
                    <div className="aspect-[16/10] w-full bg-black/25">
                      <img
                        src={image}
                        alt={`Book art ${index + 1}`}
                        className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    <p className="border-t border-candle-gold/20 px-4 py-2 text-[0.62rem] uppercase tracking-[0.2em] text-candle-muted/90 md:text-[0.68rem]">
                      Art {index + 1}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between px-1">
                <button
                  type="button"
                  onClick={() => pushRibbon(-1)}
                  className="rounded-full border border-candle-gold/45 bg-[#1a1324]/82 px-4 py-2 text-xs uppercase tracking-[0.16em] text-candle-text transition hover:border-candle-gold hover:bg-[#251932]"
                  aria-label="Push ribbon right"
                >
                  Prev
                </button>

                <p className="text-[0.64rem] uppercase tracking-[0.22em] text-candle-muted/95 md:text-xs">Swipe or drag left to reveal more</p>

                <button
                  type="button"
                  onClick={() => pushRibbon(1)}
                  className="rounded-full border border-candle-gold/45 bg-[#1a1324]/82 px-4 py-2 text-xs uppercase tracking-[0.16em] text-candle-text transition hover:border-candle-gold hover:bg-[#251932]"
                  aria-label="Push ribbon left"
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