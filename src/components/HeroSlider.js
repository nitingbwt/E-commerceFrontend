import React from "react";
import img1 from '../images/slider1.png'

const HeroSlider = () => {
  return (
    <>
      <section className="hero_silder__section">
        <div className="container">
            <div className="row min-height-420 py-7 py-md-0">
              <div className="offset-xl-3 col-xl-4 col-6 my-5 hero_slider__content">
                <h1
                  className="animated fadeInUp"
                  data-scs-animation-in="fadeInUp"
                  style={{ opacity: "1" }}
                >
                  THE NEW <span className="d-block">STANDARD</span>
                </h1>
                <h6
                  className="animated fadeInUp mb-5"
                  data-scs-animation-in="fadeInUp"
                  data-scs-animation-delay="200"
                  style={{ animationDelay: "200ms", opacity: "1" }}
                >
                  UNDER FAVORABLE SMARTWATCHES
                </h6>
                <div
                  className="price_box mb-5"
                  data-scs-animation-in="fadeInUp"
                  data-scs-animation-delay="300"
                  style={{ animationDelay: "300ms", opacity: "1" }}
                >
                  <span>FROM</span>
                  <div className="price">
                    <sup className="">$</sup>749<sup className="">99</sup>
                  </div>
                </div>
               <a href="#" className="btn">
                Start buying
               </a>
              </div>
              <div
                className="col-xl-5 col-6 d-flex align-items-center animated zoomIn"
                data-scs-animation-in="zoomIn"
                data-scs-animation-delay="500"
                style={{ animationDelay: "500ms", opacity: "1" }}
              >
                {/* <img
                  className="img-fluid"
                  src={img1}
                  alt="Image Description"
                /> */}
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default HeroSlider;
