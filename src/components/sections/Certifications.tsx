import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSectionObserver } from '../../hooks/useSectionObserver';
import { companies } from '../../data/certificationsData';

const Certifications: React.FC = () => {
  const { ref } = useSectionObserver('certifications');
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null);

  const handleCompanyClick = (companyId: number) => {
    setSelectedCompany(selectedCompany === companyId ? null : companyId);
  };

  const selectedCompanyData = companies.find(
    (company) => company.id === selectedCompany
  );

  return (
    <section
      id="certifications"
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
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my technical skills and knowledge.<br />
            Click on a company logo to view its certifications.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-6 mb-16">
          {companies.map((company) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <button
                onClick={() => handleCompanyClick(company.id)}
                className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full p-4 transition-all duration-300 ${
                  selectedCompany === company.id
                    ? 'bg-primary-1900 dark:bg-primary-90/50 shadow-lg'
                    : 'bg-black dark:bg-gray-800 shadow-md hover:shadow-lg'
                }`}
                aria-label={`View ${company.name} certifications`}
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className={`max-w-full max-h-full transition-opacity duration-300 ${
                    company.name === 'AWS' ? 'dark:filter dark:invert' : ''
                  }`}
                />
              </button>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                {company.name}
              </span>
            
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCompany && selectedCompanyData && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {selectedCompanyData.name} Certifications
                </h3>
                <div className="space-y-4">
                  {selectedCompanyData.certifications.map((cert) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm"
                    >
                      <div className="flex items-start">
                        <img
                          src={cert.orgLogo}
                          alt={`${cert.organization} logo`}
                          className={`w-8 h-8 mr-4 ${
                            cert.organization === 'AWS' ? 'dark:filter dark:invert' : ''
                          }`}
                        />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {cert.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Issued: {cert.issuedDate}
                          </p>
                          {cert.credentialId && (
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Credential ID: {cert.credentialId}
                            </p>
                          )}
                          {cert.credentialUrl && (
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-2 text-sm text-primary-600 dark:text-primary-400 hover:underline"
                            >
                              Verify Credential
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications;