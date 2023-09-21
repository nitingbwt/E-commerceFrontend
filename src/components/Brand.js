import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../images/Brand/img1.png";
import img2 from "../images/Brand/img2.png";
import img3 from "../images/Brand/img3.png";
import img4 from "../images/Brand/img4.png";
import img5 from "../images/Brand/img5.png";
import img6 from "../images/Brand/img6.png";
import { NavLink } from "react-router-dom";

const Brand = (props) => {
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
      <div className="brand-area">
        <div className="container">
          <div className="brand-inner border-top border-bottom">
            <Carousel
              responsive={responsive}
              // infinite={true}
              // autoPlay={props.deviceType !== "mobile" ? true : false}
              // autoPlaySpeed={2000}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              <div className="brand-item py-4">
                <NavLink href="#" tabindex="-1">
                  <img src={img1} alt="brand image" />
                </NavLink>
              </div>
              <div className="brand-item py-4">
                <NavLink href="#" tabindex="-1">
                  <img src={img2} alt="brand image" />
                </NavLink>
              </div>
              <div className="brand-item py-4">
                <NavLink href="#" tabindex="-1">
                  <img src={img3} alt="brand image" />
                </NavLink>
              </div>
              <div className="brand-item py-4">
                <NavLink href="#" tabindex="-1">
                  <img src={img4} alt="brand image" />
                </NavLink>
              </div>
              <div className="brand-item py-4">
                <NavLink href="#" tabindex="-1">
                  <img src={img5} alt="brand image" />
                </NavLink>
              </div>
              <div className="brand-item py-4">
                <NavLink href="#" tabindex="-1">
                  <img src={img6} alt="brand image" />
                </NavLink>
              </div>
              <div className="brand-item py-4">
                <NavLink href="#" tabindex="-1">
                  <img src={img1} alt="brand image" />
                </NavLink>
              </div>
              <div className="brand-item py-4">
                <NavLink href="#" tabindex="-1">
                  <img src={img2} alt="brand image" />
                </NavLink>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
