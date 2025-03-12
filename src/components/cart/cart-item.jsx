import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ item, deleteProduct }) => {
  return (
    <div className="cart-item d-flex align-items-center" key={item.id}>
      <img src={item.image} alt={item.title} className="cart-img" />
      <div className="cart-info">
        <h3>{item.title}</h3>
        <p>${item?.price?.toFixed(2)}</p>

        <div className="quantity-control d-flex gap-1 ">
          <button className="rounded border-0 text-white">-</button>
          <span></span>
          <button className="rounded border-0 text-white">+</button>
        </div>

        <FaTrash
          onClick={() => deleteProduct(item.id)}
          className="text-danger my-2 "
          size={20}
        />
      </div>
    </div>
  );
};

export default CartItem;
