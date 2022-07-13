import "./product.css";

const Product = ({img,link, description, github}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
      <p className="p-text"> 
      {description}
      <a href={github}>{github}</a>
      </p>
    </div>
  );
};

export default Product;