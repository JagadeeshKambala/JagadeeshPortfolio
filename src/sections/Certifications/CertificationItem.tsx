interface CertificationItemProps {
  title: string;
  issuer: string;
  date: string;
  duration: string;
  link: string;
  image: string; // NEW
  index: number;
  onClick: () => void;
}

export default function CertificationItem({
  title,
  issuer,
  date,
  duration,
  link,
  image,
  index,
  onClick,
}: CertificationItemProps) {
  const isFront = index === 0;

  const raise = index * -36;
  const scale = 1 - index * 0.03;

  // Visual hierarchy
  const opacity = isFront ? 1 : 0.6;
  const saturation = isFront ? 1 : 0.85;

  const borderColor = isFront
    ? "rgba(255,255,255,0.35)"
    : "rgba(255,255,255,0.18)";

  const backgroundColor = isFront ? "#0b0f14" : "#090d12";

  return (
    <div
      className="absolute inset-x-0 mx-auto max-w-6xl cursor-pointer transition-all duration-300 ease-out hover:-translate-y-3"
      style={{
        transform: `translateY(${raise}px) scale(${scale})`,
        zIndex: 100 - index,
        opacity,
        filter: `saturate(${saturation})`,
      }}
      onClick={onClick}
    >
      <div
        className="relative flex flex-col md:flex-row gap-8 rounded-3xl p-8 shadow-[0_25px_70px_rgba(0,0,0,0.7)]"
        style={{
          backgroundColor,
          border: "1.5px solid",
          borderColor,
        }}
      >
        {/* Certificate image */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="group relative w-full md:w-[360px] h-[200px] overflow-hidden rounded-2xl bg-black"
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35 opacity-0 transition-opacity group-hover:opacity-100" />

          <span className="absolute bottom-4 left-4 text-sm font-medium text-white/90">
            View Certificate
          </span>
        </a>

        {/* Content */}
        <div className="flex flex-col justify-center space-y-4">
          {isFront ? (
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {title}
            </h3>
          ) : (
            <div className="h-7 w-40 rounded bg-white/10" />
          )}

          <p className="text-white/70 max-w-xl leading-relaxed">
            Issued by {issuer}. This certification reflects hands-on capability
            and foundational expertise and understanding across core concepts.
          </p>

          <div className="flex items-center gap-4 text-sm text-white/50">
            <span>{date}</span>
            <span>• {duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
