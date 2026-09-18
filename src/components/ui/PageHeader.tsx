import type { ReactNode } from "react";

type Props = {
  label: string;
  title: string;
  intro?: string;
  children?: ReactNode;
};

/** Shared top block for every subpage. Sits below the fixed header. */
export default function PageHeader({ label, title, intro, children }: Props) {
  return (
    <header className="container-x pb-14 pt-32 md:pb-20 md:pt-40">
      <p className="type-label text-ink-faint">{label}</p>
      <h1 className="type-display mt-5 max-w-[18ch] text-[clamp(2rem,6vw,4.25rem)]">
        {title}
      </h1>
      {intro && (
        <p className="mt-7 max-w-xl text-[1rem] leading-relaxed text-ink-soft">
          {intro}
        </p>
      )}
      {children}
    </header>
  );
}
