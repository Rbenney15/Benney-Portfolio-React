import "./product.css";

const Product = ({
  title,
  img,
  link,
  description,
  github,
  featured = false,
}) => {
  return (
    <article className={`p ${featured ? "featured" : ""}`} aria-label={title}>
      <div className="p-browser" aria-hidden="true">
        <div className="p-circle" />
        <div className="p-circle" />
        <div className="p-circle" />
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="p-imageLink"
        aria-label={`Open ${title}`}
      >
        <img
          src={img}
          alt={`${title} screenshot`}
          className="p-img"
          loading="lazy"
        />
      </a>

      <div className="p-body">
        <h4 className="p-title">{title}</h4>
        <p className="p-text">{description}</p>

        <div className="p-links">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Live Site
          </a>

          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Product;
