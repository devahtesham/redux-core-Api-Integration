import React from "react";
import "../App.css";
import "../mobile.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FaCartArrowDown } from "react-icons/fa";
import Img1 from "../assets/images/image1.png";
import Cat1 from "../assets/images/category-1.jpg";
import Cat2 from "../assets/images/category-2.jpg";
import Cat3 from "../assets/images/category-3.jpg";
import P1 from "../assets/images/product-1.jpg";
import P2 from "../assets/images/product-2.jpg";
import P3 from "../assets/images/product-3.jpg";
import P4 from "../assets/images/product-4.jpg";
import P5 from "../assets/images/product-5.jpg";
import P6 from "../assets/images/product-6.jpg";
import P7 from "../assets/images/product-7.jpg";
import P8 from "../assets/images/product-8.jpg";
import P9 from "../assets/images/product-9.jpg";
import P10 from "../assets/images/product-10.jpg";
import P11 from "../assets/images/product-11.jpg";
import P12 from "../assets/images/product-12.jpg";
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

const Home = () => {
  return (
    <>
      {/* <!-- --------------------header-section------------------------------- --> */}
      <div className="header">
        <div className="container">
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
          <div className="col-4">
            <img src={P1} alt="product-1" />
            <h4>Red Printed T-Shirt</h4>
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
              <p>$50.00</p>
              <Link className="btn btn-card">Add To Cart </Link>
            </div>
          </div>
          {/* <!-- product-2 --> */}
          <div className="col-4">
            <img src={P2} alt="product-1" />
            <h4>Shoes</h4>
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
              <p>$40.00</p>
              <Link className="btn btn-card">Add To Cart </Link>
            </div>
          </div>
          {/* <!-- product-3 --> */}
          <div className="col-4">
            <img src={P3} alt="product-1" />
            <h4>Branded Trouser</h4>
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
              <p>$32.00</p>
              <Link className="btn btn-card">Add To Cart </Link>
            </div>
          </div>
          {/* <!-- product-4 --> */}
          <div className="col-4">
            <img src={P4} alt="product-1" />
            <h4>Blue polo T-Shirt</h4>
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
              <BsStarHalf
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
              <p>$50.00</p>
              <Link className="btn btn-card">Add To Cart </Link>
            </div>
          </div>
        </div>
        {/* <!-- --------------Latest Products------------------ --> */}
        <h2 className="title">Latest Products</h2>
        <div className="row">
          {/* <!-- product-5 --> */}
          <div className="col-4">
            <img src={P5} alt="product-1" />
            <h4>Grey Shoes</h4>
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
              <p>$20.00</p>
              <Link className="btn btn-card">Add To Cart </Link>
            </div>
          </div>
          {/* <!-- product-6 --> */}
          <div className="col-4">
            <img src={P6} alt="product-1" />
            <h4>Black Puma T-Shirt</h4>
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
              <p>$50.00</p>
              <Link className="btn btn-card">Add To Cart </Link>
            </div>
          </div>
          {/* <!-- product-7 --> */}
          <div className="col-4">
            <img src={P7} alt="product-1" />
            <h4>Pack of socks</h4>
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
              <p>$20.00</p>
              <Link className="btn btn-card">Add To Cart </Link>
            </div>
          </div>
          {/* <!-- product-8 --> */}
          <div className="col-4">
            <img src={P8} alt="product-1" />
            <h4>Fossil Hand Watch</h4>
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
              <p>$60.00</p>
              <Link className="btn btn-card">Add To Cart </Link>
            </div>
          </div>
          {/* <!-- product-9 --> */}
          <div className="col-4">
            <img src={P9} alt="product-1" />
            <h4>Rollex Hand Watch</h4>
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
              <p>$60.00</p>
              <Link className="btn btn-card">Add To Cart </Link>
            </div>
          </div>
          {/* <!-- product-10 --> */}
          <div className="col-4">
            <img src={P10} alt="product-1" />
            <h4>Nike Shoes</h4>
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
            </div>
            <div className="prod-card-footer">
              <p>$50.00</p>
              <Link className="btn btn-card">Add To Cart </Link>
            </div>
          </div>

          {/* <!-- product-11 --> */}
          <div className="col-4">
            <img src={P11} alt="product-1" />
            <h4>Addidas Shoes</h4>
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
              <p>$30.00</p>
              <Link className="btn btn-card">Add To Cart </Link>
            </div>
          </div>
          {/* <!-- product-12 --> */}
          <div className="col-4">
            <img src={P12} alt="product-1" />
            <h4>Black Trouser</h4>
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
              <BsStarHalf
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
              <p>$50.00</p>
              <Link className="btn btn-card">Add To Cart </Link>
            </div>
          </div>
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
