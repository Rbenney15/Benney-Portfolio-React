import "./contact.css";

const EMAIL = "rob.benney@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/robert-benney/";
const GITHUB_URL = "https://github.com/Rbenney15";

const Contact = () => {
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      // Optional: quick feedback without adding state
      alert("Email copied to clipboard.");
    } catch (err) {
      // Fallback: open mail client if clipboard fails
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section className="c" id="contact" aria-label="Contact">
      <div className="c-shell">
        <header className="c-header">
          <h2 className="c-title">Let’s connect</h2>
          <p className="c-subtitle">
            Open to new opportunities, collaborations, and interesting projects.
          </p>
        </header>

        <div className="c-card">
          <div className="c-cardTop">
            <div className="c-chip" aria-hidden="true">
              <span className="c-dot" />
              Available for conversations
            </div>

            <p className="c-blurb">
              The fastest way to reach me is email. If you’d prefer, connect on
              LinkedIn or browse my work on GitHub.
            </p>
          </div>

          <div className="c-actions" aria-label="Contact actions">
            <a className="c-btn c-btnPrimary" href={`mailto:${EMAIL}`}>
              <span className="c-icon" aria-hidden="true">
                ✉️
              </span>
              Email me
            </a>

            <button
              type="button"
              className="c-btn c-btnSecondary"
              onClick={handleCopyEmail}
            >
              <span className="c-icon" aria-hidden="true">
                📋
              </span>
              Copy email
            </button>

            <a
              className="c-btn c-btnGhost"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="c-icon" aria-hidden="true">
                in
              </span>
              LinkedIn
            </a>

            <a
              className="c-btn c-btnGhost"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="c-icon" aria-hidden="true">
                ⌘
              </span>
              GitHub
            </a>
          </div>

          <footer className="c-footer">
            <p className="c-footnote">
              Prefer a quick note? Email is best — I typically respond within
              1–2 business days.
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
