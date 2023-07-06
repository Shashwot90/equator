import React from 'react'
import { Footer, Header, Navbarr, OtherHeader} from '../../components';
import image1 from '../../assets/man.jpg';
import './aboutcompany.css'
const AboutCompany = () => {
  return (
    <>
       <Header/>
   <Navbarr />
   <OtherHeader name="ABOUT COMPANY"/>
   <div className="about wow fadeInUp" data-wow-delay="0.1s" 
   //</>style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;"
   >
        <div className="container">
          <div className="row align-items-center">
                        <div className="col-lg-12">
              <div className="about-img">
                <img src={image1} alt="man" 
                //style="max-width: 100%; height: 510px; margin-bottom: 29px;"
                />
              </div>
            </div>
                        <div className="col-lg-12">
              <div className="section-header text-left">
                <p>About Company</p>
                 
              </div>
              <div className="about-text">
                <p>To begin with,we would like to introduce Equator International Pvt.Ltd asone of the prominent and well-known Manpower Recruiting Agency in Nepal. With honesty and reliablity as the key objectives, this organization,being a service based agency&nbsp;has constantly emphasized on quality services to ensure utmost satisfaction to both its clients as well as to the aspirants seeking overseas employment. That is not all,This organization has left no stone unturned to functionas a bridge between the employer and the employee to ensure smooth relationship between them thus avoiding any sort of misunderstandings.</p>

<p>Maintain a smooth relationship with our clients and job seekers is what we belive in.Since we also beloive in understanding, sincerity and reliability we commit hasslein.Since we also belive in understanding,sincerity and reliability we commit hassle free service to our business partners and clients to puhold charming relationship. In this regard,we,the entire team of Equator International Pvt Ltd urge all concerned parties and clients to provide us an opportunity to establish a smooth business relationship to prove our commitment.</p>

<p><strong>Our Objective&nbsp;</strong></p>

<ul>
	<li>To Highly-skilled, Skilled, Semi-skilled as well as Non-skilled people abroad.</li>
	<li>To find the right candidate according to the requirement of the employer company</li>
	<li>To find right job abroad according to capability of jobseekers.</li>
	<li>To support the national economy by incresing foreign remittance.</li>
	<li>To extend good relationship with the recruiting company abroad by providing them manpower as per their recriutment</li>
</ul>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutCompany