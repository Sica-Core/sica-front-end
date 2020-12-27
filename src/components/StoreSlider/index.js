import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <div className="slider">

            <Slider {...settings}>
            <div className="slider-card">

              <div className="slider-card__content">
                <div className="slider-card__left">
                  <h3>Up to 90% off weapons, kits &amp; more</h3>
                  <h4>Black Friday Deals</h4>
                </div>
                <div className="slider-card__right">
                  <div className="slider-card__img">
                    <img src="./toolkit/images/cod.png" alt="" />
                  </div>
                </div>
              </div>
              </div>
              <div className="slider-card">

              <div className="slider-card__content">
                <div className="slider-card__left">
                  <h3>Up to 90% off weapons, kits &amp; more</h3>
                  <h4>Black Friday Deals</h4>
                </div>
                <div className="slider-card__right">
                  <div className="slider-card__img">
                    <img src="./toolkit/images/cod.png" alt="" />
                  </div>
                </div>
              </div>
              </div>
            </Slider>
          </div>
        </div>
    );
  }
}
