import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/products.css";
import { useCartContext } from "../../context/CartContext";

const SingleProduct = ({ product }) => {
  const { addProductToCart } = useCartContext();

  return (
    <div className="card overflow-hidden border-0 shadow-sm product-card">
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top img-fluid"
      />
      <div className="card-body text-center">
        <Link to={`/product/${product.id}`} className="card-title fw-bold">
          {product.title.split(" ").slice(0, 3).join(" ")}
        </Link>
        <p className="card-text text-muted">
          ${Number(product.price).toFixed(2)}
        </p>
        <button
          onClick={() => addProductToCart(product.id)}
          className="btn btn-primary w-100"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
