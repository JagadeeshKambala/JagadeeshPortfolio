interface NavItemProps {
  label: string;
  href: string;
}

export default function NavItem({ label, href }: NavItemProps) {
  return (
    <a
      href={href}
      className="text-sm uppercase tracking-wideplus text-muted hover:text-foreground transition-colors"
    >
      {label}
    </a>
  );
}
