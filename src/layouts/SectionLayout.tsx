import type { ReactNode } from "react";

interface SectionLayoutProps {
  children: ReactNode;
}

export default function SectionLayout({ children }: SectionLayoutProps) {
  return <div className="flex flex-col w-full">{children}</div>;
}
