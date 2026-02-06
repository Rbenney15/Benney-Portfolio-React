import "./knowledgeBase.css";

const KnowledgeBase = () => {
  return (
    <section className="kb" aria-label="Ask Capitol Knowledge Base case study">
      <div className="kb-wrapper">
        <a className="kb-back" href="/Benney-Portfolio-React/">
          ← Back to portfolio
        </a>

        <h1 className="kb-title">Ask Capitol Knowledge Base</h1>

        <p className="kb-overview">
          I oversee Ask Capitol, a public university Knowledge Base that helps
          students, faculty, and staff find clear answers quickly. My focus is
          keeping the site easy to navigate and keeping content consistent so it
          stays useful as it grows.
        </p>

        <div className="kb-section">
          <h2>What I owned</h2>
          <ul>
            <li>
              Site structure and navigation updates to improve findability
            </li>
            <li>
              Content standards so articles stay consistent across departments
            </li>
            <li>
              Reusable templates that make it faster to publish and maintain
              content
            </li>
            <li>
              Working with stakeholders to turn processes into plain-language
              guidance
            </li>
            <li>
              Accessibility checks and cleanup (headings, link text,
              readability, etc.)
            </li>
          </ul>
        </div>

        <div className="kb-section">
          <h2>Impact</h2>
          <ul>
            <li>
              A centralized support resource for the whole university community
            </li>
            <li>
              Less back-and-forth by organizing content into predictable
              sections
            </li>
            <li>
              Easier maintenance for departments through standards and templates
            </li>
            <li>Improved UX through clearer navigation and page structure</li>
          </ul>
        </div>

        <div className="kb-section">
          <h2>How I work</h2>
          <p>
            I collaborate with campus partners and technical teams, then
            iterate: review what’s working, fix what’s confusing, and keep
            improving the structure so it stays simple for users and manageable
            for the people maintaining it.
          </p>
        </div>

        <div className="kb-section">
          <h2>Live site</h2>
          <a
            href="https://ask.captechu.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="kb-link"
          >
            Visit Ask Capitol →
          </a>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;
