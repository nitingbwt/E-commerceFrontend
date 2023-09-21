import React from "react";
import img1 from '../images/bestseller/img1.jpg';
import img2 from '../images/bestseller/img2.jpg';
import img3 from '../images/bestseller/img3.jpg';
import img4 from '../images/bestseller/img4.jpg';
import img5 from '../images/bestseller/img5.jpg';
import img6 from '../images/bestseller/img6.jpg';
import img7 from '../images/bestseller/img7.jpg';
import img8 from '../images/bestseller/img8.jpg';

const BestSeller = () => {
  return (
    <>
      <section className="best_seller__section">
        <div className="container">
          <div className="space-top-2">
            <div className=" d-flex justify-content-between border-bottom border-color-1 flex-md-nowrap flex-wrap border-sm-bottom-0">
              <h3 className="section-title mb-0 pb-2 font-size-22">Bestsellers</h3>
              <ul className="nav nav-tabs justify-content-end seller_nav__link" id="myTab" role="tablist">
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
                >
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
                              src={img1}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="col product_item__body">
                          <div className="mb-4">
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
                              <a
                                href="../shop/compare.html"
                              >
                                <i className="fa-solid fa-code-compare"></i>{" "}
                                Compare
                              </a>
                              <a
                                href="../shop/wishlist.html"
                              >
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
                              src={img2}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="col product_item__body">
                          <div className="mb-4">
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
                              <a
                                href="../shop/compare.html"
                              >
                                <i className="fa-solid fa-code-compare"></i>{" "}
                                Compare
                              </a>
                              <a
                                href="../shop/wishlist.html"
                              >
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
                              src={img3}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="col product_item__body">
                          <div className="mb-4">
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
                              <a
                                href="../shop/compare.html"
                              >
                                <i className="fa-solid fa-code-compare"></i>{" "}
                                Compare
                              </a>
                              <a
                                href="../shop/wishlist.html"
                              >
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
                              src={img4}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="col product_item__body">
                          <div className="mb-4">
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
                              <a
                                href="../shop/compare.html"
                              >
                                <i className="fa-solid fa-code-compare"></i>{" "}
                                Compare
                              </a>
                              <a
                                href="../shop/wishlist.html"
                              >
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
                              src={img5}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="col product_item__body">
                          <div className="mb-4">
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
                              <a
                                href="../shop/compare.html"
                              >
                                <i className="fa-solid fa-code-compare"></i>{" "}
                                Compare
                              </a>
                              <a
                                href="../shop/wishlist.html"
                              >
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
                              src={img6}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="col product_item__body">
                          <div className="mb-4">
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
                              <a
                                href="../shop/compare.html"
                              >
                                <i className="fa-solid fa-code-compare"></i>{" "}
                                Compare
                              </a>
                              <a
                                href="../shop/wishlist.html"
                              >
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
                              src={img7}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="col product_item__body">
                          <div className="mb-4">
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
                              <a
                                href="../shop/compare.html"
                              >
                                <i className="fa-solid fa-code-compare"></i>{" "}
                                Compare
                              </a>
                              <a
                                href="../shop/wishlist.html"
                              >
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
                              src={img8}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="col product_item__body">
                          <div className="mb-4">
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
                              <a
                                href="../shop/compare.html"
                              >
                                <i className="fa-solid fa-code-compare"></i>{" "}
                                Compare
                              </a>
                              <a
                                href="../shop/wishlist.html"
                              >
                                <i className="fa-regular fa-heart"></i>{" "}
                                Wishlist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <li className="col-wd-3 col-md-3 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                    <div className="product-item__outer h-100">
                      <div className="product-item__inner p-md-3 row no-gutters">
                        <div className="col col-lg-auto product-media-left">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="max-width-150 d-block"
                            tabindex="0"
                          >
                            <img
                              className="img-fluid"
                              src={img2}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                          <div className="mb-4">
                            <div className="mb-2">
                              <a
                                href="../shop/product-categories-7-column-full-width.html"
                                className="font-size-12 text-gray-5"
                                tabindex="0"
                              >
                                Laptops &amp; Computers
                              </a>
                            </div>
                            <h5 className="product-item__title">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="text-blue font-weight-bold"
                                tabindex="0"
                              >
                                Tablet White EliteBook Revolve 810 G2
                              </a>
                            </h5>
                          </div>
                          <div className="flex-center-between mb-3">
                            <div className="prodcut-price">
                              <div className="text-gray-100">$1 299,00</div>
                            </div>
                            <div className="d-none d-xl-block prodcut-add-cart">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="btn-add-cart btn-primary transition-3d-hover"
                                tabindex="0"
                              >
                                <i className="ec ec-add-to-cart"></i>
                              </a>
                            </div>
                          </div>
                          <div className="product-item__footer">
                            <div className="border-top pt-2 flex-center-between flex-wrap">
                              <a
                                href="../shop/compare.html"
                                className="text-gray-6 font-size-13"
                                tabindex="0"
                              >
                                <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                                Compare
                              </a>
                              <a
                                href="../shop/wishlist.html"
                                className="text-gray-6 font-size-13"
                                tabindex="0"
                              >
                                <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                                Wishlist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-wd-3 col-md-3 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 remove-divider-xl">
                    <div className="product-item__outer h-100">
                      <div className="product-item__inner p-md-3 row no-gutters">
                        <div className="col col-lg-auto product-media-left">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="max-width-150 d-block"
                            tabindex="0"
                          >
                            <img
                              className="img-fluid"
                              src={img3}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                          <div className="mb-4">
                            <div className="mb-2">
                              <a
                                href="../shop/product-categories-7-column-full-width.html"
                                className="font-size-12 text-gray-5"
                                tabindex="0"
                              >
                                Accesories
                              </a>
                            </div>
                            <h5 className="product-item__title">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="text-blue font-weight-bold"
                                tabindex="0"
                              >
                                Pendrive USB 3.0 Flash 64 GB
                              </a>
                            </h5>
                          </div>
                          <div className="flex-center-between mb-3">
                            <div className="prodcut-price">
                              <div className="text-gray-100">$110,00</div>
                            </div>
                            <div className="d-none d-xl-block prodcut-add-cart">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="btn-add-cart btn-primary transition-3d-hover"
                                tabindex="0"
                              >
                                <i className="ec ec-add-to-cart"></i>
                              </a>
                            </div>
                          </div>
                          <div className="product-item__footer">
                            <div className="border-top pt-2 flex-center-between flex-wrap">
                              <a
                                href="../shop/compare.html"
                                className="text-gray-6 font-size-13"
                                tabindex="0"
                              >
                                <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                                Compare
                              </a>
                              <a
                                href="../shop/wishlist.html"
                                className="text-gray-6 font-size-13"
                                tabindex="0"
                              >
                                <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                                Wishlist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-wd-3 col-md-3 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-wd">
                    <div className="product-item__outer h-100">
                      <div className="product-item__inner p-md-3 row no-gutters">
                        <div className="col col-lg-auto product-media-left">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="max-width-150 d-block"
                            tabindex="0"
                          >
                            <img
                              className="img-fluid"
                              src={img4}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                          <div className="mb-4">
                            <div className="mb-2">
                              <a
                                href="../shop/product-categories-7-column-full-width.html"
                                className="font-size-12 text-gray-5"
                                tabindex="0"
                              >
                                Headphones
                              </a>
                            </div>
                            <h5 className="product-item__title">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="text-blue font-weight-bold"
                                tabindex="0"
                              >
                                White Solo 2 Wireless
                              </a>
                            </h5>
                          </div>
                          <div className="flex-center-between mb-3">
                            <div className="prodcut-price">
                              <div className="text-gray-100">$110,00</div>
                            </div>
                            <div className="d-none d-xl-block prodcut-add-cart">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="btn-add-cart btn-primary transition-3d-hover"
                                tabindex="0"
                              >
                                <i className="ec ec-add-to-cart"></i>
                              </a>
                            </div>
                          </div>
                          <div className="product-item__footer">
                            <div className="border-top pt-2 flex-center-between flex-wrap">
                              <a
                                href="../shop/compare.html"
                                className="text-gray-6 font-size-13"
                                tabindex="0"
                              >
                                <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                                Compare
                              </a>
                              <a
                                href="../shop/wishlist.html"
                                className="text-gray-6 font-size-13"
                                tabindex="0"
                              >
                                <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                                Wishlist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-wd-3 col-md-3 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                    <div className="product-item__outer h-100">
                      <div className="product-item__inner p-md-3 row no-gutters">
                        <div className="col col-lg-auto product-media-left">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="max-width-150 d-block"
                            tabindex="0"
                          >
                            <img
                              className="img-fluid"
                              src={img5}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                          <div className="mb-4">
                            <div className="mb-2">
                              <a
                                href="../shop/product-categories-7-column-full-width.html"
                                className="font-size-12 text-gray-5"
                                tabindex="0"
                              >
                                Smartwatches
                              </a>
                            </div>
                            <h5 className="product-item__title">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="text-blue font-weight-bold"
                                tabindex="0"
                              >
                                Smartwatch 2.0 LTE Wifi
                              </a>
                            </h5>
                          </div>
                          <div className="flex-center-between mb-3">
                            <div className="prodcut-price">
                              <div className="text-gray-100">$110,00</div>
                            </div>
                            <div className="d-none d-xl-block prodcut-add-cart">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="btn-add-cart btn-primary transition-3d-hover"
                                tabindex="0"
                              >
                                <i className="ec ec-add-to-cart"></i>
                              </a>
                            </div>
                          </div>
                          <div className="product-item__footer">
                            <div className="border-top pt-2 flex-center-between flex-wrap">
                              <a
                                href="../shop/compare.html"
                                className="text-gray-6 font-size-13"
                                tabindex="0"
                              >
                                <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                                Compare
                              </a>
                              <a
                                href="../shop/wishlist.html"
                                className="text-gray-6 font-size-13"
                                tabindex="0"
                              >
                                <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                                Wishlist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-wd-3 col-md-3 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-xl">
                    <div className="product-item__outer h-100">
                      <div className="product-item__inner p-md-3 row no-gutters">
                        <div className="col col-lg-auto product-media-left">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="max-width-150 d-block"
                            tabindex="0"
                          >
                            <img
                              className="img-fluid"
                              src={img6}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                          <div className="mb-4">
                            <div className="mb-2">
                              <a
                                href="../shop/product-categories-7-column-full-width.html"
                                className="font-size-12 text-gray-5"
                                tabindex="0"
                              >
                                Smartwatches
                              </a>
                            </div>
                            <h5 className="product-item__title">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="text-blue font-weight-bold"
                                tabindex="0"
                              >
                                Gear Virtual Reality
                              </a>
                            </h5>
                          </div>
                          <div className="flex-center-between mb-3">
                            <div className="prodcut-price">
                              <div className="text-gray-100">$799,00</div>
                            </div>
                            <div className="d-none d-xl-block prodcut-add-cart">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="btn-add-cart btn-primary transition-3d-hover"
                                tabindex="0"
                              >
                                <i className="ec ec-add-to-cart"></i>
                              </a>
                            </div>
                          </div>
                          <div className="product-item__footer">
                            <div className="border-top pt-2 flex-center-between flex-wrap">
                              <a
                                href="../shop/compare.html"
                                className="text-gray-6 font-size-13"
                                tabindex="0"
                              >
                                <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                                Compare
                              </a>
                              <a
                                href="../shop/wishlist.html"
                                className="text-gray-6 font-size-13"
                                tabindex="0"
                              >
                                <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                                Wishlist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-wd-3 col-md-3 product-item product-item__card d-none d-wd-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                    <div className="product-item__outer h-100">
                      <div className="product-item__inner p-md-3 row no-gutters">
                        <div className="col col-lg-auto product-media-left">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="max-width-150 d-block"
                            tabindex="0"
                          >
                            <img
                              className="img-fluid"
                              src={img7}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                          <div className="mb-4">
                            <div className="mb-2">
                              <a
                                href="../shop/product-categories-7-column-full-width.html"
                                className="font-size-12 text-gray-5"
                                tabindex="0"
                              >
                                Gadgets
                              </a>
                            </div>
                            <h5 className="product-item__title">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="text-blue font-weight-bold"
                                tabindex="0"
                              >
                                External SSD USB 3.1 750 GB
                              </a>
                            </h5>
                          </div>
                          <div className="flex-center-between mb-3">
                            <div className="prodcut-price">
                              <div className="text-gray-100">$799,00</div>
                            </div>
                            <div className="d-none d-xl-block prodcut-add-cart">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="btn-add-cart btn-primary transition-3d-hover"
                                tabindex="0"
                              >
                                <i className="ec ec-add-to-cart"></i>
                              </a>
                            </div>
                          </div>
                          <div className="product-item__footer">
                            <div className="border-top pt-2 flex-center-between flex-wrap">
                              <a
                                href="../shop/compare.html"
                                className="text-gray-6 font-size-13"
                                tabindex="0"
                              >
                                <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                                Compare
                              </a>
                              <a
                                href="../shop/wishlist.html"
                                className="text-gray-6 font-size-13"
                                tabindex="0"
                              >
                                <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                                Wishlist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-wd-3 col-md-3 product-item product-item__card d-none d-wd-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-wd">
                    <div className="product-item__outer h-100">
                      <div className="product-item__inner p-md-3 row no-gutters">
                        <div className="col col-lg-auto product-media-left">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="max-width-150 d-block"
                            tabindex="0"
                          >
                            <img
                              className="img-fluid"
                              src={img8}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                          <div className="mb-4">
                            <div className="mb-2">
                              <a
                                href="../shop/product-categories-7-column-full-width.html"
                                className="font-size-12 text-gray-5"
                                tabindex="0"
                              >
                                Cameras
                              </a>
                            </div>
                            <h5 className="product-item__title">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="text-blue font-weight-bold"
                                tabindex="0"
                              >
                                Purple NX Mini F1 aparat SMART NX
                              </a>
                            </h5>
                          </div>
                          <div className="flex-center-between mb-3">
                            <div className="prodcut-price">
                              <div className="text-gray-100">$559.00</div>
                            </div>
                            <div className="d-none d-xl-block prodcut-add-cart">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="btn-add-cart btn-primary transition-3d-hover"
                                tabindex="0"
                              >
                                <i className="ec ec-add-to-cart"></i>
                              </a>
                            </div>
                          </div>
                          <div className="product-item__footer">
                            <div className="border-top pt-2 flex-center-between flex-wrap">
                              <a
                                href="../shop/compare.html"
                                className="text-gray-6 font-size-13"
                                tabindex="0"
                              >
                                <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                                Compare
                              </a>
                              <a
                                href="../shop/wishlist.html"
                                className="text-gray-6 font-size-13"
                                tabindex="0"
                              >
                                <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                                Wishlist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> */}
                </ul>
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
