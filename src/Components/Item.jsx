import React from "react";
import { CartContext, useCart } from "../Context/Cart";

const Item = (props) => {
  const cart = useCart();
  console.log("cart", cart);
  return (
    <div className="item-card">
      <h4>{props.name}</h4>
      <p>Rs. {props.price}</p>
      <button
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add to cart
      </button>
    </div>
  );
};

export default Item;
