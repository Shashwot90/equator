import React, { useState } from 'react'
import './slider.css'
import plane from '../../assets/1682927991_United Arab Emirates (8).jpg';
import plane1 from '../../assets/1682925278_United Arab Emirates (7).jpg';
import plane2 from '../../assets/1682924743_United Arab Emirates (6).jpg';
import plane3 from '../../assets/1682924194_United Arab Emirates (4).jpg';
import plane4 from '../../assets/1682924347_United Arab Emirates (5).jpg';
import Carousel from 'react-bootstrap/Carousel';
import Fade from 'react-bootstrap/Fade';

const Slider = () => {
    // function mylinkfunction(e) {

    //     window.location.href="#dev";
    //     e.preventDefault();
    //     e.stopPropagation();
    // } 
  const [open, setOpen] = useState(false);

  return (
    <>
      <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={plane}
          alt="First slide"
        />
        {/* <Fade in={open}> */}
        <Carousel.Caption className='carousel-caption'>
        <p className='fade-in'>Welcome To Equator Interntional</p>
        <h1 className='fade-in'>Get Your Dream Job Today</h1>
        </Carousel.Caption>
        {/* </Fade> */}
        <button class="btn animated fadeInUp" type="button" onClick="mylinkfunction()">Find a Job</button>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={plane1}
          alt="Second slide"
        />

        <Carousel.Caption>
        <p class="animated fadeInRight">Welcome To Equator Interntional</p>
        <h1 class="animated fadeInLeft">Get Your Dream Job Today</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={plane2}
          alt="Third slide"
        />

        <Carousel.Caption>
        <p class="animated fadeInRight">Welcome To Equator Interntional</p>
        <h1 class="animated fadeInLeft">Get Your Dream Job Today</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={plane3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <p class="animated fadeInRight">Welcome To Equator Interntional</p>
        <h1 class="animated fadeInLeft">Get Your Dream Job Today</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={plane4}
          alt="Third slide"
        />

        <Carousel.Caption>
        <p class="animated fadeInRight">Welcome To Equator Interntional</p>
        <h1 class="animated fadeInLeft">Get Your Dream Job Today</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Slider

