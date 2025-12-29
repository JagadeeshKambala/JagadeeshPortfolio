import AboutText from "./AboutText";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-[#0b0720] via-[#120a2e] to-black px-10 py-20"
    >
      {/* Arrow indicator */}

      <div className="relative z-10 max-w-7xl mx-auto">
        <AboutText />

        {/* ON ME block */}
        <div className="mt-28 ml-auto max-w-xl">
          <h3 className="text-lg font-large tracking-wide text-white mb-5">
            About Me
          </h3>

          <p className="text-base leading-relaxed text-white/75">
            <span className="block font-mono font-semibold tracking-wide text-white mb-3">
              Cloud & DevOps Enthusiast
            </span>
            I am focused on learning and building cloud-based systems using AWS
            and modern DevOps practices. I enjoy working with automation,
            Infrastructure as Code, and CI/CD pipelines, and I am continuously
            improving my skills to design reliable and scalable cloud solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
