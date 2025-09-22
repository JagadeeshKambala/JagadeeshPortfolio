import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSectionObserver } from '../../hooks/useSectionObserver';
import { featuredProjects } from '../../data/projectsData';
import { ExternalLink, Github } from 'lucide-react';

const FeaturedProjects: React.FC = () => {
  const { ref } = useSectionObserver('featured-projects');
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
      className="py-20 md:py-32 bg-white dark:bg-gray-900"
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

        <div className="relative max-w-5xl mx-auto h-[400px] md:h-[450px]">
          <div className="relative h-full overflow-hidden rounded-xl shadow-xl">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeProjectIndex === index ? 1 : 0,
                  zIndex: activeProjectIndex === index ? 10 : 0
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full bg-gray-800 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
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
                          className="px-3 py-1 text-xs font-medium bg-gray-100/20 text-white rounded-full"
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
                          className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300"
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
                          className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-colors duration-300"
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
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  activeProjectIndex === index
                    ? 'bg-white'
                    : 'bg-white/30 hover:bg-white/50'
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