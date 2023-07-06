import React from "react"; 
import './aboutcompany.css';
import { Footer, Header, Navbarr, OtherHeader } from "../../components";

const WhyUs = () => {
  return (
    <>
     <Header />
      <Navbarr />
      <OtherHeader name="WHY US?" />
      <div
        className="about wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-header text-left">
                <p>Why Us?</p>
                 
              </div>
              <div className="about-text">
                <ul>
                  <li>Work Professionally for Fair and Reward</li>
                  <li>Work in Pressure to Meet Deadlines and Targets</li>
                  <li>Ensure Productivity and Excellence</li>
                  <li>Clear Goal Before Beginning the Task</li>
                  <li>
                    Make Commitment and Take Full Responsibility for Result
                  </li>
                  <li>Closely Touch and Impact the People’s Life</li>
                  <li>Empower People to Help Their Growth</li>
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

export default WhyUs;
