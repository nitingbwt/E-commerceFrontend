import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Products = () => {
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
            <div class="category_section">
              <ul id="sidebarNav" class="list-unstyled mb-0 sidebar_navbar">
                <li>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown button
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a class="dropdown-current active" href="#">
                    Smart Phones &amp; Tablets{" "}
                    <span class="text-gray-25 font-size-12 font-weight-normal">
                      {" "}
                      (50)
                    </span>
                  </a>

                  <ul class="list-unstyled dropdown-list">
                    <li>
                      <a class="dropdown-item" href="#">
                        Smartphones
                        <span class="text-gray-25 font-size-12 font-weight-normal">
                          {" "}
                          (30)
                        </span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Tablets
                        <span class="text-gray-25 font-size-12 font-weight-normal">
                          {" "}
                          (20)
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-9">
            <div class="d-block d-md-flex justify-content-between align-items-center1 mb-3">
              <h3 class="font-size-25 mb-2 mb-md-0">
                Smart Phones &amp; Tablets
              </h3>
              <p class="font-size-14 text-gray-90 mb-0">
                Showing 1–25 of 56 results
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
