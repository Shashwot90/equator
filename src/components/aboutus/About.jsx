import React from 'react'
import './about.css'

const About = () => {
  return (
    <>
      <div
        class="about wow fadeInUp"
        data-wow-delay="0.1s"
        // style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12 col-md-6">
              <div class="section-header text-left">
                <p>About us</p>
                <h2>Equator Interntional</h2>
              </div>
              <div class="about-text">
                <p>
                  With honesty and reliablity as the key objectives, this
                  organization,being a service based agency.has constantly
                  emphasized on quality services to ensure utmost satisfaction
                  to both its clients as well as to the aspirants seeking
                  overseas employment.That is not all,This organization has left
                  no stone unturned to functionas a bridge between the employer
                  and the employee to ensure smooth relationship between them
                  thus avoiding any sort of misunderstandings.
                </p>
                <p></p>
                <a class="btn" href="/aboutus/about-one">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About