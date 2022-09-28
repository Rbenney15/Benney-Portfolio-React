import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Work</h1>
        <p className="pl-desc">
        Here you can find a list of projects that I have created using a varierty of technologies.
        </p>
        <p>*Click top sliding image to view deployed application</p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} description={item.description} github={item.github} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;