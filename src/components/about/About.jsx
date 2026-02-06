import "./about.css";
import hiking from "../../img/hiking.jpg";

const About = () => {
  return (
    <section className="a" id="about" aria-label="About Rob Benney">
      <div className="a-left" aria-hidden="true">
        <div className="a-card bg"></div>

        <div className="a-card">
          <img
            src={hiking}
            alt="Rob Benney hiking outdoors"
            className="a-img"
            loading="lazy"
          />
        </div>
      </div>

      <div className="a-right">
        <h2 className="a-title">About</h2>

        <p className="a-intro">
          I am a digital experience professional focused on building structured,
          user-centered web environments that balance content strategy, user
          experience, and technical execution.
        </p>

        <p className="a-desc">
          In my current role, I lead the architecture and continuous improvement
          of a university-wide Knowledge Base, translating complex
          organizational processes into intuitive, accessible digital
          experiences. I partner closely with stakeholders and technical teams
          to design systems that scale — emphasizing clear navigation, reusable
          patterns, and long-term content governance.
        </p>

        <div className="a-section">
          <h3 className="a-section-title">Core Strengths</h3>

          <ul className="a-list">
            <li>
              Information architecture, taxonomy, and scalable content
              structures
            </li>
            <li>UX-focused layout, visual hierarchy, and page composition</li>
            <li>Accessibility-minded design and quality practices</li>
            <li>Responsive front-end development using modern CSS patterns</li>
            <li>
              Cross-functional collaboration with designers, developers, and
              stakeholders
            </li>
            <li>
              Content migration, cleanup, and governance for sustainable growth
            </li>
          </ul>
        </div>

        <div className="a-section">
          <h3 className="a-section-title">Technical Toolkit</h3>

          <p className="a-desc">
            WordPress, HTML, CSS, JavaScript, React, Node.js, Express, SQL,
            NoSQL, Git/GitHub, APIs, and analytics tooling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
