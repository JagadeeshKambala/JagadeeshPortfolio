import { motion } from "framer-motion";
import React from "react";
import { useSectionObserver } from "../../hooks/useSectionObserver";

const CONTACT_EMAIL = "kambala.jagadeesh19@gmail.com";

const Contact: React.FC = () => {
  const { ref } = useSectionObserver("contact");

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 md:py-20 bg-white dark:bg-gray-950"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto max-w-4xl px-4">
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-6"
        >
          <h2
            id="contact-heading"
            className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            Contact
          </h2>
        </motion.header>

        {/* Info row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="text-center"
        >
          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>

            <span className="hidden md:inline text-gray-400">/</span>

            <a
              href="https://maps.app.goo.gl/cuK1YSRHQLJpE9st7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:underline underline-offset-4"
            >
              Vijayawada, India
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            For opportunities or collaborations, email is the fastest way to
            reach me.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
