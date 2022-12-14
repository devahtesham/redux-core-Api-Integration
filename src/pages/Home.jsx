import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/loader/Loader";
import { AddProduct, GetProduct } from "../store/Actions/Product";

const Home = () => {
  const dispatch = useDispatch();
  const { data, dataLoading } = useSelector(
    (state) => state.GetProductReducers
  );
  const { cartProducts } = useSelector((state) => state.AddProductReducers);
  // console.log("cartProducts", cartProducts);
  // console.log("dataLoading", dataLoading);
  const newData = data.slice(0, 10); // get only 10 products out of 20
  useEffect(() => {
    dispatch(GetProduct());
  }, []);
  const cartHandler = (prod) => {
    let itemsId = cartProducts.map((item) => item.id);
    if (itemsId.includes(prod.id)) {
      alert("Product has already added !!");
    } else {
      dispatch(AddProduct(prod));
    }
  };
  return (
    <div className="container">
      <div className="row mt-4">
        {dataLoading ? (
          <Loader />
        ) : (
          newData.map((prod) => (
            <div className="col-lg-3 mb-4" key={prod.id}>
              <div className="prod-card ">
                <div className="mb-3">
                  <img src={prod.image} alt="" />
                </div>
                <div className="p-3">
                  <h4>{prod.category}</h4>
                  <p>{prod.description.substring(0, 100)}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{prod.price}</span>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        cartHandler(prod);
                      }}
                    >
                      {cartProducts.map((item) => item.id).includes(prod.id)
                        ? "Product addded "
                        : "Add To Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
