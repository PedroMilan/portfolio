import { ReactNode } from "react";

/* Anotação "à caneta". Use em 2 ou 3 lugares no site todo, não mais. */
export function PenNote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`font-pen text-[26px] leading-none text-pen ${className}`}
    >
      {children}
    </span>
  );
}

export function PenArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 34"
      aria-hidden="true"
      className={`h-[34px] w-14 text-pen ${className}`}
    >
      <path
        d="M4 6 C 18 4, 36 8, 48 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M40 24 L 49 28 L 50 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
