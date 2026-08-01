"use client";

import { type ComponentPropsWithoutRef } from "react";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type SharedProps = {
  label: string;
  variant?: "red" | "white";
  size?: "sm" | "md";
  className?: string;
};

function CtaShell({
  label,
  variant = "red",
  size = "md",
  className = "",
  as: Comp,
  ...props
}: SharedProps & {
  as: "a" | "button";
} & Record<string, unknown>) {
  const isRed = variant === "red";
  const isSm = size === "sm";

  return (
    <Comp
      {...(Comp === "button" ? { type: "submit" } : {})}
      {...props}
      className={[
        "group relative inline-flex items-center overflow-hidden rounded-full",
        isSm
          ? "h-10 min-w-[160px] pr-4 pl-[2.75rem]"
          : "h-12 min-w-[200px] pr-5 pl-[3.25rem]",
        isRed ? "bg-psy-red" : "bg-psy-white",
        className,
      ].join(" ")}
    >
      {/* Disque flèche qui s'étend sur tout le bouton */}
      <span
        aria-hidden
        className={[
          "absolute top-1 bottom-1 left-1 z-0 overflow-hidden rounded-full bg-psy-black transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isSm
            ? "w-8 group-hover:w-[calc(100%-0.5rem)]"
            : "w-10 group-hover:w-[calc(100%-0.5rem)]",
        ].join(" ")}
      >
        <span
          className={[
            "flex h-full items-center justify-center text-psy-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1",
            isSm ? "w-8" : "w-10",
          ].join(" ")}
        >
          <ArrowIcon
            className={[
              "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1",
              isSm ? "size-3.5" : "size-4",
            ].join(" ")}
          />
        </span>
      </span>

      <span
        className={[
          "relative z-10 ml-auto font-medium transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isSm ? "text-[12px]" : "text-[13px]",
          isRed
            ? "text-psy-white"
            : "text-psy-black group-hover:text-psy-white",
        ].join(" ")}
      >
        {label}
      </span>
    </Comp>
  );
}

type ArrowCtaProps = ComponentPropsWithoutRef<"a"> & SharedProps;

export function ArrowCta({
  label,
  variant,
  size,
  className,
  ...props
}: ArrowCtaProps) {
  return (
    <CtaShell
      as="a"
      label={label}
      variant={variant}
      size={size}
      className={className}
      {...props}
    />
  );
}

type ArrowButtonProps = ComponentPropsWithoutRef<"button"> & SharedProps;

export function ArrowButton({
  label,
  variant,
  size,
  className,
  ...props
}: ArrowButtonProps) {
  return (
    <CtaShell
      as="button"
      label={label}
      variant={variant}
      size={size}
      className={className}
      {...props}
    />
  );
}
