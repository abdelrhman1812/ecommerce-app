import React, { useEffect, useState } from "react";
import { FaShoppingBag, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Taps from "../../components/products/Taps";
import { useCartContext } from "../../context/CartContext";
import { getProductSpecific } from "../../services/Apis/productApi/productApi";
import "./../../assets/styles/products.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [, setLoading] = useState(true);
  const { addProductToCart } = useCartContext();

  const getSingleProduct = async () => {
    setLoading(true);
    try {
      const data = await getProductSpecific(Number(id));
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getSingleProduct();
    }
  }, [id]);

  return (
    <div className="product-details container py-5">
      <div className="row">
        {/* Product Images */}
        <div className="col-md-6 mb-4">
          <div className="main-image-container mb-3">
            <img
              src={product?.image}
              alt={product?.title}
              className="img-fluid main-product-image rounded shadow"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h1 className="product-title">{product?.title}</h1>

          {/* Rating and price */}
          <div className="product-rating d-flex gap-5 mb-3">
            <span className="ms-2 d-flex  gap-2 ">
              <FaStar className="text-warning" />
              {product?.rating.rate} ({product?.rating.count} reviews)
            </span>
            <span className="product-price d-block mb-3">
              ${product?.price.toFixed(2)}
            </span>
          </div>

          <p className="text-text-muted">{product?.description}</p>
          {/* Quantity */}
          <div className="product-quantity mb-4">
            <h6>Quantity:</h6>
            <div className="quantity-selector d-flex align-items-center">
              <button className="btn btn-outline-secondary">-</button>
              <input
                type="number"
                className="form-control text-center mx-2"
                value={quantity}
                min="1"
              />
              <button className="btn btn-outline-secondary">+</button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="product-actions mb-4">
            <button
              onClick={() => addProductToCart(product.id)}
              className="btn btn-primary btn-lg d-flex justify-content-center gap-2  "
            >
              <FaShoppingBag />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Taps
        product={product}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default ProductDetails;
