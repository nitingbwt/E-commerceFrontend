import React from "react";
import img1 from '../images/product/img1.jpg';
import img2 from '../images/product/img2.jpg';
import img3 from '../images/product/img3.jpg';
import img4 from '../images/product/img4.jpg';
import img5 from '../images/product/img5.jpg';
import img6 from '../images/product/img6.jpg';
import img7 from '../images/product/img7.jpg';
import img8 from '../images/product/img8.jpg';

const Products = () => {
  return (
    <>
      <section className="product__section my-5">
        <div className="container">
          <nav>
            <div
              className="nav nav-tabs justify-content-center mb-3"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Featured
              </button>
              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                On Sale
              </button>
              <button
                className="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Top Rated
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="row">
                <div className="col-6 col-wd-3 col-md-3 product_item p-0">
                  <div className="product_item__outer h-100">
                    <div className="product_item__inner p-4">
                      <div className="product_item__body pb-xl-2">
                        <div className="mb-2 product_item__heading">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5 mb-2"
                          >
                            Speakers
                          </a>
                          </div>
                        <h5 className="mb-1 product_item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="d-block text-center"
                          >
                            <img
                              className="img-fluid"
                              src={img1}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <div className="product_price">
                            <span>$685,00</span>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn_add__cart"
                            >
                              <i className="fa-solid fa-cart-arrow-down"></i>
                            </a>
                          </div>
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
                            Add to Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-wd-3 col-md-3 product_item p-0">
                  <div className="product_item__outer h-100">
                    <div className="product_item__inner p-4">
                      <div className="product_item__body pb-xl-2">
                        <div className="mb-2 product_item__heading">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5 mb-2"
                          >
                            Speakers
                          </a>
                          </div>
                        <h5 className="mb-1 product_item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="d-block text-center"
                          >
                            <img
                              className="img-fluid"
                              src={img2}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <div className="product_price">
                            <span>$685,00</span>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn_add__cart"
                            >
                              <i className="fa-solid fa-cart-arrow-down"></i>
                            </a>
                          </div>
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
                            Add to Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-wd-3 col-md-3 product_item p-0">
                  <div className="product_item__outer h-100">
                    <div className="product_item__inner p-4">
                      <div className="product_item__body pb-xl-2">
                        <div className="mb-2 product_item__heading">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5 mb-2"
                          >
                            Speakers
                          </a>
                          </div>
                        <h5 className="mb-1 product_item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="d-block text-center"
                          >
                            <img
                              className="img-fluid"
                              src={img3}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <div className="product_price">
                            <span>$685,00</span>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn_add__cart"
                            >
                              <i className="fa-solid fa-cart-arrow-down"></i>
                            </a>
                          </div>
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
                            Add to Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-wd-3 col-md-3 product_item p-0">
                  <div className="product_item__outer h-100">
                    <div className="product_item__inner p-4">
                      <div className="product_item__body pb-xl-2">
                        <div className="mb-2 product_item__heading">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5 mb-2"
                          >
                            Speakers
                          </a>
                          </div>
                        <h5 className="mb-1 product_item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="d-block text-center"
                          >
                            <img
                              className="img-fluid"
                              src={img4}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <div className="product_price">
                            <span>$685,00</span>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn_add__cart"
                            >
                              <i className="fa-solid fa-cart-arrow-down"></i>
                            </a>
                          </div>
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
                            Add to Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="row">
                <div className="col-6 col-wd-3 col-md-3 product_item p-0">
                  <div className="product_item__outer h-100">
                    <div className="product_item__inner p-4">
                      <div className="product_item__body pb-xl-2">
                        <div className="mb-2 product_item__heading">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5 mb-2"
                          >
                            Speakers
                          </a>
                          </div>
                        <h5 className="mb-1 product_item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="d-block text-center"
                          >
                            <img
                              className="img-fluid"
                              src={img1}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <div className="product_price">
                            <span>$685,00</span>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn_add__cart"
                            >
                              <i className="fa-solid fa-cart-arrow-down"></i>
                            </a>
                          </div>
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
                            Add to Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-wd-3 col-md-3 product_item p-0">
                  <div className="product_item__outer h-100">
                    <div className="product_item__inner p-4">
                      <div className="product_item__body pb-xl-2">
                        <div className="mb-2 product_item__heading">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5 mb-2"
                          >
                            Speakers
                          </a>
                          </div>
                        <h5 className="mb-1 product_item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="d-block text-center"
                          >
                            <img
                              className="img-fluid"
                              src={img1}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <div className="product_price">
                            <span>$685,00</span>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn_add__cart"
                            >
                              <i className="fa-solid fa-cart-arrow-down"></i>
                            </a>
                          </div>
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
                            Add to Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-wd-3 col-md-3 product_item p-0">
                  <div className="product_item__outer h-100">
                    <div className="product_item__inner p-4">
                      <div className="product_item__body pb-xl-2">
                        <div className="mb-2 product_item__heading">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5 mb-2"
                          >
                            Speakers
                          </a>
                          </div>
                        <h5 className="mb-1 product_item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="d-block text-center"
                          >
                            <img
                              className="img-fluid"
                              src={img1}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <div className="product_price">
                            <span>$685,00</span>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn_add__cart"
                            >
                              <i className="fa-solid fa-cart-arrow-down"></i>
                            </a>
                          </div>
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
                            Add to Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-wd-3 col-md-3 product_item p-0">
                  <div className="product_item__outer h-100">
                    <div className="product_item__inner p-4">
                      <div className="product_item__body pb-xl-2">
                        <div className="mb-2 product_item__heading">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5 mb-2"
                          >
                            Speakers
                          </a>
                          </div>
                        <h5 className="mb-1 product_item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="d-block text-center"
                          >
                            <img
                              className="img-fluid"
                              src={img1}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <div className="product_price">
                            <span>$685,00</span>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn_add__cart"
                            >
                              <i className="fa-solid fa-cart-arrow-down"></i>
                            </a>
                          </div>
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
                            Add to Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div className="row">
                <div className="col-6 col-wd-3 col-md-3 product_item p-0">
                  <div className="product_item__outer h-100">
                    <div className="product_item__inner p-4">
                      <div className="product_item__body pb-xl-2">
                        <div className="mb-2 product_item__heading">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5 mb-2"
                          >
                            Speakers
                          </a>
                          </div>
                        <h5 className="mb-1 product_item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="d-block text-center"
                          >
                            <img
                              className="img-fluid"
                              src={img1}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <div className="product_price">
                            <span>$685,00</span>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn_add__cart"
                            >
                              <i className="fa-solid fa-cart-arrow-down"></i>
                            </a>
                          </div>
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
                            Add to Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-wd-3 col-md-3 product_item p-0">
                  <div className="product_item__outer h-100">
                    <div className="product_item__inner p-4">
                      <div className="product_item__body pb-xl-2">
                        <div className="mb-2 product_item__heading">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5 mb-2"
                          >
                            Speakers
                          </a>
                          </div>
                        <h5 className="mb-1 product_item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="d-block text-center"
                          >
                            <img
                              className="img-fluid"
                              src={img1}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <div className="product_price">
                            <span>$685,00</span>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn_add__cart"
                            >
                              <i className="fa-solid fa-cart-arrow-down"></i>
                            </a>
                          </div>
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
                            Add to Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-wd-3 col-md-3 product_item p-0">
                  <div className="product_item__outer h-100">
                    <div className="product_item__inner p-4">
                      <div className="product_item__body pb-xl-2">
                        <div className="mb-2 product_item__heading">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5 mb-2"
                          >
                            Speakers
                          </a>
                          </div>
                        <h5 className="mb-1 product_item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="d-block text-center"
                          >
                            <img
                              className="img-fluid"
                              src={img1}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <div className="product_price">
                            <span>$685,00</span>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn_add__cart"
                            >
                              <i className="fa-solid fa-cart-arrow-down"></i>
                            </a>
                          </div>
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
                            Add to Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-wd-3 col-md-3 product_item p-0">
                  <div className="product_item__outer h-100">
                    <div className="product_item__inner p-4">
                      <div className="product_item__body pb-xl-2">
                        <div className="mb-2 product_item__heading">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5 mb-2"
                          >
                            Speakers
                          </a>
                          </div>
                        <h5 className="mb-1 product_item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="d-block text-center"
                          >
                            <img
                              className="img-fluid"
                              src={img1}
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <div className="product_price">
                            <span>$685,00</span>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn_add__cart"
                            >
                              <i className="fa-solid fa-cart-arrow-down"></i>
                            </a>
                          </div>
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
                            Add to Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
