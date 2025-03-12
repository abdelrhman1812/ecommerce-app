import React, { useEffect, useState } from "react";
import Loader from "../../components/loading";
import SingleProduct from "../../components/products/single-product";
import SortBy from "../../components/products/sort-by";
import { getProducts } from "../../services/Apis/productApi/productApi";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const data = await getProducts();

        setProducts(data);
        setSortedProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAllProducts();
  }, []);

  // sort products by title and price ascending
  const handleSort = (key, order) => {
    if (!key) return setSortedProducts([...products]);

    const sorted = [...products].sort((a, b) => {
      if (key === "price") {
        return order === "asc" ? a.price - b.price : b.price - a.price;
      } else {
        return order === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
    });

    setSortedProducts(sorted);
  };

  return (
    <section className="product-list py-5">
      <div className="container-xl">
        <div className="text-center my-5 section-title">
          <h2 className="position-relative d-inline-block px-3">
            <span className="before-line"></span>
            Our Products
            <span className="after-line"></span>
          </h2>
        </div>

        <SortBy onSort={handleSort} />

        {loading && <Loader />}
        {error && <p className="text-center text-danger">{error}</p>}

        {!loading && !error && (
          <div className="row">
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <div key={product.id} className="col-md-4 col-lg-3 mb-4">
                  <SingleProduct product={product} />
                </div>
              ))
            ) : (
              <p className="text-center">No products available.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
