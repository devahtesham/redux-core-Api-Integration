import React, { useRef } from "react";
import "../App.css";
import "../mobile.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import LogoWhite from "../assets/images/logo-white.png";
import Img1 from "../assets/images/image1.png";
import PlayStore from "../assets/images/play-store.png";
import AppStore from "../assets/images/app-store.png";
import { FaCartArrowDown } from "react-icons/fa";

const Account = () => {
  //   const loginForm = document.getElementById("loginForm")
  // const signupForm = document.getElementById("signupForm")
  // const indicator = document.getElementById("indicator");

  const loginFormRef = useRef();
  const loginForm = loginFormRef.current;
  const signupFormRef = useRef();
  const signupForm = signupFormRef.current;
  const indicatorRef = useRef();
  const indicator = indicatorRef.current;
  console.log("loginForm", loginForm);
  console.log("signupForm", signupForm);
  console.log("indicator", indicator);
  // login btn
  const loginBtnHandler = (e) => {
    // loginForm.style.transform = "translateX(300px)";
    // signupForm.style.transform = "translateX(300px)";
    // indicator.style.transform = "translateX(0px)";
  };
  // signup btn
  const signupBtnHandler = (e) => {
    // signupForm.style.transform = "translateX(0px)";
    // loginForm.style.transform = "translateX(0px)";
    // indicator.style.transform = "translateX(100px)";
  };
  // login form
  const loginFormHandler = (e) => {};
  // signup form
  const signupFormHandler = (e) => {};
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
      <div className="account-page">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <img src={Img1} />
            </div>
            <div className="col-2">
              <div className="form-container">
                <div className="form-btn">
                  <span
                    id="loginBtn"
                    onClick={loginBtnHandler}
                    ref={loginFormRef}
                  >
                    Login
                  </span>
                  <span
                    id="signupBtn"
                    onClick={signupBtnHandler}
                    ref={signupFormRef}
                  >
                    Register
                  </span>
                  <hr id="indicator" ref={indicatorRef} />
                </div>
                <form id="loginForm" onSubmit={loginFormHandler}>
                  <input type="text" placeholder="Username" />
                  <input type="password" placeholder="password" />
                  <button type="submit" className="btn">
                    Login
                  </button>
                  <Link to="">Forgot password</Link>
                </form>
                <form id="signupForm" onSubmit={signupFormHandler}>
                  <input type="text" placeholder="Username" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="password" />
                  <button type="submit" className="btn">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <p className="copyright">Copyright 2020 - Ahtesham Akram | Ak</p>
        </div>
      </div>
    </>
  );
};

export default Account;
