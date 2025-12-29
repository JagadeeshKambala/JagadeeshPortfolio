import { useState } from "react";
import { certifications as initialCerts } from "../../data/certifications";
import CertificationItem from "./CertificationItem";

export default function Certifications() {
  const [certifications, setCertifications] = useState(initialCerts);

  const bringToFront = (index: number) => {
    setCertifications((prev) => {
      const selected = prev[index];
      const rest = prev.filter((_, i) => i !== index);
      return [selected, ...rest];
    });
  };

  return (
    <section className="relative min-h-screen bg-black px-8 py-32 flex items-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl w-full mx-auto">
        {/* Section title */}
        <div className="pb-24">
          <h2 className="text-center text-6xl md:text-5xl font-bold tracking-tight text-white">
            CERTIFICATIONS
          </h2>
        </div>

        {/* Layered stack — pushed down */}
        <div className="relative mt-28 h-[350px] overflow-visible">
          {certifications.map((cert, index) => (
            <CertificationItem
              key={cert.title}
              {...cert}
              index={index}
              onClick={() => bringToFront(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
