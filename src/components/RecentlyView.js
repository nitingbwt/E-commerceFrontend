import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../images/product/img1.jpg";
import img2 from "../images/product/img2.jpg";
import img3 from "../images/product/img3.jpg";
import img4 from "../images/product/img4.jpg";
import img5 from "../images/product/img9.jpg";
// import img6 from "../images/product/img10.jpg";

const RecentlyView = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
      <section className="recently_view_section">
        <div className="container">
          <div className="position-relative">
            <div class="border-bottom border-color-1 mb-2">
              <h3 class="section_title mb-0 pb-3">Recently Viewed</h3>
            </div>
            <Carousel
              responsive={responsive}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              itemClass="pb-5"
              showDots={true}
            >
              <div className="product_item">
                <div className="product_item__outer h-100">
                  <div className="product_item__inner mx-2 p-4 bg-white">
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
                        <a href="../shop/compare.html">
                          <i className="fa-solid fa-code-compare"></i> Compare
                        </a>
                        <a href="../shop/wishlist.html">
                          <i className="fa-regular fa-heart"></i> Add to
                          Wishlist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item">
                <div className="product_item__outer h-100">
                  <div className="product_item__inner mx-2 p-4 bg-white">
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
                        <a href="../shop/compare.html">
                          <i className="fa-solid fa-code-compare"></i> Compare
                        </a>
                        <a href="../shop/wishlist.html">
                          <i className="fa-regular fa-heart"></i> Add to
                          Wishlist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item">
                <div className="product_item__outer h-100">
                  <div className="product_item__inner mx-2 p-4 bg-white">
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
                        <a href="../shop/compare.html">
                          <i className="fa-solid fa-code-compare"></i> Compare
                        </a>
                        <a href="../shop/wishlist.html">
                          <i className="fa-regular fa-heart"></i> Add to
                          Wishlist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item">
                <div className="product_item__outer h-100">
                  <div className="product_item__inner mx-2 p-4 bg-white">
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
                        <a href="../shop/compare.html">
                          <i className="fa-solid fa-code-compare"></i> Compare
                        </a>
                        <a href="../shop/wishlist.html">
                          <i className="fa-regular fa-heart"></i> Add to
                          Wishlist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item">
                <div className="product_item__outer h-100">
                  <div className="product_item__inner mx-2 p-4 bg-white">
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
                            src={img5}
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
                        <a href="../shop/compare.html">
                          <i className="fa-solid fa-code-compare"></i> Compare
                        </a>
                        <a href="../shop/wishlist.html">
                          <i className="fa-regular fa-heart"></i> Add to
                          Wishlist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item">
                <div className="product_item__outer h-100">
                  <div className="product_item__inner mx-2 p-4 bg-white">
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
                        <a href="../shop/compare.html">
                          <i className="fa-solid fa-code-compare"></i> Compare
                        </a>
                        <a href="../shop/wishlist.html">
                          <i className="fa-regular fa-heart"></i> Add to
                          Wishlist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item">
                <div className="product_item__outer h-100">
                  <div className="product_item__inner mx-2 p-4 bg-white">
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
                        <a href="../shop/compare.html">
                          <i className="fa-solid fa-code-compare"></i> Compare
                        </a>
                        <a href="../shop/wishlist.html">
                          <i className="fa-regular fa-heart"></i> Add to
                          Wishlist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item">
                <div className="product_item__outer h-100">
                  <div className="product_item__inner mx-2 p-4 bg-white">
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
                        <a href="../shop/compare.html">
                          <i className="fa-solid fa-code-compare"></i> Compare
                        </a>
                        <a href="../shop/wishlist.html">
                          <i className="fa-regular fa-heart"></i> Add to
                          Wishlist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentlyView;
