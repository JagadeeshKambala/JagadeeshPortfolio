import { useState } from "react";
import { CONTACT, CONTACT_CARDS } from "./contact.data";
import ContactCard from "./ContactCard";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-10 py-32"
    >
      {/* background grain / glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* LEFT */}
        <div className="space-y-10">
          <h2 className="text-5xl font-extrabold tracking-tight text-white">
            {CONTACT.heading}
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-white/70">
            {CONTACT.description}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-white">
              {CONTACT.email}
            </span>

            <button
              onClick={copyEmail}
              className="rounded-md bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-1 gap-6">
          {CONTACT_CARDS.map((card) => (
            <ContactCard
              key={card.title}
              title={card.title}
              description={card.description}
              action={card.action}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
