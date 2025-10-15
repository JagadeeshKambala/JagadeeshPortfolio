import { Menu, Moon, Sun, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useActiveSection } from "../../hooks/useSectionObserver";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "featured-projects", label: "Featured" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center md:justify-center">
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`group relative text-sm px-4 py-2 rounded-full transition-all duration-300 transform
                      ${
                        isActive
                          ? "text-primary-800 dark:text-primary-200 font-semibold -translate-y-0.5"
                          : "text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-300 hover:-translate-y-0.5"
                      }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {/* Liquid glass background for active link */}
                    {isActive && (
                      <span
                        className="absolute inset-0 rounded-full bg-white/25 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                        aria-hidden="true"
                      />
                    )}

                    {/* Label */}
                    <span className="relative z-10">{item.label}</span>

                    {/* Expanding underline for hover only (not active) */}
                    {!isActive && (
                      <span
                        className="absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary-600 dark:bg-primary-400 transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>

          <button
            onClick={() => toggleTheme()}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-b-2xl overflow-hidden md:hidden">
            <nav className="container mx-auto px-4 py-2">
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-2 rounded-full transition-all duration-200 ${
                          isActive
                            ? "bg-white/20 backdrop-blur-md text-primary-700 dark:text-primary-300 font-semibold border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.15)]"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary-700 dark:hover:text-primary-300"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
