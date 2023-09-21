import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo.png";
import Login from "./Login";
import icon1 from '../images/health&beauty (2).png';
import icon2 from '../images/Machinery.png';
import icon3 from '../images/chemical.png';
import icon4 from '../images/apparel (2).png';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <section className="border-bottom py-3 d-none d-xl-block">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="topbar-left">
              <a href="#" className="text-gray-110 font-size-13 hover-on-dark">
                Welcome to Worldwide Electronics Store
              </a>
            </div>
            <div className="topbar-right ms-auto">
              <ul className="list-inline mb-0">
                <li className="list-inline-item mr-0 u-header-topbar">
                  <a className="u-header-topbar__nav-link" onClick={() => setShowLogin(!showLogin)}>
                    <i className="fa-regular fa-user"></i> Register{" "}
                    <span className="text-gray-50">or</span> Sign in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="herader-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-6 order-1 order-lg-1">
              <NavLink to="/">
                <img src={Logo} height={40} />
              </NavLink>
            </div>
            <div className="col-lg-6 col-12 order-3 order-lg-2">
              <form className="Search-box">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for Products"
                  aria-label="Search"
                />
                <button className="btn" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
            <div className="col-lg-3 col-6 order-2 order-lg-3 header-icons">
              <div className="form-sociallogin  justify-content-end align-items-center mt-0">
                <ul>
                  <li>
                    <NavLink to="#" className="facebook-btn">
                      <i className="fa-solid fa-code-compare"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="whatsapp-btn">
                      <i className="fa-regular fa-heart"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="twitter-btn">
                      <i className="fa-solid fa-bag-shopping"></i>
                      <span>2</span>
                    </NavLink>
                  </li>
                  <li>
                    <p>$1785.00</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg ">
              <div className="container">
                <NavLink className="navbar-brand" to="/">
                  <img
                    src="./images/logo.png"
                    alt=""
                    className="img-fluid"
                    style={{ width: "110px" }}
                  />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav text-center me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/About">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        href="#"
                      >
                        Product
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <NavLink className="dropdown-item" to="/goldProduct">
                            <img src={icon1} alt="" />
                            Health & Beauty
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/silverProduct"
                          >
                            <img src={icon2} alt="" />
                            Machinery
                          </NavLink>
                        </li>
                        
                        <li>
                          <NavLink className="dropdown-item" to="/brassProduct">
                          <img src={icon3} alt="" />
                          chemical
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/silverProduct"
                          >
                            <img src={icon4} alt="" />
                            Apparel
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Contact">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
      {/* Conditional rendering of Login component */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Navbar;
