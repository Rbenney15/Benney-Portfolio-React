import "./contact.css";

const Contact = () => {
  return (
    <section className="c" id="contact" aria-label="Contact">
      <div className="c-wrapper">
        <h2 className="c-title">Contact</h2>

        <p className="c-desc">
          Currently open to new opportunities and meaningful conversations.
        </p>

        <div className="c-links" aria-label="Contact links">
          <a className="c-link" href="mailto:YOUR_EMAIL_HERE">
            Email
          </a>

          <a
            className="c-link"
            href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            className="c-link"
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
