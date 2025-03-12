import React from "react";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  cart,
  deleteProduct,
  totalPrice,
}) => {
  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h4>Your Cart</h4>
          <FaTimes
            className="close-icon"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
        <div className="sidebar-content">
          {cart?.map((item) => {
            return (
              <div
                className="cart-item d-flex align-items-center"
                key={item.id}
              >
                <img src={item.image} alt={item.title} className="cart-img" />
                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p>${item?.price?.toFixed(2)}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProduct(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <p className="shadow p-2 text-center bg-white fw-bold">
            Total Price {totalPrice}
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
