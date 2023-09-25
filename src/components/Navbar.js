import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          {/* <a to="#">Navbar</a> */}
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {/* <li>
                    <NavLink className="dropdown-item" to="/daimaondProduct">
                      Amrican Daimond Jewellery
                    </NavLink>
                  </li> */}
                  <li>
                    <NavLink className="dropdown-item" to="/product">
                      product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/silverProduct">
                      92.5 Silver Jewellery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/brassProduct">
                      Brass American Diamond Jewellery
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
    </>
  );
};

export default Navbar;
