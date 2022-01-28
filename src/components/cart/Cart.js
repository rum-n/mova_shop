import React, { useState } from "react";
import "./styles.css";

const Cart = () => {
  const [items, setItems] = useState([]);

  return (
    <div className="cart-wrapper">
      <div className="order-summary">
        <h3>Order summary</h3>
        <div className="order-summary-details">
          {items[0] && (
            <div>
              <p>You have items!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
