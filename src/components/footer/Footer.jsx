import React from 'react'
import './footer.css'
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoYoutube } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { BiSolidRightArrow } from 'react-icons/bi';

const Footer = () => {
  return (
    <>
      <div
        className="footer wow fadeIn"
        data-wow-delay="0.3s"
        // style="visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="footer-contact">
                <h2>Office Contact</h2>
                <p>
                <FaMapMarkerAlt className="pr" />
                  {/* <i className="fa fa-map-marker-alt"></i> */}
                  Gongabu, Kathmandu, Nepal
                </p>
                <p>
                <BsFillTelephoneFill className="pr" />
                  {/* <i className="fa fa-phone-alt"></i> */}
                  +977-1-4986469, +977-1-4986470
                </p>
                <p 
                //</div>style="font-size:15px;"
                >
                <IoMdMail className="pr" />
                  {/* <i className="fa fa-envelope"></i> */}
                  equator746@gmail.com
                </p>
                <div className="footer-social">
                  <a href="https://twitter.com/">
                    <BiLogoTwitter size={'1.4em'} />
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com/">
                  <BiLogoFacebook size={'1.4em'} />
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.youtube.com/">
                  <BiLogoYoutube size={'1.4em'} />
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                  <BiLogoInstagram size={'1.4em'} />
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-link">
                <h2>JOB SECTORS</h2>

                <a href="/cleaning"><BiSolidRightArrow className='arow' />Cleaning Section</a>

                <a href="/cleaning-section"><BiSolidRightArrow className='arow' />Cleaning Section</a>

                <a href="/office-staff"><BiSolidRightArrow className='arow' />Office Staff</a>

                <a href="/tailoring-and-laundry-personnels"><BiSolidRightArrow className='arow' />
                  Garment / Tailoring and laundry Personnels
                </a>

                <a href="/medical-staffs"><BiSolidRightArrow className='arow' />Medical &amp; Health Personnels</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-link">
                <h2>Useful Pages</h2>
                <a href="/aboutus/about-one"><BiSolidRightArrow className='arow' />About Us</a>
                <a href="/job-sectors"><BiSolidRightArrow className='arow' />Job Sectors</a>
                <a href="/contact"><BiSolidRightArrow className='arow' />Contact</a>
                <a href="/service"><BiSolidRightArrow className='arow' />Testimonial</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="newsletter">
                <h2>Map</h2>
                <iframe
                title='hy'
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7062.5908927051905!2d85.30563875390625!3d27.739031899999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb192769445433%3A0x9b19ae864def10a7!2sEquator%20International%20P.%20Ltd.!5e0!3m2!1sen!2snp!4v1680172383936!5m2!1sen!2snp"
                  width="300"
                  height="150"
                  // style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright">
          <div className="row">
            <div className="col-md-12">
              <p 
              //style=" margin-top: -31px;"
              >
                ©<script>document.write(new Date().getFullYear())</script>2023
                <a href="/#">Equator International Pvt. Ltd.</a> All Right
                Reserved. Developed by{" "}
                <a href="https://radiantnepal.com/">Radiant Infotech Nepal</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer