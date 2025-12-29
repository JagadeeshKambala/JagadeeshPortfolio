import ProjectGrid from "./ProjectGrid";
import ProjectIntro from "./ProjectIntro";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black px-10 py-32">
      <div className="max-w-7xl mx-auto space-y-20">
        <ProjectIntro />
        <ProjectGrid />
      </div>
    </section>
  );
}
