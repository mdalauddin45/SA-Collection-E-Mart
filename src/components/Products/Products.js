import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import Cart from "../Cart/Cart";
import "./Products.css";
const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(data);
  let componentsMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentsMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentsMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton></Skeleton>
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center mb-5 pb-5">
          <button className="btn btn-outline-dark">All</button>
          <button className="btn btn-outline-dark ms-2">Men's Clothing</button>
          <button className="btn btn-outline-dark ms-2">
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark ms-2">Jewelry</button>
          <button className="btn btn-outline-dark ms-2">Electronic</button>
        </div>
        {filter.map((product) => (
          <Cart product={product} key={product.id}></Cart>
        ))}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
