export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Background Image */}
      <img
        src="/assets/hero.jpg"
        alt="Hero background"
        className="h-full w-full object-cover"
      />

      {/* Global dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Directional blue light */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-900/40 to-transparent" />

      {/* Bottom vignette */}
      <div className="absolute bottom-0 h-1/3 w-full bg-gradient-to-t from-black via-black/80 to-transparent" />
    </div>
  );
}
