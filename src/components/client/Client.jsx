import React  from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/1675594173_algolia.svg';
import image2 from '../../assets/1675594191_todoist.svg';
import image3 from '../../assets/1675594213_vimeo.svg';
import image4 from '../../assets/1675595163_yahoo.svg';
//import image5 from '../../assets/1680080026_eqlogo.png';
import image6 from '../../assets/1675595898_todoist.svg'
import './client.css'

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
      <div className="client py-3">
        <div className="container con">
          <h2 className="client-title text-center pb-4">Clients</h2>
          <div className="row">
            <div className="col-12">
              <div
                id="clients-slider"
                className="owl-carousel slick-initialized slick-slider"
              >
                <div className="mainContainer py-5">
                  <Slider {...settings}>
                    <div className="container">
                      <img src={image1} alt="" />
                    </div>
                    <div className="container">
                      <img src={image2} alt="" />
                    </div>
                    <div className="container">
                      <img src={image3} alt="" />
                    </div>
                    <div className="container">
                      <img src={image4} alt="" />
                    </div>
                    <div className="container">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/UKG_%28Ultimate_Kronos_Group%29_logo.svg/2560px-UKG_%28Ultimate_Kronos_Group%29_logo.svg.png" alt="" />
                    </div>
                    <div className="container">
                      <img src={image6} alt="" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Client