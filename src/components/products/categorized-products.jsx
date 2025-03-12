import React, { useEffect, useState } from "react";
import "../../assets/styles/products.css";
import SingleProduct from "../../components/products/single-product";
import { getCategories } from "../../services/Apis/categoryApi/categoryApi";
import { getProducts } from "../../services/Apis/productApi/productApi";
import Loader from "../loading";
const CategorizedProducts = ({ setActiveCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch products and categories , filtering products and categories
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const data = await getProducts();
        const categories = await getCategories();

        const categorizedProducts = {};
        categories.forEach((category) => {
          categorizedProducts[category] = data.filter(
            (product) => product.category === category
          );
        });

        setProducts(categorizedProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAllProducts();
  }, []);

  useEffect(() => {
    // follow scroll events
    const handleScroll = () => {
      let currentCategory = "";
      document.querySelectorAll(".category-section").forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentCategory = section.getAttribute("data-category");
        }
      });
      setActiveCategory(currentCategory);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveCategory]);

  return (
    <section className="product-list py-5">
      <div className="container-xl">
        {loading && <Loader />}
        {error && <p className="text-center text-danger">{error}</p>}

        {!loading &&
          !error &&
          Object.entries(products).map(([key, value]) => (
            <div
              className="row mb-4 category-section"
              key={key}
              data-category={key}
            >
              <h2 className="mb-4 category-title">{key}</h2>
              {value.length > 0 ? (
                value.map((product) => (
                  <div key={product.id} className="col-md-4 col-lg-3 mb-4">
                    <SingleProduct product={product} />
                  </div>
                ))
              ) : (
                <p className="text-center">No products available.</p>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default CategorizedProducts;
