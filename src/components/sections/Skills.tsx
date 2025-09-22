import React from 'react';
import { motion } from 'framer-motion';
import { useSectionObserver } from '../../hooks/useSectionObserver';
import { skills } from '../../data/skillsData';

const Skills: React.FC = () => {
  const { ref } = useSectionObserver('skills');
  const duplicatedSkills = [...skills, ...skills];

  // Typing sound effect
  const playTypingSound = () => {
    const audio = new Audio('https://www.soundjay.com/mechanical/sounds/typewriter-key-1.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {
      // Handle any autoplay restrictions
    });
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800 overflow-hidden"
    >
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
            These are the technologies I've worked with and the skills I've developed over the years.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800 z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-800 z-10"></div>

          <div className="flex overflow-hidden">
            <div className="flex animate-infinite-scroll">
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="flex flex-col items-center justify-center w-32 h-40 mx-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm transition-all duration-1000 ease-in-out p-4 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                  whileHover={{
                    y: -5,
                    transition: { duration: 1, ease: "easeInOut" }
                  }}
                  onHoverStart={() => playTypingSound()}
                >
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
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