import "./intro.css";
import Me from "../../img/cover-image.jpg";

const Intro = () => {
  return (
    <header className="i" aria-label="Introduction">
      <div className="i-left">
        <div className="i-left-wrapper">
          <p className="i-intro">Hello, my name is</p>

          <h1 className="i-name">Rob Benney</h1>

          <p className="i-role">
            WordPress Content Designer <span className="i-role-sep">|</span>{" "}
            Information Architecture &amp; UX
          </p>

          <p className="i-desc">
            I build structured, scalable WordPress experiences—translating
            complex content into intuitive, accessible page layouts and
            navigation systems.
          </p>

          <div className="i-cta">
            <a
              className="i-cta-primary"
              href="/Benney_Resume_2026.pdf"
              download
            >
              Download Resume
            </a>

            <a
              className="i-cta-secondary"
              href="https://www.linkedin.com/in/robert-benney/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Decorative scroll indicator */}
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="currentColor"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M40.5 15L34.5 9L28.5 15"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28.5 24L34.5 30L40.5 24"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 37.5H60"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.5 27V9"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27V48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48V27Z"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="i-right" aria-hidden="true">
        <div className="i-bg" />
        <img
          src={Me}
          alt="Headshot of Rob Benney"
          className="i-img"
          loading="lazy"
        />
      </div>
    </header>
  );
};

export default Intro;
