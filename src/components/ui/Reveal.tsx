"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  once = true,
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({
  text,
  className,
  delay = 0,
  as: Tag = "p",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "p" | "h1" | "h2" | "h3" | "span";
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="line-reveal mr-[0.28em] last:mr-0">
          <motion.span
            initial={reduce ? false : { y: "110%", opacity: 0 }}
            whileInView={reduce ? undefined : { y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-6% 0px" }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.045,
              ease,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
