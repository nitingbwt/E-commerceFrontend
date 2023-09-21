import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo.png";
import sidefooter from "../images/sidemenu-footer.jpg"
import Login from "./Login";
import icon1 from '../images/health&beauty (2).png';
import icon2 from '../images/Machinery.png';
import icon3 from '../images/chemical.png';
import icon4 from '../images/apparel (2).png';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
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
            <div className="col-lg-2 col-6 order-1 order-lg-1">
              <NavLink to="/">
                <img src={Logo} height={40} />
              </NavLink>
            </div>
            <div className="col-lg-1 col-6 order-1 order-lg-1">
            <nav className="navbar">
            <div>
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-start first-offcanva" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                <NavLink to="/">
                <img src={Logo} height={40} style={{paddingLeft:'2rem'}} />
              </NavLink>
                  <button type="button" className="btn-close offcanva-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body first-offcanvabody">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#"><b>Value of the Day</b></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Top 100 Offers</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">New Arrivals</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle first-toggler fw-normal" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Computers & Accessories
                      </a>
                      <ul className="dropdown-menu first-toggler-btn">
                      <li><h2 class="dropdown-header dropdown-item fw-semibold">Computers & Accessories</h2></li>
                        <li><a className="dropdown-item" href="#">All Computers & Accessories</a></li>
                        <li><a className="dropdown-item" href="#">Laptops, Desktops & Monitors</a></li>
                        <li><a className="dropdown-item" href="#">Printers & Ink</a></li>
                        <li><a className="dropdown-item" href="#">Networking & Internet Devices</a></li>
                        <li><a className="dropdown-item" href="#">Computer Accessories</a></li>
                        <li><a className="dropdown-item" href="#">Software</a></li>
                        <li><h2 class="dropdown-header dropdown-item fw-semibold">Office & Stationery</h2></li>
                        <li><a className="dropdown-item" href="#">All Office & Stationery</a></li>
                        <li><a className="dropdown-item" href="#">All Electronics</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle fw-normal" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cameras, Audio & Video
                    </a>
                    <ul className="dropdown-menu first-toggler-btn">
                    <li><h2 class="dropdown-header dropdown-item fw-semibold">Cameras & Photography</h2></li>
                      <li><a className="dropdown-item" href="#">Lenses</a></li>
                      <li><a className="dropdown-item" href="#">Camera Accessories</a></li>
                      <li><a className="dropdown-item" href="#">Security & Surveillance</a></li>
                      <li><a className="dropdown-item" href="#">Binoculars & Telescopes</a></li>
                      <li><a className="dropdown-item" href="#">Camcorders</a></li>
                      <li><a className="dropdown-item" href="#">Software</a></li>
                      <li><h2 class="dropdown-header dropdown-item fw-semibold">Audio & Video</h2></li>
                      <li><a className="dropdown-item" href="#">All Audio & Video</a></li>
                      <li><a className="dropdown-item" href="#">Headphones & Speakers</a></li>
                      <li><a className="dropdown-item" href="#">All Electronics</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle fw-normal" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Mobiles & Tablets
                    </a>
                    <ul className="dropdown-menu first-toggler-btn">
                    <li><h2 class="dropdown-header dropdown-item fw-semibold">All Mobile Phones</h2></li>
                      <li><a className="dropdown-item" href="#">Smartphones</a></li>
                      <li><a className="dropdown-item" href="#">Refurbished Mobiles</a></li>
                      <li><a className="dropdown-item" href="#">Cases & Covers</a></li>
                      <li><a className="dropdown-item" href="#">All Tablets</a></li>
                      <li><a className="dropdown-item" href="#">Tablet Accessories</a></li>
                      <li><a className="dropdown-item" href="#">All Electronics</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle fw-normal" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Movies, Music & Video
                    </a>
                    <ul className="dropdown-menu first-toggler-btn">
                    <li><h2 class="dropdown-header dropdown-item fw-semibold">Movies & TV Shows</h2></li>
                      <li><a className="dropdown-item" href="#">All Movies & TV Shows</a></li>
                      <li><a className="dropdown-item" href="#">All English</a></li>
                      <li><a className="dropdown-item" href="#">All Hindi</a></li>
                      <li><h2 class="dropdown-header dropdown-item fw-semibold">Video Games</h2></li>
                      <li><a className="dropdown-item" href="#">PC Games</a></li>
                      <li><a className="dropdown-item" href="#">Consoles</a></li>
                      <li><a className="dropdown-item" href="#">Accessories</a></li>
                      <li><h2 class="dropdown-header dropdown-item fw-semibold">Music</h2></li>
                      <li><a className="dropdown-item" href="#">All Music</a></li>
                      <li><a className="dropdown-item" href="#">Indian Classical</a></li>
                      <li><a className="dropdown-item" href="#">Musical Instruments</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle fw-normal" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    TV & Audio
                    </a>
                    <ul className="dropdown-menu first-toggler-btn">
                    <li><h2 class="dropdown-header dropdown-item fw-semibold">Audio & Video</h2></li>
                      <li><a className="dropdown-item" href="#">All Audio & Video</a></li>
                      <li><a className="dropdown-item" href="#">Televisions</a></li>
                      <li><a className="dropdown-item" href="#">Headphones</a></li>
                      <li><a className="dropdown-item" href="#">Speakers</a></li>
                      <li><a className="dropdown-item" href="#">Audio & Video Accessories</a></li>
                      <li><h2 class="dropdown-header dropdown-item fw-semibold">Music</h2></li>
                      <li><a className="dropdown-item" href="#">Televisions</a></li>
                      <li><a className="dropdown-item" href="#">Headphones</a></li>
                      <li><a className="dropdown-item" href="#">Electro Home Appliances</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle fw-normal" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Watches & Eyewear
                    </a>
                    <ul className="dropdown-menu first-toggler-btn">
                    <li><h2 class="dropdown-header dropdown-item fw-semibold">Watches</h2></li>
                      <li><a className="dropdown-item" href="#">All Watches</a></li>
                      <li><a className="dropdown-item" href="#">Men's Watches</a></li>
                      <li><a className="dropdown-item" href="#">Women's Watches</a></li>
                      <li><a className="dropdown-item" href="#">Premium Watches</a></li>
                      <li><a className="dropdown-item" href="#">Deals on Watches</a></li>
                      <li><h2 class="dropdown-header dropdown-item fw-semibold">Eyewear</h2></li>
                      <li><a className="dropdown-item" href="#">Men's Sunglasses</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle fw-normal" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Car, Motorbike & Industrial
                    </a>
                    <ul className="dropdown-menu first-toggler-btn">
                    <li><h2 class="dropdown-header dropdown-item fw-semibold">Car & Motorbike</h2></li>
                      <li><a className="dropdown-item" href="#">All Cars & Bikes</a></li>
                      <li><a className="dropdown-item" href="#">Cars & Bikes</a></li>
                      <li><a className="dropdown-item" href="#">Lubricants</a></li>
                      <li><h2 class="dropdown-header dropdown-item fw-semibold">Shop for Bike</h2></li>
                      <li><a className="dropdown-item" href="#">Helmets & Gloves</a></li>
                      <li><a className="dropdown-item" href="#">Bike Parts</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle fw-normal" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Accessories
                    </a>
                    <ul className="dropdown-menu first-toggler-btn">
                      <li><a className="dropdown-item" href="#">Chargers</a></li>
                      <li><a className="dropdown-item" href="#">Headphone Accessories</a></li>
                      <li><a className="dropdown-item" href="#">Headphone Cases</a></li>
                      <li><a className="dropdown-item" href="#">Headphones</a></li>
                      <li><a className="dropdown-item" href="#">All Industrial Supplies</a></li>
                    </ul>
                    </li>
                  </ul>
                </div>
                <img src={sidefooter} className=" side-image" alt="" />
              </div>
            </div>
              </nav>
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
      
        <div className="col-md-3 d-flex justify-content-end">
        <nav id="navbar-example2" className="navbar  mb-3 bg-warning" >
        <ul className="nav nav-pills " style={{
          padding:"6px 5rem",
          borderRadius:"20px"
        }}>
          <li className={`nav-item dropdown ${isOpen ? 'show' : ''}`}>
            <a className="nav-link " href="#" role="button" aria-expanded={isOpen ? 'true' : 'false'}
              onClick={toggleDropdown}
            ><i className="fa fa-bars"></i>&emsp;All Departments</a>
            <div className={`dropdown-menu ${isOpen ? 'show slide-down' : ''}`}>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading3">Third</a>
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading4">Fourth</a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading5">Fifth</a>
              </li>
            </div>
          </li>
        </ul>
      </nav>
        </div>


          <div className="col-md-9">
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
