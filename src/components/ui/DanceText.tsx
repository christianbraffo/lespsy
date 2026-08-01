"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type DanceTextProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
};

const container = (delay: number, reduce: boolean | null): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: reduce ? 0 : delay,
      staggerChildren: reduce ? 0 : 0.038,
    },
  },
});

const letter = (reduce: boolean | null): Variants => ({
  hidden: reduce
    ? { opacity: 1, y: 0, rotate: 0, scale: 1 }
    : {
        opacity: 0,
        y: 56,
        rotate: -12,
        scale: 0.55,
      },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: reduce
      ? { duration: 0 }
      : {
          type: "spring",
          stiffness: 520,
          damping: 11,
          mass: 0.55,
        },
  },
});

export function DanceText({
  text,
  className = "",
  delay = 0.2,
  as: Tag = "span",
}: DanceTextProps) {
  const reduce = useReducedMotion();
  const lines = text.split("\n");

  return (
    <Tag className={className} aria-label={text.replace(/\n/g, " ")}>
      {lines.map((line, lineIndex) => (
        <motion.span
          key={`line-${lineIndex}`}
          className="block overflow-visible"
          variants={container(delay + lineIndex * 0.18, reduce)}
          initial="hidden"
          animate="visible"
          aria-hidden
        >
          {Array.from(line).map((char, i) => (
            <motion.span
              key={`${lineIndex}-${i}-${char}`}
              variants={letter(reduce)}
              className="inline-block will-change-transform"
              style={{ whiteSpace: char === " " ? "pre" : undefined }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </Tag>
  );
}

type DanceWordsProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function DanceWords({
  text,
  className = "",
  delay = 0.6,
}: DanceWordsProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const wrap: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: reduce ? 0 : delay,
        staggerChildren: reduce ? 0 : 0.055,
      },
    },
  };

  const word: Variants = {
    hidden: reduce
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 22, rotate: -3 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: reduce
        ? { duration: 0 }
        : { type: "spring", stiffness: 320, damping: 16 },
    },
  };

  return (
    <motion.p
      className={className}
      variants={wrap}
      initial="hidden"
      animate="visible"
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={word}
          className="mr-[0.28em] inline-block last:mr-0"
        >
          {w}
        </motion.span>
      ))}
    </motion.p>
  );
}
