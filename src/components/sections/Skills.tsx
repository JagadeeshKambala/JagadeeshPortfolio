import { motion } from "framer-motion";
import React from "react";
import { skills } from "../../data/skillsData";
import { useSectionObserver } from "../../hooks/useSectionObserver";

const Skills: React.FC = () => {
  const { ref } = useSectionObserver("skills");
  const duplicatedSkills = [...skills, ...skills];

  // Typing sound effect
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

        {/* Skill Cards Slider */}
        <div className="relative max-w-7xl mx-auto overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-20"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-20"></div>

          <div className="flex overflow-hidden">
            <div className="flex animate-infinite-scroll">
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="flex flex-col items-center justify-center w-36 h-48 mx-5 rounded-3xl backdrop-blur-lg bg-white/10 dark:bg-gray-800/20 border border-white/10 shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500 cursor-pointer group"
                  whileHover={{ y: -8, scale: 1.05 }}
                  onHoverStart={playTypingSound}
                >
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-12 h-12 mb-3 opacity-90 group-hover:opacity-100 transition-all duration-300"
                  />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Soft glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-purple-500/10 blur-3xl -z-10"></div>
    </section>
  );
};

export default Skills;
