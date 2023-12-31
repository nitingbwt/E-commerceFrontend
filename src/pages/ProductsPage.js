import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductApi from "../API/ProductApi";
import Brand from "../components/Brand";
import OnsaleProduct from "../components/OnsaleProduct";
import banner1 from "../images/product/banner-1.jpg";
// import banner2 from "../images/product/.jpg";
import latestImg1 from "../images/product/a1.jpg";
import latestImg2 from "../images/product/headphone.jpg";
import latestImg3 from "../images/product/watch.jpg";
import latestImg4 from "../images/product/apple tab 1.jpg";
import latestImg5 from "../images/product/img2.jpg";

const ProductsPage = () => {
  const [productData, setProductData] = useState(ProductApi);
  return (
    <>
      <Header />
      <Navbar />
      <div class="bg-gray-13 bg-md-transparent">
        <div class="container">
          <div class="my-md-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                  <a href="../home/index.html">Home</a>
                </li>
                <li
                  class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active"
                  aria-current="page"
                >
                  Smart Phones &amp; Tablets
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="product_accordion__tab">
              <div
                class="accordion accordion-flush border"
                id="accordionFlushExample"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Show All Categories
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="product_list__group">
                  <ul class="list-group list-group-flush ">
                    <li class="list-group-item">
                      <a href="#">Smart Phones & Tablets </a>
                    </li>
                    <ul className="list-group-two">
                      <li className="list-group-item-two">
                        <a href="#">Smartphones</a>
                      </li>
                      <li className="list-group-item-two">
                        <a href="#">Tablets </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <div class="border-bottom mb-5">
                <h3 class="section_title mb-0 pb-3">Filters</h3>
              </div>
              <div class="border-bottom pb-4 mb-4 product_filter__checkbox">
                <h4 class="font-size-3 mb-4 font-weight-bold">Brands</h4>

                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Sumsung
                    <span> (56)</span>
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    I Phone
                    <span> (56)</span>
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Realme
                    <span> (56)</span>
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Oppo
                    <span> (56)</span>
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Vivo
                    <span> (56)</span>
                  </label>
                </div>

                <div class="collapse" id="collapseBrand">
                  <div class="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="brandGucci"
                      />
                      <label class="custom-control-label" for="brandGucci">
                        Gucci
                        <span class="text-gray-25 font-size-12 font-weight-normal">
                          {" "}
                          (56)
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="brandMango"
                      />
                      <label class="custom-control-label" for="brandMango">
                        Mango
                        <span class="text-gray-25 font-size-12 font-weight-normal">
                          {" "}
                          (56)
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <a class="link_collapse d-inline-flex mt-2" href="#">
                  <span class="link__icon text-gray-27 bg-white">
                    <span class="link__icon-inner">+</span>
                  </span>
                  <span class="link-collapse__default">Show more</span>
                  {/* <span class="link-collapse__active">Show less</span> */}
                </a>
              </div>
            </div>

            <div className="range_slider mb-5">
              <h4 className="fw-bold mb-4">Price</h4>
              <div className="range_silder__group mb-4">
                <input type="range" class="form-range" id="customRange1" />
                <label for="customRange1" class="form-label">
                  Price: $0 --- $3456
                </label>
              </div>
              <button type="submit" class="btn rounded-lg">
                Filter
              </button>
            </div>
            <div class="mb-8">
              <div class="border-bottom border-color-1 mb-5">
                <h3 class="section_title section-title__sm mb-0 pb-2 font-size-18">
                  Latest Products
                </h3>
              </div>
              <ul class="list-unstyled">
                <li class="mb-4">
                  <div class="row">
                    <div class="col-auto latest_img">
                      <a
                        href="#"
                        class="d-block "
                      >
                        <img
                          class="img-fluid"
                          src={latestImg1}
                          alt="Image Description" 
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div class="col">
                      <p class="latest_product__heading mb-2">
                        <a href="#">
                          Notebook Black Spire V Nitro VN7-591G
                        </a>
                      </p>
                      <div class="fw-bold latest_product__price">
                        <del class="d-block fs-6">
                          $2299.00
                        </del>
                        <ins class="text-danger text-red text-decoration-none d-block">
                          $1999.00
                        </ins>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="mb-4">
                  <div class="row">
                    <div class="col-auto latest_img">
                      <a
                        href="#"
                        class="d-block "
                      >
                        <img
                          class="img-fluid"
                          src={latestImg2}
                          alt="Image Description" 
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div class="col">
                      <p class="latest_product__heading mb-2">
                        <a href="#">
                          Notebook Black Spire V Nitro VN7-591G
                        </a>
                      </p>
                      <div class="latest_product__price">$499.00</div>
                    </div>
                  </div>
                </li>
                <li class="mb-4">
                  <div class="row">
                    <div class="col-auto latest_img">
                      <a
                        href="#"
                        class="d-block "
                      >
                        <img
                          class="img-fluid"
                          src={latestImg3}
                          alt="Image Description" 
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div class="col">
                      <p class="latest_product__heading mb-2">
                        <a href="#">
                          Tablet Thin EliteBook Revolve 810 G6
                        </a>
                      </p>
                      <div class="latest_product__price">$100.00</div>
                    </div>
                  </div>
                </li>
                <li class="mb-4">
                  <div class="row">
                    <div class="col-auto latest_img">
                      <a
                        href="#"
                        class="d-block "
                      >
                        <img
                          class="img-fluid"
                          src={latestImg4}
                          alt="Image Description" 
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div class="col">
                      <p class="latest_product__heading mb-2">
                        <a href="#">
                          Notebook Purple G952VX-T7008T
                        </a>
                      </p>
                      <div class="fw-bold latest_product__price">
                        <del class="fs-6 d-block">
                          $2299.00
                        </del>
                        <ins class="text-danger text-decoration-none d-block">
                          $1999.00
                        </ins>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="mb-4">
                  <div class="row">
                    <div class="col-auto latest_img">
                      <a
                        href="#"
                        class="d-block "
                      >
                        <img
                          class="img-fluid"
                          src={latestImg5}
                          alt="Image Description" 
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div class="col">
                      <p class="latest_product__heading mb-2">
                        <a href="#">
                          Laptop Yoga 21 80JH0035GE W8.1
                        </a>
                      </p>
                      <div class="latest_product__price">$1200.00</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="row">
              <div className="col-12 mb-5 pb-5">
                <a href="">
                  <img src={banner1} alt="" className="img-fluid" />
                </a>
              </div>
            </div>
            <div class="d-block d-md-flex justify-content-between align-items-center mb-3 product_heading">
              <h3 class="mb-2 mb-md-0">Smart Phones &amp; Tablets</h3>
              <p class="mb-0">Showing 1–25 of 56 results</p>
            </div>
            <div class="d-flex justify-content-between align-items-center py-2 product_sorting">
              <div class="d-xl-none">
                <a
                  class="btn btn-sm py-1 font-weight-normal target-of-invoker-has-unfolds"
                  href="#"
                >
                  <i class="fas fa-sliders-h"></i>{" "}
                  <span class="ml-1">Filters</span>
                </a>
              </div>
              <div class="px-4 d-none d-xl-block">
                <ul class="nav nav-tab-shop" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="pills-one-example1-tab"
                      data-toggle="pill"
                      href="#pills-one-example1"
                      role="tab"
                      aria-controls="pills-one-example1"
                      aria-selected="false"
                    >
                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                        <i class="fa fa-th"></i>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-two-example1-tab"
                      data-toggle="pill"
                      href="#pills-two-example1"
                      role="tab"
                      aria-controls="pills-two-example1"
                      aria-selected="false"
                    >
                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                        <i class="fa fa-align-justify"></i>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-three-example1-tab"
                      data-toggle="pill"
                      href="#pills-three-example1"
                      role="tab"
                      aria-controls="pills-three-example1"
                      aria-selected="true"
                    >
                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                        <i class="fa fa-list"></i>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-four-example1-tab"
                      data-toggle="pill"
                      href="#pills-four-example1"
                      role="tab"
                      aria-controls="pills-four-example1"
                      aria-selected="true"
                    >
                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                        <i class="fa fa-th-list"></i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="d-flex product_sorting__dropdown">
                <div class="dropdown px-4">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Default sorting
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Sort by popularity
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Sort by average rating
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Sort by latest
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Sort by price: low to high
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Sort by price: high to low
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row py-4">
              {productData.map((Elem) => {
                const { id, img, title, price, heading } = Elem;
                return (
                  <>
                    <div className="col-6 col-md-3 product_item p-0" key={id}>
                      <div className="product_item__outer h-100">
                        <div className="product_item__inner p-4 bg-white">
                          <div className="product_item__body pb-xl-2">
                            <div className="mb-2 product_item__heading">
                              <a
                                href="#"
                                className="font-size-12 text-gray-5 mb-2"
                              >
                                {heading}
                              </a>
                            </div>
                            <h5 className="mb-1 product_item__title">
                              <a
                                href="#"
                                className="text-blue font-weight-bold"
                              >
                                {title}
                              </a>
                            </h5>
                            <div className="mb-2">
                              <a
                                href="#"
                                className="d-block text-center"
                              >
                                <img
                                  className="img-fluid"
                                  src={img}
                                  alt="Image Description" 
                                />
                              </a>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <div className="product_price">
                                <span>${price}</span>
                              </div>
                              <div className="d-none d-xl-block prodcut-add-cart">
                                <a
                                  href="#"
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
                                <i className="fa-solid fa-code-compare"></i>{" "}
                                Compare
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
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Brand dataType="product" />
      <OnsaleProduct />
      <Footer />
    </>
  );
};

export default ProductsPage;
