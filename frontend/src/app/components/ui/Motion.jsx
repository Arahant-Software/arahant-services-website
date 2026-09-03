"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView, animate } from "framer-motion";

/* ── Shared viewport config ─────────────────────────────────── */
const VIEW = { once: true, margin: "-80px" };

/* ── Primitive variants ─────────────────────────────────────── */
export const variants = {
  fadeUp:    { hidden: { opacity: 0, y: 40 },   visible: { opacity: 1, y: 0 } },
  fadeDown:  { hidden: { opacity: 0, y: -30 },  visible: { opacity: 1, y: 0 } },
  fadeLeft:  { hidden: { opacity: 0, x: -50 },  visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 50 },   visible: { opacity: 1, x: 0 } },
  fadeIn:    { hidden: { opacity: 0 },           visible: { opacity: 1 } },
  scaleUp:   { hidden: { opacity: 0, scale: 0.88 }, visible: { opacity: 1, scale: 1 } },
};

const ease = "easeOut";

/* ── Reusable components ────────────────────────────────────── */

export function FadeUp({ children, delay = 0, duration = 0.6, className }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEW}
      variants={variants.fadeUp}
      transition={{ duration, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, duration = 0.7, className }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEW}
      variants={variants.fadeIn}
      transition={{ duration, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeLeft({ children, delay = 0, duration = 0.7, className }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEW}
      variants={variants.fadeLeft}
      transition={{ duration, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeRight({ children, delay = 0, duration = 0.7, className }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEW}
      variants={variants.fadeRight}
      transition={{ duration, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleUp({ children, delay = 0, duration = 0.5, className }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEW}
      variants={variants.scaleUp}
      transition={{ duration, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Stagger container — wraps children that each use StaggerChild */
export function StaggerContainer({ children, stagger = 0.1, delay = 0, className }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEW}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({ children, className, variant = "fadeUp" }) {
  return (
    <motion.div
      variants={{ ...variants[variant], visible: { ...variants[variant].visible, transition: { duration: 0.6, ease } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Magnetic hover wrapper — element gently follows the cursor within its bounds */
export function MagneticButton({ children, className, strength = 25 }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / strength);
    y.set((e.clientY - rect.top - rect.height / 2) / strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ x: springX, y: springY, display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Animated number counter */
export function Counter({ to, suffix = "", prefix = "", className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const isNumeric = !isNaN(Number(to));
    if (!isNumeric) { ref.current.textContent = prefix + to + suffix; return; }
    const n = Number(to);
    const ctrl = animate(0, n, {
      duration: 2,
      ease: "easeOut",
      onUpdate(v) { ref.current.textContent = prefix + Math.round(v) + suffix; },
    });
    return () => ctrl.stop();
  }, [inView, to, suffix, prefix]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}
