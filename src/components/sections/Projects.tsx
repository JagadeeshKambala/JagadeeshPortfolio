import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import React, { useState } from "react";
import { projects } from "../../data/projectsData";
import { useSectionObserver } from "../../hooks/useSectionObserver";

const PROJECTS_PER_PAGE = 3;

const Projects: React.FC = () => {
  const { ref } = useSectionObserver("projects");
  const [currentPage, setCurrentPage] = useState(0);
  const filteredProjects = projects.filter((project) => !project.featured);
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  const currentProjects = filteredProjects.slice(
    currentPage * PROJECTS_PER_PAGE,
    (currentPage + 1) * PROJECTS_PER_PAGE
  );

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  return (
    <section
      id="projects"
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
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore all my projects, from web applications to design concepts.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative min-h-[600px] md:min-h-[500px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative backdrop-blur-lg bg-white/10 dark:bg-gray-800/20 rounded-3xl border border-white/10 shadow-2xl overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
                >
                  {index === 1 && (
                    <>
                      <button
                        onClick={handlePrevious}
                        disabled={currentPage === 0}
                        className={`absolute -top-12 left-1/2 transform -translate-x-1/2 p-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg ${
                          currentPage === 0
                            ? "bg-white/20 text-gray-400 cursor-not-allowed"
                            : "bg-white/30 text-gray-800 dark:text-white hover:bg-white/50"
                        } transition-all duration-300 z-10`}
                        aria-label="Previous projects"
                      >
                        <ChevronUp className="w-6 h-6" />
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={currentPage >= totalPages - 1}
                        className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 p-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg ${
                          currentPage >= totalPages - 1
                            ? "bg-white/20 text-gray-400 cursor-not-allowed"
                            : "bg-white/30 text-gray-800 dark:text-white hover:bg-white/50"
                        } transition-all duration-300 z-10`}
                        aria-label="Next projects"
                      >
                        <ChevronDown className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Image */}
                  <div className="h-48 overflow-hidden rounded-t-3xl relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 scale-105 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 backdrop-blur-md bg-white/10 dark:bg-gray-900/20 border-t border-white/10 rounded-b-3xl">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full border border-white/10 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full border border-white/10 backdrop-blur-sm">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm px-5 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white font-medium transition-all backdrop-blur-md border border-white/20 shadow-md"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all backdrop-blur-md border border-white/20 shadow-md"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 mx-1 rounded-full border border-white/30 backdrop-blur-md transition-all duration-300 ${
                  currentPage === index
                    ? "bg-white shadow-md scale-110"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-purple-500/10 blur-3xl -z-10"></div>
    </section>
  );
};

export default Projects;
