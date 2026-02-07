import "./intro.css";
import Me from "../../img/cover-image.jpg";

const Intro = () => {
  return (
    <section className="i" id="home" aria-label="Intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Rob Benney</h1>

          <p className="i-tagline">
            Web Platforms • Content Strategy • User Experience
          </p>

          {/* <div className="i-title" aria-label="Roles">
            <div className="i-title-wrapper">
              <div className="i-title-item">WordPress Content Designer</div>
              <div className="i-title-item">Knowledge Base Manager</div>
              <div className="i-title-item">UX & Content Systems</div>
              <div className="i-title-item">Web Developer</div>
            </div>
          </div> */}

          <p className="i-desc">
            I design and improve web platforms that help people find reliable
            information quickly and navigate complex processes with confidence.
          </p>

          <div className="i-cta">
            <a
              className="i-cta-primary"
              href="/Benney-Portfolio-React/Benney_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>

            <a
              className="i-cta-secondary"
              href="https://www.linkedin.com/in/robert-benney/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="currentColor"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g id="scroll">
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
            <g>
              <path
                d="M9 37.5H60"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M34.5 27V9"
              strokeWidth="2.9895"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g>
              <path
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>

      <div className="i-right" aria-hidden="true">
        <div className="i-bg" />
        <img src={Me} alt="Portrait of Rob Benney" className="i-img" />
      </div>
    </section>
  );
};

export default Intro;
