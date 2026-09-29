import { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-page px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-6 border-t border-line py-20 md:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-12 grid max-w-[40em] gap-3.5">
      <h2 className="text-[clamp(30px,4vw,44px)] font-bold leading-[1.08] tracking-[-0.025em]">
        {title}
      </h2>
      {children && <p className="text-lg text-muted">{children}</p>}
    </div>
  );
}
