import Terminal from "./Terminal";
import "./skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* TOP HEADING */}
        <h2 className="skills-heading">Technical Skills</h2>

        {/* TERMINAL */}
        <Terminal />

        {/* BOTTOM LARGE STATEMENT */}
        <div className="skills-footer">
          <p>
            A growing set of cloud tools and technologies — built through
            hands-on practice, experimentation, and solving real technical
            challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
