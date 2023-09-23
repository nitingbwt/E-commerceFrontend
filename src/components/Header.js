import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo.png";
import Login from "./Login";

const Header = () => {
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
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  )
}

export default Header