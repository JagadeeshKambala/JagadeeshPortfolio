interface ContactCardProps {
  title: string;
  description: string;
  action: {
    label: string;
    href: string;
  };
}

export default function ContactCard({
  title,
  description,
  action,
}: ContactCardProps) {
  return (
    <div className="relative h-50 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)]">
      {/* subtle background text */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <p className="absolute right-4 top-4 text-xs uppercase tracking-widest text-white/5">
          connections · network · insights · design · tech
        </p>
      </div>

      <div className="relative z-10 flex h-full flex-col gap-6">
        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold leading-tight text-white">
            {title}
          </h3>

          <p className="text-sm leading-relaxed text-white/65">{description}</p>
        </div>

        {/* Action */}
        <a
          href={action.href}
          target={action.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="w-fit rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/20"
        >
          {action.label}
        </a>
      </div>
    </div>
  );
}
