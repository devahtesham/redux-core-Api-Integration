import React, { useEffect } from "react";
import "../App.css";
import "../mobile.css";
import { json, Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FaCartArrowDown } from "react-icons/fa";
import LogoWhite from "../assets/images/logo-white.png";
import PlayStore from "../assets/images/play-store.png";
import AppStore from "../assets/images/app-store.png";
import { useState } from "react";
import {
  dbCollection,
  getDocs,
  doc,
  deleteDoc,
  db,
  getDoc,
} from "../firebase/firebase";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [userName, setUserName] = useState("");
  const localStorageItems = JSON.parse(localStorage.getItem("allProducts"));
  // console.log("cartProducts", cartProducts);
  let allProducts = [];
  const getCartProducts = async () => {
    const snapShot = await getDocs(dbCollection);
    // console.log(snapShot.docs.length);
    snapShot.forEach((doc) => {
      allProducts.push(doc.data());
    });
    // console.log("product added in final array");
    setCartProducts([...allProducts]);
    // console.log("allProducts", allProducts);
  };
  useEffect(() => {
    getCartProducts();
  }, [localStorageItems.length]);
  // get user data to show on a cart page
  const getUserData = async () => {
    const userId = localStorage.getItem("uid");
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data().name);
      setUserName(docSnap.data().name);
    } else {
      console.log("No such document!");
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  const prodRemoveHandler = (prodId) => {
    // console.log("localStorageItems", localStorageItems);
    const filteredItem = localStorageItems.filter(
      (item) => item.localId === prodId
    );
    const filteredItemId = filteredItem[0].dbId;
    const deleteProd = async () => {
      await deleteDoc(doc(db, "cartItems", filteredItemId));
    };
    deleteProd();
    const finalItems = localStorageItems.filter(
      (item) => item.dbId !== filteredItemId
    );
    getCartProducts();

    localStorage.setItem("allProducts", JSON.stringify(finalItems));
  };
  const logoutHandler = () => {
    localStorage.removeItem("uid");
  };
  return (
    <>
      <section className="header__sec">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="logo" className="logo-image" />
              </Link>
            </div>
            <nav>
              <div>
                <Link
                  to={"/"}
                  onClick={logoutHandler}
                  className="btn btn-logout"
                >
                  Log Out
                </Link>
              </div>
              <ul id="menuItems">
                <li>
                  <NavLink
                    to="/home"
                    style={({ isActive }) => {
                      return {
                        color: `${isActive && "#ff523b"}`,
                      };
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/cart"
                    style={({ isActive }) => {
                      return {
                        color: `${isActive && "#ff523b"}`,
                      };
                    }}
                  >
                    Cart
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div>
              <div className="bucket-container">
                <span className="cart-img">
                  <FaCartArrowDown size={23} />
                </span>
                <span className="cart-counter">
                  <h5>Your Cart</h5>
                </span>
                <span className="cart-counter counter">
                  {cartProducts.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------- cart products table -------------- */}
      <div className="small-container cart-page">
        {cartProducts.length > 0 ? (
          <h3 className="cart-user">
            Dear {userName}, Thanks For Your Cart !!
          </h3>
        ) : null}
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.length > 0 ? (
              cartProducts.map((prod) => (
                <tr key={prod.prodId}>
                  <td>
                    <div className="cart-info">
                      <img src={prod.prodImg} />
                      <div>
                        <p>{prod.prodName}</p>
                        <small>Price: {prod.prodPrice}</small> <br />
                        <Link
                          onClick={() => {
                            prodRemoveHandler(prod.prodId);
                          }}
                        >
                          Remove
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input type="number" min={1} max={100} placeholder={"1"} />
                  </td>
                  <td>{prod.prodPrice}</td>
                </tr>
              ))
            ) : (
              <h1>Empty Cart !</h1>
            )}
          </tbody>
        </table>
        {/* <!-- ---------------------total price------------------------- --> */}
      </div>
      {/* ---------------- footer */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <h3>Download Our App</h3>
              <p>Download App for Android and ios mobile phones</p>
              <div className="app-logo">
                <Link>
                  <img src={PlayStore} style={{ marginRight: "8px" }} />
                </Link>
                <Link>
                  <img src={AppStore} />
                </Link>
              </div>
            </div>

            <div className="footer-col-2">
              <img src={LogoWhite} alt="" />
              <p>
                Our purpose is to Sustainably Make the Pleasure and benefits of
                Sports Accessible to the many
              </p>
            </div>

            <div className="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <Link>Coupons</Link>
                </li>
                <li>
                  <Link>Blog Post</Link>
                </li>

                <li>
                  <Link>Return Policy</Link>
                </li>
                <li>
                  <Link>Join Affiliate</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col-4">
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <Link>Facebook</Link>
                </li>
                <li>
                  <Link>Twitter</Link>
                </li>
                <li>
                  <Link>Instagram</Link>
                </li>
                <li>
                  <Link>Youtube</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">
            Copyright 2020 - Ahtesham Akram | DevAhtesham
          </p>
        </div>
      </div>
    </>
  );
};

export default Cart;
