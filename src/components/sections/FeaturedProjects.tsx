import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import React, { useEffect, useState } from "react";
import { featuredProjects } from "../../data/projectsData";
import { useSectionObserver } from "../../hooks/useSectionObserver";

const FeaturedProjects: React.FC = () => {
  const { ref } = useSectionObserver("featured-projects");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Auto rotate featured projects
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProjectIndex((prevIndex) =>
        prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="featured-projects"
      ref={ref}
      className="py-20 md:py-32 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my best work and most impactful projects.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto h-[420px] md:h-[480px]">
          <div className="relative h-full overflow-hidden rounded-3xl shadow-2xl backdrop-blur-xl bg-white/10 dark:bg-gray-800/20 border border-white/10">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeProjectIndex === index ? 1 : 0,
                  zIndex: activeProjectIndex === index ? 10 : 0,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 scale-105 transition-transform duration-1000 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 backdrop-blur-md bg-white/10 dark:bg-black/20 rounded-t-3xl border-t border-white/10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/90 mb-4 line-clamp-3 md:line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-medium transition-all backdrop-blur-md border border-white/20 shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all backdrop-blur-md border border-white/20 shadow-lg"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProjectIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 backdrop-blur-md border border-white/30 ${
                  activeProjectIndex === index
                    ? "bg-white shadow-md scale-110"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
