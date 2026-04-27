import { useEffect, useRef } from "react";

export default function BookTrail() {
  const containerRef = useRef(null);
  const booksRef = useRef([]);
  const idRef = useRef(0);
  const bookEmojis = ["📖", "📚", "📕", "📗", "📘", "📙"];

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let frameCounter = 0;

    const handleMouseMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      frameCounter++;

      // Spawn a book every few frames
      if (frameCounter % 3 === 0) {
        const id = idRef.current++;
        const bookContainer = document.createElement("div");
        bookContainer.style.position = "fixed";
        bookContainer.style.left = lastX - 10 + "px";
        bookContainer.style.top = lastY - 10 + "px";
        bookContainer.style.pointerEvents = "none";
        bookContainer.style.zIndex = "9999";
        bookContainer.style.opacity = "1";
        bookContainer.style.fontSize = "20px";
        bookContainer.style.transform = "rotate(" + (Math.random() * 30 - 15) + "deg)";
        bookContainer.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        bookContainer.textContent = bookEmojis[Math.floor(Math.random() * bookEmojis.length)];

        if (containerRef.current) {
          containerRef.current.appendChild(bookContainer);
          booksRef.current.push({ id, element: bookContainer });

          // Trigger animation
          setTimeout(() => {
            bookContainer.style.opacity = "0";
            bookContainer.style.transform = "translateY(-20px) scale(0.5)";
          }, 10);

          // Remove after animation completes
          setTimeout(() => {
            bookContainer.remove();
            booksRef.current = booksRef.current.filter((b) => b.id !== id);
          }, 600);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={containerRef} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 }} />;
}
