import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./knowledgeBase.css";

const KnowledgeBase = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="kb">
      <div className="kb-wrapper">
        <Link to="/" className="kb-back">
          ← Back to Portfolio
        </Link>

        <h1 className="kb-title">Ask Capitol Knowledge Base</h1>

        <p className="kb-overview">
          I lead the structure and ongoing development of a university-wide
          Knowledge Base designed to help students, faculty, and staff quickly
          find accurate information. My focus is on improving usability,
          strengthening content organization, and creating standards that allow
          the platform to scale effectively as the university grows.
        </p>

        <div className="kb-section">
          <h2>My Role</h2>

          <ul>
            <li>
              Designed the site architecture and navigation to improve
              findability
            </li>
            <li>
              Established content standards to ensure consistency across
              departments
            </li>
            <li>Built reusable templates to streamline article creation</li>
            <li>
              Partnered with stakeholders to translate complex processes into
              clear documentation
            </li>
            <li>
              Implemented accessibility-minded practices to support a wide range
              of users
            </li>
          </ul>
        </div>

        <div className="kb-section">
          <h2>Impact</h2>
          <ul>
            <li>
              Created a centralized resource supporting the entire university
              community
            </li>
            <li>
              Reduced confusion by organizing information into predictable
              structures
            </li>
            <li>Enabled departments to maintain content more efficiently</li>
            <li>
              Improved the overall user experience through clearer navigation
            </li>
          </ul>
        </div>

        <div className="kb-section">
          <h2>How I Approach This Work</h2>

          <p>
            This project requires close collaboration with both technical teams
            and campus partners. I continuously evaluate what is working,
            identify opportunities for improvement, and refine the platform so
            it remains practical, scalable, and easy to manage as content
            expands.
          </p>
        </div>

        <div className="kb-section">
          <h2>Explore the Live Platform</h2>

          <a
            href="https://ask.captechu.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="kb-link"
          >
            Visit Knowledge Base →
          </a>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;
