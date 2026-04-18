import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionReveal from "../components/SectionReveal";
import { bookArtGallery } from "../data/siteContent";

const swipeConfidenceThreshold = 9000;

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 180 : -180,
    opacity: 0,
    scale: 0.94,
    rotate: direction > 0 ? 1.8 : -1.8,
    filter: "blur(6px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
  },
  exit: (direction) => ({
    x: direction < 0 ? 180 : -180,
    opacity: 0,
    scale: 0.96,
    rotate: direction < 0 ? 1.2 : -1.2,
    filter: "blur(4px)",
  }),
};

function swipePower(offset, velocity) {
  return Math.abs(offset) * velocity;
}

function wrapIndex(index, length) {
  return ((index % length) + length) % length;
}

export default function BookArtSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrapIndex(page, bookArtGallery.length);

  const paginate = (newDirection) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  return (
    <section id="book-art" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="text-center font-serif text-4xl text-candle-text md:text-5xl">Book Art</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm italic text-candle-muted md:text-base">
            Swipe across the artwork to move through all 11 visuals.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-candle-gold/35 bg-gradient-to-br from-[#261833]/85 via-[#21162d]/90 to-[#1a1224]/85 p-4 shadow-[0_24px_56px_rgba(8,6,12,0.55)] md:p-6">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-candle-gold/25 bg-[#140f1b]/90">
              <div className="relative aspect-[16/10] w-full touch-pan-y">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={page}
                    src={bookArtGallery[imageIndex]}
                    alt={`Book art ${imageIndex + 1}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 290, damping: 32 },
                      opacity: { duration: 0.42 },
                      scale: { duration: 0.42 },
                      rotate: { duration: 0.42 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.22}
                    onDragEnd={(_event, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                    className="absolute inset-0 h-full w-full cursor-grab select-none object-contain active:cursor-grabbing"
                  />
                </AnimatePresence>
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#140f1b]/55 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#140f1b]/78 via-[#140f1b]/50 to-transparent px-4 pb-4 pt-8 md:px-5">
                <button
                  type="button"
                  onClick={() => paginate(-1)}
                  className="pointer-events-auto rounded-full border border-candle-gold/45 bg-[#1a1324]/82 px-4 py-2 text-xs uppercase tracking-[0.16em] text-candle-text transition hover:border-candle-gold hover:bg-[#251932]"
                  aria-label="Show previous art"
                >
                  Prev
                </button>

                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-candle-muted/95 md:text-xs">
                  {imageIndex + 1} / {bookArtGallery.length}
                </p>

                <button
                  type="button"
                  onClick={() => paginate(1)}
                  className="pointer-events-auto rounded-full border border-candle-gold/45 bg-[#1a1324]/82 px-4 py-2 text-xs uppercase tracking-[0.16em] text-candle-text transition hover:border-candle-gold hover:bg-[#251932]"
                  aria-label="Show next art"
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