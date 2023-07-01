import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/hooks/useSelector";

import "./Cart.css";
import {
  addToCart,
  removeFromCart,
  checkout,
} from "../redux/actions/cartActions";
const Cart = () => {
  const { cartProducts } = useSelector((state) => state.cartProduct);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>MY CART</h1>

      {cartProducts.lenght > 0 &&
        cartProducts.map((product) => (
          <div className="cart-container">
            <div key={product.id} className="product">
              <img src={product.thumbnail} alt={product.title} />
              <p className="details">Title: {product.title}</p>

              <p className="details">Price: ${product.price}</p>
              <button onClick={() => dispatch(removeFromCart(product.id))}>
                Remove From Cart
              </button>
            </div>
            <div className="checkout">
              <p>checkout List</p>
              <div className="checkout-details">
                 
                <div className="product-name">{product.title}</div>
                <div className="product-price">{product.price}</div>
              </div>
              <div className="total-price">
                <p>Total</p>
                <p>{product.price}</p>
              </div>
              <button>Click to Checkout</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cart;
