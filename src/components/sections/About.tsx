import React from 'react';
import { motion } from 'framer-motion';
import { useSectionObserver } from '../../hooks/useSectionObserver';
import { Github, Linkedin, Mail } from 'lucide-react';

const About: React.FC = () => {
  const { ref } = useSectionObserver('about');

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jagadeesh-kambala-34a93732b/',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      url: 'mailto:kambala.jagadeesh19@gmail.com',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {/* Image and Social Links (Left Side) */}
            <div className="md:col-span-2">
              <div className="relative w-[5cm] h-[5cm] mx-auto md:mx-0">
                <div className="w-full h-full absolute -top-3 -left-3 border-2 border-primary-500 rounded-full"></div>
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Professional portrait"
                  className="w-full h-full object-cover rounded-full relative z-10 shadow-lg"
                />
              </div>
              <div className="mt-6 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  John Doe
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Full Stack Developer
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* About Heading and Text (Right Side) */}
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                About Me
              </h2>
             <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
  I'm Jagadeesh, a Frontend Developer, UI/UX Designer, and Python Programmer with a strong foundation in JavaScript, React, TypeScript, and Data Structures & Algorithms. I enjoy building responsive, user-focused web applications and continually keep up with modern development practices.<br></br>
<br></br>
  In addition to frontend development, I have a keen eye for design and usability, which helps me bridge the gap between aesthetics and functionality. I'm passionate about writing clean, maintainable code and collaborating with teams to bring innovative ideas to life. Whether it's designing intuitive user interfaces or optimizing performance, I approach each project with curiosity, precision, and a growth mindset.
</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
