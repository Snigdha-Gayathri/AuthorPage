import { motion } from "framer-motion";
import { navItems } from "../data/siteContent";

export default function StickyNav({ scrolled, onAboutClick }) {
  const homeNavItem = navItems.find((item) => item.label === "Home");
  const secondaryNavItems = navItems.filter((item) => item.label !== "Home");

  const handleAboutSelect = (event) => {
    event.preventDefault();
    onAboutClick?.();
    window.setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 30);
  };

  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto mt-3 w-[94%] max-w-6xl rounded-3xl border border-white/45 bg-transparent px-3 py-3 backdrop-blur-md md:mt-4 md:rounded-full md:px-6">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#home"
            className={`author-name font-serif text-xs tracking-[0.18em] uppercase sm:text-sm sm:tracking-[0.22em] ${
              scrolled ? "author-name-on-pale" : "author-name-on-dodger"
            }`}
          >
            Snigdha Gayathri
          </a>

          <div className="hidden items-center gap-3 md:flex">
            {homeNavItem ? (
              <a
                href={homeNavItem.href}
                className="nav-adaptive-text rounded-full px-3 py-2 text-xs uppercase tracking-[0.18em] transition hover:opacity-80"
              >
                {homeNavItem.label}
              </a>
            ) : null}

            <a
              href="#books"
              className="nav-adaptive-text rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:opacity-80 hover:bg-white/10"
            >
              Books
            </a>

            {secondaryNavItems.map((item) => (
              item.label === "About" ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleAboutSelect}
                  className="nav-adaptive-text rounded-full px-3 py-2 text-xs uppercase tracking-[0.18em] transition hover:opacity-80"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="nav-adaptive-text rounded-full px-3 py-2 text-xs uppercase tracking-[0.18em] transition hover:opacity-80"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>

        <div className="mt-2 flex gap-3 overflow-x-auto pb-1 md:hidden">
          {homeNavItem ? (
            <a
              href={homeNavItem.href}
              className="nav-adaptive-text shrink-0 rounded-full border border-white/35 px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] transition hover:opacity-80"
            >
              {homeNavItem.label}
            </a>
          ) : null}

          <a
            href="#books"
            className="nav-adaptive-text shrink-0 rounded-full px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] transition hover:opacity-80 hover:bg-white/10"
          >
            Books
          </a>

          {secondaryNavItems.map((item) => (
            item.label === "About" ? (
              <a
                key={item.href}
                href={item.href}
                onClick={handleAboutSelect}
                className="nav-adaptive-text shrink-0 rounded-full border border-white/35 px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] transition hover:opacity-80"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="nav-adaptive-text shrink-0 rounded-full border border-white/35 px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] transition hover:opacity-80"
              >
                {item.label}
              </a>
            )
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
