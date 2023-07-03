import React from 'react'
import './header.css'
import { ImProfile } from 'react-icons/im';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

const Header = () => {
  return (
    <>
      <div className="top-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="logo">
                                <a href="/">
                                    <img src="http://equintl.demo.radiantnepal.com/uploads/icons/1680080026_eqlogo.png" alt="logo" />
                                 
                                </a>
                            </div>
                        </div>
                       
                        <div className="col-lg-8 col-md-7 d-none d-lg-block">
                            <div className="row">
                                <div className="col-4">
                                    <div className="top-bar-item"  >
                                        <div className="top-bar-icon">
                                            <ImProfile className='icons' />
                                            {/* <i className="fa-regular fa-id-card"></i> */}
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Govt. License No: </h3>
                                            <p>746/064/065</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                           <BiSolidPhoneCall className='icons' />
                                           {/* <i className="fa-solid fa-phone-volume"></i> */}
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Call Us</h3>
                                            <p>+977-1-4986469, </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <MdEmail className='icons' />
                                            {/* <i className="fa-solid fa-envelope"></i> */}
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Email Us</h3>
                                            <p><a href="mailto:equator746@gmail.com">equator746@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Header