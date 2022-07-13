import "./product.css";

const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
      {/* <a href="https://github.com/Rbenney15" target="_blank" rel="noreferrer"> */}
        <img src={img} alt="" className="p-img" />
        {/* <img src="" alt="" className="p-img" /> */}
      </a>
    </div>
  );
};

export default Product;