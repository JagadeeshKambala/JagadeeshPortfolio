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
    audio.volume = 0.15;
    audio.play().catch(() => {});
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-32 bg-white dark:bg-gray-950 overflow-hidden relative"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-purple-500/10 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 mb-12">
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
            These are the technologies I've worked with and the skills I've
            developed.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex overflow-hidden select-none">
            <div className="flex animate-infinite-scroll">
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="morph-card flex flex-col items-center justify-center w-32 h-40 mx-4 p-4"
                  whileHover={{
                    scale: 1.04,
                    transition: { duration: 1.6, ease: "easeInOut" },
                  }}
                  onHoverStart={() => playTypingSound()}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 mb-3"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
