import "./product.css";
import { Link } from "react-router-dom";

const Product = ({
  title,
  img,
  link,
  description,
  github,
  featured = false,
}) => {
  // Detect internal vs external links
  const isInternal = link?.startsWith("/");

  return (
    <article className={`p ${featured ? "featured" : ""}`} aria-label={title}>
      {/* Browser bar */}
      <div className="p-browser" aria-hidden="true">
        <div className="p-circle" />
        <div className="p-circle" />
        <div className="p-circle" />
      </div>

      {/* Image Navigation */}
      {isInternal ? (
        <Link to={link} className="p-imageLink">
          <img
            src={img}
            alt={`${title} screenshot`}
            className="p-img"
            loading="lazy"
          />
        </Link>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={img}
            alt={`${title} screenshot`}
            className="p-img"
            loading="lazy"
          />
        </a>
      )}

      {/* Content */}
      <div className="p-body">
        <h3 className="p-title">{title}</h3>

        <p className="p-text">{description}</p>

        <div className="p-links">
          {/* Featured → Case Study */}
          {featured ? (
            <Link to={link} className="p-link">
              View Case Study →
            </Link>
          ) : (
            link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-link"
              >
                Live Site
              </a>
            )
          )}

          {/* GitHub only if exists */}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-link"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Product;
