import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useSectionObserver } from '../../hooks/useSectionObserver';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { ref } = useSectionObserver('hero');

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-primary-900 -z-10" />
      
      {/* Animated gradient circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-300 dark:bg-primary-700 rounded-full filter blur-3xl opacity-20 dark:opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-secondary-300 dark:bg-secondary-800 rounded-full filter blur-3xl opacity-20 dark:opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-lg md:text-6xl font-semibold mb-6 px-6 py-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-secondary-700 dark:from-primary-300 dark:to-secondary-300 leading-tight -mt-4">
  Jagadeesh Kambala
</h1>

        </motion.div>

       <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="text-xl md:text-2xl font-medium mb-8 text-gray-700 dark:text-gray-300 h-8"
>
  <span className="text-4xl inline-flex items-center">
    I am a{' '}
    <TypeAnimation
  sequence={[
    'Web Developer',
    2000,
    'UI/UX Designer',
    2000,
    'Python Programmer',
    2000,
  ]}
  wrapper="span"
  cursor={true}
  repeat={Infinity}
  className="text-4xl md:text-1xl text-primary-600 dark:text-primary-400 font-semibold ml-2"
/>

  </span>
</motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto mb-6"
        >
          I'm a passionate Frontend Developer specializing in React, TypeScript, and Tailwind CSS, dedicated to building innovative, user-friendly web experiences. With a strong grasp of AI's transformative potential, I integrate intelligent workflows into my development process to deliver faster, smarter, and more impactful solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-gray-500 dark:text-gray-200 max-w-2xl mx-auto mb-12"
        >
          
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            onClick={scrollToNext}
            className="inline-flex items-center justify-center rounded-full p-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/30 transition-colors duration-300"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;