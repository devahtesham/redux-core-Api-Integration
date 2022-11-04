import React from "react";
import "../App.css";
import "../mobile.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FaCartArrowDown } from "react-icons/fa";
import LogoWhite from "../assets/images/logo-white.png";
import PlayStore from "../assets/images/play-store.png";
import AppStore from "../assets/images/app-store.png";
import P1 from "../assets/images/product-1.jpg";

const Cart = () => {
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
                <span className="cart-counter counter">0</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------- cart products table -------------- */}
      <div className="small-container cart-page">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {/* <!-- prod-1 --> */}
          <tr>
            <td>
              <div className="cart-info">
                <img src={P1} />
                <div>
                  <p>Red Printed T-shirt</p>
                  <small>Price: $50.00</small> <br />
                  <Link>Remove</Link>
                </div>
              </div>
            </td>
            <td>
              <input type="number" min={1} max={100} placeholder={"1"} />
            </td>
            <td>$50.00</td>
          </tr>
          {/* <!-- prod-2 --> */}
          <tr>
            <td>
              <div className="cart-info">
                <img src={P1} />

                <div>
                  <p>Red Printed T-shirt</p>
                  <small>Price: $50.00</small> <br />
                  <Link>Remove</Link>
                </div>
              </div>
            </td>
            <td>
              <input type="number" min={1} max={100} placeholder={"1"} />
            </td>
            <td>$50.00</td>
          </tr>
          {/* <!-- prod-3 --> */}
          <tr>
            <td>
              <div className="cart-info">
                <img src={P1} />

                <div>
                  <p>Red Printed T-shirt</p>
                  <small>Price: $50.00</small> <br />
                  <Link>Remove</Link>
                </div>
              </div>
            </td>
            <td>
              <input type="number" min={1} max={100} placeholder={"1"} />
            </td>
            <td>$50.00</td>
          </tr>
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
