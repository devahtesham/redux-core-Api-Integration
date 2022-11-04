import React from "react";
import "../App.css";
import "../mobile.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FaCartArrowDown } from "react-icons/fa";

const Home = () => {
  return (
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
  );
};

export default Home;
