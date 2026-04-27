import SectionReveal from "../components/SectionReveal";

const bookstagramUrl = "https://www.instagram.com/snigdhagayathriwrites?igsh=eDBhOG90ZWN6ODFk";

export default function BookstagramSection() {
  return (
    <section id="bookstagram" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="font-halimum text-center text-4xl text-candle-text md:text-5xl">Bookstagram</h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-[1.02rem] leading-relaxed text-candle-muted md:text-[1.08rem]">
            Follow my Bookstagram for a deeper look into the world of Ashes and Algorithms — where you’ll find
            exclusive writing snippets, behind-the-scenes moments, and the quiet details that didn’t make it onto
            the page but still live in the story.

            Expect carefully curated moodboards that capture the essence of Myra and Aaron, cinematic character
            reels that bring their intensity to life, and aesthetic cover moments that reflect the soul of the book.

            I also share updates, teasers, and early announcements for what’s coming next — including Blood and
            Bullets and Crimes and Calculations — so you’ll always be the first to step into the next story before
            it unfolds.
          </p>
          <div className="mt-8 text-center">
            <a
              href={bookstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-[#1e90ff]/55 bg-white/82 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-candle-text shadow-[0_0_20px_rgba(30,144,255,0.28)] transition hover:border-[#1e90ff] hover:shadow-[0_0_34px_rgba(30,144,255,0.5)]"
            >
              Visit Bookstagram
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
