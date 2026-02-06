import "./contact.css";

const Contact = () => {
  return (
    <section className="c" id="contact" aria-label="Contact">
      <div className="c-wrapper">
        <h2 className="c-title">Contact</h2>

        <p className="c-desc">
          Currently open to new opportunities and meaningful conversations.
        </p>

        <div className="c-links">
          <a href="mailto:rob.benney@gmail.com" className="c-link">
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/robert-benney/"
            target="_blank"
            rel="noopener noreferrer"
            className="c-link"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Rbenney15"
            target="_blank"
            rel="noopener noreferrer"
            className="c-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
