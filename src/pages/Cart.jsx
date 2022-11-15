import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveProduct } from "../store/Actions/Product";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.AddProductReducers);
  const removeHandler = (prod) => {
    dispatch(RemoveProduct(prod));
  };
  return (
    <div className="container">
      <div className="row mt-4">
        {cartProducts.length > 0 ? (
          cartProducts.map((prod) => (
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
                        removeHandler(prod);
                      }}
                    >
                      Remove Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center mt-5">Empty Cart !!</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
