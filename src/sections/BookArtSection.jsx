import { useRef } from "react";
import SectionReveal from "../components/SectionReveal";
import { bookArtGallery } from "../data/siteContent";

export default function BookArtSection() {
  const ribbonRef = useRef(null);

  const pushRibbon = (direction) => {
    if (!ribbonRef.current) return;
    const viewport = ribbonRef.current;
    const amount = Math.max(viewport.clientWidth * 0.72, 260);
    viewport.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section id="book-art" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="font-halimum text-center text-4xl text-candle-text md:text-5xl">Book Art</h2>
          <p className="spoiler-alert-red mt-2 text-center text-[0.62rem] uppercase tracking-[0.26em] md:text-[0.66rem]">
            spoiler alert
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm italic text-candle-muted md:text-base">
            A wide ribbon of artwork. Swipe left to reveal more.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <div className="mx-auto mt-12 max-w-6xl rounded-[2rem] border border-white/90 bg-gradient-to-br from-[#eff6ff]/92 via-[#dbeafe]/92 to-[#bfdbfe]/92 p-3 shadow-[0_0_44px_rgba(2,24,109,0.72)] md:p-4">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-[#1e90ff]/75 bg-white/82 p-2 md:p-2.5">
              <div
                ref={ribbonRef}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                aria-label="Book art ribbon"
              >
                {bookArtGallery.map((image, index) => (
                  <article
                    key={image}
                    className="w-[78vw] max-w-[340px] shrink-0 snap-start rounded-2xl border-2 border-white bg-[#eaf3ff] p-2 shadow-[0_14px_24px_rgba(2,24,109,0.3)] sm:w-[56vw] md:w-[34vw] lg:w-[29vw]"
                  >
                    <div className="aspect-[9/16] w-full overflow-hidden rounded-xl border-2 border-[#1e90ff] bg-[#dbeafe]">
                      <img
                        src={image}
                        alt={`Book art ${index + 1}`}
                        className="h-full w-full object-cover object-center"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    <p className="border-t border-[#1e90ff]/25 px-3 py-2 text-[0.6rem] uppercase tracking-[0.18em] text-candle-muted/90 md:text-[0.66rem]">
                      Art {index + 1}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between px-1">
                <button
                  type="button"
                  onClick={() => pushRibbon(-1)}
                  className="rounded-full border border-candle-gold/45 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.16em] text-candle-text transition hover:border-candle-gold hover:bg-[#dbeafe]"
                  aria-label="Push ribbon right"
                >
                  Prev
                </button>

                <p className="text-[0.64rem] uppercase tracking-[0.22em] text-candle-muted/95 md:text-xs">Swipe or drag left to reveal more</p>

                <button
                  type="button"
                  onClick={() => pushRibbon(1)}
                  className="rounded-full border border-candle-gold/45 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.16em] text-candle-text transition hover:border-candle-gold hover:bg-[#dbeafe]"
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