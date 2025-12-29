interface Props {
  title: string;
  description: string;
  link: string;
  year?: string;
  tags?: string[];
  previewImage?: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  link,
  year = "’25",
  tags = [],
  previewImage,
  className = "",
}: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[22px]
        px-8
        pt-8
        bg-gradient-to-br
        from-[#20252b] via-[#161a20] to-[#0e1116]
        ${className}
      `}
    >
      {/* Background vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_55%)]" />

      {/* Year watermark */}
      <span className="pointer-events-none absolute top-4 right-4 text-[120px] font-semibold text-white/[0.04] leading-none">
        {year}
      </span>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
          {title}
          <span className="text-white/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            ↗
          </span>
        </h3>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-4 py-1 text-xs text-white/80 backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Image peek */}
      {previewImage && (
        <div className="relative mt-auto pt-8">
          <div className="relative h-[160px] overflow-hidden rounded-xl">
            <img
              src={previewImage}
              alt={`${title} preview`}
              className="
                absolute
                bottom-0
                left-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-300
                ease-out
                group-hover:-translate-y-3
              "
            />
          </div>
        </div>
      )}
    </a>
  );
}
