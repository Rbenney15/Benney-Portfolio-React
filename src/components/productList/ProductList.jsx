import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  const featured = products.find((p) => p.featured);
  const others = products.filter((p) => !p.featured);

  return (
    <section className="pl" id="work" aria-label="Selected work">
      <div className="pl-texts">
        <h2 className="pl-title">Selected Work</h2>
        <p className="pl-desc">
          A curated selection of work highlighting platform structure,
          UX-focused layout, and implementation.
        </p>
      </div>

      {featured && (
        <div className="pl-featured">
          <h3 className="pl-subtitle">Featured</h3>
          <Product
            title={featured.title}
            img={featured.img}
            link={featured.link}
            description={featured.description}
            github={featured.github}
            featured
          />
        </div>
      )}

      <div className="pl-grid">
        <h3 className="pl-subtitle">Additional Projects</h3>
        <div className="pl-list">
          {others.map((item) => (
            <Product
              key={item.id}
              title={item.title}
              img={item.img}
              link={item.link}
              description={item.description}
              github={item.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
