import { motion } from "framer-motion";
import React from "react";
import { skills } from "../../data/skillsData";
import { useSectionObserver } from "../../hooks/useSectionObserver";

const Skills: React.FC = () => {
  const { ref } = useSectionObserver("skills");
  const duplicatedSkills = [...skills, ...skills];

  const playTypingSound = () => {
    const audio = new Audio(
      "https://www.soundjay.com/mechanical/sounds/typewriter-key-1.mp3"
    );
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-32 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            These are the technologies I've worked with over the years.
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-20"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-20"></div>

          <div
            className="flex overflow-hidden"
            style={{ perspective: "1400px" }}
          >
            <div className="flex animate-infinite-scroll">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="w-40 h-52 mx-5 flex-shrink-0 pointer-events-auto"
                  style={{ perspective: "1400px" }}
                >
                  <motion.div
                    onHoverStart={playTypingSound}
                    whileHover={{
                      rotateX: 6,
                      rotateY: -6,
                      scale: 1.05,
                      transition: { duration: 0.6, ease: "easeOut" },
                    }}
                    className="relative w-full h-full rounded-3xl overflow-hidden
                      backdrop-blur-xl bg-white/15 dark:bg-gray-800/25
                      border border-white/20
                      shadow-[0_20px_60px_-10px_rgba(0,0,0,0.45)]
                      transition-all duration-500 flex flex-col items-center justify-center"
                    style={{
                      willChange: "transform",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Depth shading */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/30 pointer-events-none"></div>

                    {/* Shine */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(120deg, rgba(255,255,255,0.45) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.35) 100%)",
                      }}
                    />

                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 mb-3 opacity-90 transition-all duration-500"
                    />

                    <span className="text-sm font-medium text-gray-900 dark:text-gray-200 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-purple-500/10 blur-3xl -z-10"></div>
    </section>
  );
};

export default Skills;
