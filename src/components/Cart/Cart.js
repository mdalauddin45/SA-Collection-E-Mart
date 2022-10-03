import React from "react";
import "./Cart.css";
const Cart = ({ product }) => {
  console.log(product);
  const { image, title, price } = product;
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 text-center p-4">
        <img src={image} className="card-img-top" alt={title} height="250px" />
        <div className="card-body">
          <h5 className="card-title mb-0">{title.slice(0, 12)}</h5>
          <p className="card-text fw-bold">${price}</p>
          <a href="#/" className="btn btn-outline-dark">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
