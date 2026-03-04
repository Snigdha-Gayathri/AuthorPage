import { motion } from "framer-motion";
import { useMemo } from "react";

export default function AtmosphereLayer() {
  const lights = useMemo(
    () =>
      Array.from({ length: 8 }, (_, index) => ({
        id: index,
        left: `${8 + Math.random() * 84}%`,
        delay: Math.random() * 7,
        duration: 7 + Math.random() * 7,
      })),
    []
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20" />
      {lights.map((light) => (
        <motion.span
          key={light.id}
          className="absolute h-2 w-2 rounded-full bg-candle-ember/40 blur-[1px]"
          style={{ left: light.left, bottom: "-8%" }}
          animate={{ y: [0, -260], opacity: [0, 0.25, 0.1, 0] }}
          transition={{
            repeat: Infinity,
            duration: light.duration,
            delay: light.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
