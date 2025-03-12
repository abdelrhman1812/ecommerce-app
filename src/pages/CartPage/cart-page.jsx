import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/cart.css";
import CartItem from "../../components/cart/cart-item";
import OrderSummary from "../../components/cart/order-summary";
import { useCartContext } from "../../context/CartContext";

const CartPage = () => {
  const { cart, totalPrice, deleteProduct } = useCartContext();

  return (
    <div className="container-xl py-5">
      <div className="row">
        <div className="col-md-8">
          <div className="cart-items">
            {cart.length === 0 ? (
              <div className="empty-cart">
                <h4>Your cart is empty!</h4>
                <Link to="/">Continue Shopping</Link>
              </div>
            ) : (
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  deleteProduct={deleteProduct}
                />
              ))
            )}
          </div>
        </div>

        <OrderSummary totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default CartPage;
