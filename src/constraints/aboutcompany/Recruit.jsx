import React from "react";
import { Footer, Header, Navbarr, OtherHeader } from "../../components";
 
import "./aboutcompany.css";

const Recruit = () => {
  return (
    <>
    <Header />
      <Navbarr />
      <OtherHeader name="RECRUITMENT PROCESS" />
      <div
        class="about wow fadeInUp"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeInUp",
        }}
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="section-header text-left">
                <p>Recruitment Process</p>
              </div>
              <div class="about-text">
                <ul>
                  <li>Enquiry from Employer</li>
                  <li>Pre-screening and selection the candidate</li>
                  <li>Final Interview (by employer)</li>
                  <li>Medical</li>
                  <li>Employment Visa and Orientations</li>
                  <li>Travel arrangement</li>
                  <li>Deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recruit;
