import React from "react";

const OrderSummary = ({ totalPrice }) => {
  return (
    <div className="col-md-4">
      <div className="order-summary">
        <h3>ORDER SUMMARY</h3>
        <p className="d-flex justify-content-between">
          SUBTOTAL <span>${totalPrice.toFixed(2)}</span>
        </p>
        <p className="d-flex justify-content-between">
          SHIPPING <span>Free</span>
        </p>
        <p className="d-flex justify-content-between">
          POSTAGE <span>$24,00</span>
        </p>
        <hr />
        <p className="total">
          TOTAL <span>${(totalPrice + 24).toFixed(2)}</span>
        </p>
        <button className="checkout-btn">Check Out</button>
      </div>
    </div>
  );
};

export default OrderSummary;
