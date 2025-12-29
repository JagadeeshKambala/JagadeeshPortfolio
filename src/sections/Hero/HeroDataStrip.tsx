import DataItem from "./DataItem";

export default function HeroDataStrip() {
  return (
    <div className="relative z-10">
      {/* Top divider */}
      <div className="h-px w-full bg-white/10" />

      {/* Data grid */}
      <div className="grid grid-cols-2 gap-12 px-10 py-8">
        {/* Brand */}
        <DataItem
          label="CLOUD ARCHITECTURE |"
          value="ENGINEERING CLOUD SYSTEMS WITH CLARITY, DISCIPLINE, AND INTENT"
        />

        {/* Manifesto — constrained width */}
        <div className="max-w-md mx-auto">
          <DataItem
            label="Manifesto"
            value="WHERE OTHERS SCALE INFRASTRUCTURE, WE ARCHITECT RESILIENT CLOUD SYSTEMS BUILT FOR WHAT COMES NEXT."
            align="center"
          />
        </div>

        {/* Verification */}

        {/* Index */}
      </div>
    </div>
  );
}
