import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSectionObserver } from '../../hooks/useSectionObserver';
import { projects } from '../../data/projectsData';
import { ChevronUp, ChevronDown, ExternalLink, Github } from 'lucide-react';

const PROJECTS_PER_PAGE = 3;

const Projects: React.FC = () => {
  const { ref } = useSectionObserver('projects');
  const [currentPage, setCurrentPage] = useState(0);
  const filteredProjects = projects.filter(project => !project.featured);
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  
  const currentProjects = filteredProjects.slice(
    currentPage * PROJECTS_PER_PAGE,
    (currentPage + 1) * PROJECTS_PER_PAGE
  );

  const handlePrevious = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800"
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
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore all my projects, from web applications to design concepts.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative min-h-[600px] md:min-h-[500px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {index === 1 && (
                  <>
                    <button
                      onClick={handlePrevious}
                      disabled={currentPage === 0}
                      className={`absolute -top-12 left-1/2 transform -translate-x-1/2 p-3 rounded-full ${
                        currentPage === 0
                          ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                          : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 shadow-md'
                      } transition-colors duration-300 z-10`}
                      aria-label="Previous projects"
                    >
                      <ChevronUp className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={currentPage >= totalPages - 1}
                      className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 p-3 rounded-full ${
                        currentPage >= totalPages - 1
                          ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                          : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 shadow-md'
                      } transition-colors duration-300 z-10`}
                      aria-label="Next projects"
                    >
                      <ChevronDown className="w-6 h-6" />
                    </button>
                  </>
                )}
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm px-3 py-1.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300"
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm px-3 py-1.5 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-colors duration-300"
                      >
                        <Github className="w-3.5 h-3.5 mr-1.5" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2.5 h-2.5 mx-1 rounded-full ${
                  currentPage === index
                    ? 'bg-primary-600 dark:bg-primary-500'
                    : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                } transition-colors duration-300`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;