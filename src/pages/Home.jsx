import React, { useEffect, useState } from "react";
import "../App.css";
import "../mobile.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FaCartArrowDown } from "react-icons/fa";
import Img1 from "../assets/images/image1.png";
import Cat1 from "../assets/images/category-1.jpg";
import Cat2 from "../assets/images/category-2.jpg";
import Cat3 from "../assets/images/category-3.jpg";
import U1 from "../assets/images/user-1.png";
import U2 from "../assets/images/user-2.png";
import U3 from "../assets/images/user-3.png";
import OfferImg from "../assets/images/exclusive.png";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import LogoWhite from "../assets/images/logo-white.png";
import PlayStore from "../assets/images/play-store.png";
import AppStore from "../assets/images/app-store.png";
import { FEATURED__PROD, LATEST__PROD } from "../components/Data";
import { useDispatch, useSelector } from "react-redux";
import { AddToCartAction } from "../store/Actions/AddToCartAction";
import { dbCollection, getDocs } from "../firebase/firebase";

const Home = () => {
  const [cartProd, setCartProd] = useState([]);
  const navigate = useNavigate();
  const islogin = localStorage.getItem("uid");
  // to access global states
  const selctor = useSelector((state) => state.addToCartReducer);
  // dispatch action
  const dispatch = useDispatch();
  // effect for manage route
  useEffect(() => {
    if (!islogin) {
      navigate("/");
    }
  }, []);
  // get cart products data
  let allProducts = [];
  const getCartProducts = async () => {
    const snapShot = await getDocs(dbCollection);
    // console.log(snapShot.docs.length);
    snapShot.forEach((doc) => {
      allProducts.push(doc.data());
    });
    // console.log("product added in final array");
    setCartProd([...allProducts]);
    console.log("allProducts", allProducts);
  };
  // to get firebase data when global state length changes
  useEffect(() => {
    getCartProducts();
  }, [selctor.cartItems]);

  // call on every add to cart button click
  const cartHandle = (prod) => {
    const itemsId = cartProd.map((item) => item.prodId);
    // console.log("itemsId", itemsId);

    if (itemsId.includes(prod.prodId)) {
      alert("product already present");
      return;
    } else {
      dispatch(AddToCartAction(prod));
    }
  };
  const logoutHandler = () => {
    localStorage.removeItem("uid");
  };

  return (
    <>
      {/* <!-- --------------------header-section------------------------------- --> */}
      <div className="header">
        <div className="container">
          <section className="header__sec">
            <div className="navbar-container">
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
                      {cartProd.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="row">
            <div className="col-2">
              <h1>
                Give Your Workout <br />A New Style!
              </h1>
              <p>
                Success is not always about greatness. Its about consistency.
                Consistent <br />
                hardwork gain success. Greatness will come
              </p>
              <Link className="btn">
                Explore Now <span>&#8594;</span>{" "}
              </Link>
            </div>
            <div className="col-2">
              <img src={Img1} alt="header-image" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ------------------feature section--------------------- --> */}
      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src={Cat1} alt="" />
            </div>
            <div className="col-3">
              <img src={Cat2} alt="" />
            </div>
            <div className="col-3">
              <img src={Cat3} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ------------------feature products--------------------------- --> */}
      <div className="small-container">
        <h2 className="title" id="featureProducts">
          Featured Products
        </h2>
        <div className="row">
          {/* <!-- product-1 --> */}
          {FEATURED__PROD.map((prod) => (
            <div className="col-4" key={prod.prodId}>
              <img src={prod.prodImg} alt={prod.prodId} />
              <h4>{prod.prodName}</h4>
              <div className="rating">
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarHalf
                  size={20}
                  color={"#ff523b"}
                  style={{ marginBottom: "5px" }}
                />
              </div>
              <div className="prod-card-footer">
                <p>{prod.prodPrice}</p>
                <button className="btn">
                  <Link
                    className="btn-card"
                    onClick={() => {
                      cartHandle(prod);
                    }}
                  >
                    {cartProd.map((prod) => prod.prodId).includes(prod.prodId)
                      ? "Product added"
                      : "Add To Cart"}
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- --------------Latest Products------------------ --> */}
        <h2 className="title">Latest Products</h2>
        <div className="row">
          {LATEST__PROD.map((prod) => (
            <div className="col-4" key={prod.prodId}>
              <img src={prod.prodImg} alt={prod.prodId} />
              <h4>{prod.prodName}</h4>
              <div className="rating">
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStar
                  size={20}
                  color={"#ff523b"}
                  style={{ marginBottom: "5px" }}
                />
              </div>
              <div className="prod-card-footer">
                <p>{prod.prodPrice}</p>
                <Link
                  className="btn btn-card"
                  onClick={() => {
                    cartHandle(prod);
                  }}
                >
                  {cartProd.map((prod) => prod.prodId).includes(prod.prodId)
                    ? "Product added"
                    : "Add To Cart"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ------------ offer section ----------- */}
      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src={OfferImg} alt="exclusive-img" className="offer-image" />
            </div>
            <div className="col-2">
              <p>Exclusively available on RedStore</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi smart band 4 feature a 39.9% larger (than Mi band 3)
                AMOLED color full touched display with adjustible brightness. so
                everything is clear as can
              </small>
              <Link className="btn buy">Buy Now &#8594; </Link>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------- testimonials -------------------- */}
      <div className="testimonials">
        <div className="small-container">
          <div className="row">
            {/* <!-- client 1 --> */}
            <div className="col-3">
              <FaQuoteLeft size={33} color={"#ff523b"} />
              <p>
                Lorem ipsum dolor sit amet, consectetur vel culpa sequi
                perspiciatis porro repudiandae est doloremque corporis similique
                nam, tempora dicta, sit cum ipsam? Exercitationem, quod?
              </p>
              <div className="rating">
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{ marginBottom: "5px" }}
                />
                <br />
                <img src={U1} />
                <h3>Sean Parker</h3>
              </div>
            </div>

            {/* <!-- client 2 --> */}
            <div className="col-3">
              <FaQuoteLeft size={33} color={"#ff523b"} />
              <p>
                Lorem ipsum dolor sit amet, consectetur vel culpa sequi
                perspiciatis porro repudiandae est doloremque corporis similique
                nam, tempora dicta, sit cum ipsam? Exercitationem, quod?
              </p>
              <div className="rating">
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{ marginBottom: "5px" }}
                />
                <br />
                <img src={U2} />
                <h3>Mike Smith</h3>
              </div>
            </div>
            {/* <!-- client 3 --> */}
            <div className="col-3">
              <FaQuoteLeft size={33} color={"#ff523b"} />
              <p>
                Lorem ipsum dolor sit amet, consectetur vel culpa sequi
                perspiciatis porro repudiandae est doloremque corporis similique
                nam, tempora dicta, sit cum ipsam? Exercitationem, quod?
              </p>
              <div className="rating">
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{
                    marginRight: "6px",
                    marginBottom: "5px",
                    marginTop: "3px",
                  }}
                />
                <BsStarFill
                  size={20}
                  color={"#ff523b"}
                  style={{ marginBottom: "5px" }}
                />
                <br />
                <img src={U3} /> <br />
                <h3>Mabel Joe</h3>
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

export default Home;
