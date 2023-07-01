import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productAction";
// import { flushSync } from "react-dom";
import "./Home.css";
import { addToCart } from "../redux/actions/cartActions";

const Home = () => {
  const { loading, products, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
       
      <h1>ALL ITEMS</h1>
      <div className="home-container">
        {products.length > 0 &&
          products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.thumbnail} alt={product.title} />
              <p className="details">Title: {product.title}</p>

              <p className="details">Price: ${product.price}</p>
              <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Home;
