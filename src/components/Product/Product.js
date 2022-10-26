import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props);
  const { product, handleAddToCart } = props;
  const { name, img, seller, price, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="kicuna" />
      <div className="product-info">
        <p>{name}</p>
        <h4>Price: ${price}</h4>
        <p>
          <small>Manufacturer: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="product-btn">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
