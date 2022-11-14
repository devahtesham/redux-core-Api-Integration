import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import "../mobile.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import LogoWhite from "../assets/images/logo-white.png";
import Img1 from "../assets/images/image1.png";
import PlayStore from "../assets/images/play-store.png";
import AppStore from "../assets/images/app-store.png";
import { FaCartArrowDown } from "react-icons/fa";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  db,
  setDoc,
} from "../firebase/firebase";

const Account = () => {
  const navigate = useNavigate();
  const islogin = localStorage.getItem("uid");
  useEffect(() => {
    if (islogin) {
      navigate("/home");
    }
  });
  //firebse authentication
  const auth = getAuth();
  // states for styling
  const [loginBtn, setLoginBtn] = useState("");
  const [signupBtn, setsignupBtn] = useState("");
  const [indicator, setIndicator] = useState("");
  const [loginForm, setLoginForm] = useState("");
  const [signupForm, setSignupForm] = useState("");
  // refs for styling
  const loginBtnRef = useRef(null); //login btn
  const signupBtnRef = useRef(null); //login bt
  const indicatorRef = useRef(null); // indicator
  const loginFormRef = useRef(null);
  const signupFormRef = useRef(null);

  // signup/login form handle states & functions
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const userNameHandler = (e) => {
    setFullName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setpassword(e.target.value);
  };
  const loginEmailHandler = (e) => {
    setLoginEmail(e.target.value);
  };
  const loginPasswordHandler = (e) => {
    setLoginPassword(e.target.value);
  };

  useEffect(() => {
    // console.log("loginbtn", loginBtnRef.current);
    setLoginBtn(loginBtnRef.current);
    // console.log("signupbtn", signupBtnRef.current);
    setsignupBtn(signupBtnRef.current);
    // console.log("indicator", indicatorRef.current);
    setIndicator(indicatorRef.current);
    // console.log("loginForm", loginFormRef.current);
    setLoginForm(loginFormRef.current);
    // console.log("signupForm", signupFormRef.current);
    setSignupForm(signupFormRef.current);
  }, []);
  //

  // login btn
  const loginBtnHandler = (e) => {
    // console.log("loginBtn", loginBtn);
    // console.log("signupBtn", signupBtn);
    // console.log("indicator", indicator);
    // console.log("loginForm", loginForm);
    // console.log("signupForm", signupForm);

    loginForm.style.transform = "translateX(300px)";
    signupForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
  };
  // signup btn
  const signupBtnHandler = (e) => {
    signupForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
  };
  // login form
  const loginFormHandler = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      alert("Please Enter Valid Details");
      return;
    } else {
      signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((cred) => {
          console.log("credentials", cred);
          localStorage.setItem("uid", cred.user.uid);
          setLoginEmail("");
          setLoginPassword("");
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // signup form
  const signupFormHandler = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      alert("Please Enter Valid Details");
      return;
    } else {
      // console.log(fullName, email, password);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (cred) => {
          console.log("credentials", cred);
          // add user data to firestore
          const myObj = {
            name: fullName,
            email: email,
            uid: cred.user.uid,
          };
          const docRef = doc(db, "users", cred.user.uid);
          await setDoc(docRef, myObj);
          // we use set doc instead of add doc bcz we want to make custom id
          setFullName("");
          setEmail("");
          setpassword("");
          loginBtnHandler();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <section className="header__sec">
        <div className="container">
          <div className="navbar account-nav">
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
            {/* <div>
              <div className="bucket-container">
                <span className="cart-img">
                  <FaCartArrowDown size={23} />
                </span>
                <span className="cart-counter">
                  <h5>Your Cart</h5>
                </span>
                <span className="cart-counter counter">0</span>
              </div>
            </div> */}
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
                    ref={loginBtnRef}
                  >
                    Login
                  </span>
                  <span
                    id="signupBtn"
                    onClick={signupBtnHandler}
                    ref={signupBtnRef}
                  >
                    Register
                  </span>
                  <hr id="indicator" ref={indicatorRef} />
                </div>
                {/* // login form */}
                <form
                  id="loginForm"
                  onSubmit={loginFormHandler}
                  ref={loginFormRef}
                >
                  <input
                    type="email"
                    placeholder="Email"
                    value={loginEmail}
                    onChange={loginEmailHandler}
                  />
                  <input
                    type="password"
                    placeholder="password"
                    value={loginPassword}
                    onChange={loginPasswordHandler}
                  />
                  <button type="submit" className="btn">
                    Login
                  </button>
                  <Link to="">Forgot password</Link>
                </form>
                {/* // signup form */}
                <form
                  id="signupForm"
                  onSubmit={signupFormHandler}
                  ref={signupFormRef}
                >
                  <input
                    type="text"
                    placeholder="Username"
                    value={fullName}
                    onChange={userNameHandler}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={emailHandler}
                  />
                  <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={passwordHandler}
                  />
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
          <p className="copyright">
            Copyright 2020 - Ahtesham Akram | DevAhtesham
          </p>
        </div>
      </div>
    </>
  );
};

export default Account;
