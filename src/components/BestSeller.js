import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import img1 from "../images/bestseller/top20/shoes-1.jpg";
import img2 from "../images/bestseller/top20/shoes-2.jpg";
import img3 from "../images/bestseller/top20/garment-1.jpg";
import img4 from "../images/bestseller/top20/garment-2.jpg";
import img5 from "../images/bestseller/top20/speces-1.jpg";
import img6 from "../images/bestseller/top20/speces-2.jpg";
import img7 from "../images/bestseller/top20/beauty-1.jpg";
import img8 from "../images/bestseller/top20/beauty-2.jpg";
import img9 from "../images/bestseller/top20/kidswear.jpg";
import img10 from "../images/bestseller/top20/TV.jpg";
import img11 from "../images/bestseller/top20/bags.jpg";
import img12 from "../images/bestseller/top20/rings.jpg";
import img13 from "../images/bestseller/top20/laptops.jpg";
import img14 from "../images/bestseller/top20/jeera.jpg";
import img15 from "../images/bestseller/top20/blackpepper.jpg";
import img16 from "../images/bestseller/top20/accessories.jpg";
import img17 from "../images/bestseller/top20/speaker.jpg";
import img18 from "../images/bestseller/top20/camera.jpg";
import img19 from "../images/bestseller/top20/mobilecover.jpg";
import img20 from "../images/bestseller/top20/glasses.jpg";
import img21 from "../images/bestseller/top20/bottle.jpg";
import img22 from "../images/bestseller/top20/watch.jpg";
import img23 from "../images/bestseller/top20/chair.jpg";

const BestSeller = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="best_seller__section">
        <div className="container">
          <div className="space-top-2">
            <div className=" d-flex justify-content-between border-bottom border-color-1 flex-md-nowrap flex-wrap border-sm-bottom-0">
              <h3 className="section-title mb-0 pb-2 font-size-22">
                Bestsellers
              </h3>
              <ul
                className="nav nav-tabs justify-content-end seller_nav__link"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Top 20
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Phones & Tablets
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Laptops & Computers
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
                style={{
                  // paddingBottom: '1rem',
                  position: 'relative'
                }}
              >
                <Carousel
                  responsive={responsive}
                  // infinite={true}
                  // autoPlay={props.deviceType !== "mobile" ? true : false}
                  // autoPlaySpeed={2000}
                  showDots={true}
                  removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                >
                  <div className="best_seller__item mx-5">
                    <ul className="row list-unstyled no-gutters mb-0 overflow-visible">
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img1}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img2}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img3}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img4}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img5}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img6}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img7}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img8}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="best_seller__item mx-5">
                    <ul className="row list-unstyled no-gutters mb-0 overflow-visible">
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img9}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img10}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img11}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img12}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img13}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img14}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img15}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img16}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="best_seller__item mx-5">
                    <ul className="row list-unstyled no-gutters mb-0 overflow-visible">
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img17}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img18}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img19}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-wd-3 col-md-3 product_item">
                        <div className="product_item__outer h-100">
                          <div className="product_item__inner p-md-4 row no-gutters">
                            <div className="col col-lg-auto product-media-left p-0">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="max-width-150 d-block"
                                tabindex="0"
                              >
                                <img
                                  className="img-fluid"
                                  style={{ height: "120px" }}
                                  src={img20}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col product_item__body">
                              <div className="mb-3">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/product-categories-7-column-full-width.html"
                                    className="font-size-12 text-gray-5"
                                    tabindex="0"
                                  >
                                    Tablets
                                  </a>
                                </div>
                                <h5 className="product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                    tabindex="0"
                                  >
                                    Tablet Air 3 WiFi 64GB Gold
                                  </a>
                                </h5>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="product_price">
                                  <span>$629,00</span>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className=" btn_add__cart"
                                    tabindex="0"
                                  >
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="product_item__footer">
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i>{" "}
                                    Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Carousel>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                ...
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSeller;
