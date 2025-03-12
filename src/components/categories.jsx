import React, { useEffect, useState } from "react";
import { getCategories } from "../services/Apis/categoryApi/categoryApi";
import Loader from "./loading";

const CategoriesSection = ({ activeCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const categories = await getCategories();
        setCategories(categories);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAllCategories();
  }, []);

  return (
    <section className="categories-section bg-white shadow position-sticky top-0 z-3 overflow-hidden">
      <div className="container-xl">
        <div className="row">
          {loading && <Loader />}
          {error && <p className="text-center text-danger">{error}</p>}

          {!loading && !error && (
            <div className="d-flex justify-content-center flex-wrap py-3 gap-1 align-items-center">
              {categories.map((category, index) => (
                <h5
                  key={index}
                  className={`card-title p-1 ${
                    activeCategory === category ? "active-section" : "text-dark"
                  }`}
                >
                  {category}
                </h5>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
