import React from 'react'
import './current.css'
import image1 from '../../assets/1684662270_1680086571_1679979980_popup3.jpg'
import image2 from '../../assets/1684661940_1680086571_1679979980_popup3.png'
import image3 from '../../assets/1684662270_1680086571_1679979980_popup3.jpg'

const CurrentVacancy = () => {
  return (
    <>
      <div className="section-header text-center con"  >
        <h2>Current Vacancies Related in Newspaper</h2>
      </div>
      <section className="section-padding">
        <div className="container con">
            <div className="gallery-view">
                <div className="row" id="lightgallery" lg-uid="lg0">
                        <div className="item col-md-4" data-src="/uploads/banner_image/1684661940_1680086571_1679979980_popup3.png" data-sub-html="<h4>Newsbanner three</h4>">
                        <a href="/#">
                            <img src={image1} alt="Login Int'l" />
                        </a>
                          <span className='box' >
                          {/* style="width: 100% !important; display: inline-grid; /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; 
                       margin-top: 7px;
                       padding: 7px; background-color:rgb(199 64 68);  color: #fff;" */}
                        Published Date:&nbsp;&nbsp;<br />
Enterview Date:
                    </span>
                    </div> 
                    
                                        <div class="item col-md-4" data-src="/uploads/banner_image/1684662270_1680086571_1679979980_popup3.jpg" data-sub-html="<h4>Newsbanner two</h4>">
                        <a href="/#">
                            <img src={image2} alt="Login Int'l" />
                        </a>
                          <span className='box'>
                          {/* style="width: 100% !important; display: inline-grid; /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; 
                       margin-top: 7px;
                       padding: 7px; background-color:rgb(199 64 68);  color: #fff;" */}

                        Published Date:&nbsp;&nbsp;<br />
Enterview Date:
                    </span>
                    </div> 
                    
                                        <div class="item col-md-4" data-src="/uploads/banner_image/1684662130_1680086571_1679979980_popup3.jpg" data-sub-html="<h4>Newsbanner</h4>">
                        <a href="/#">
                            <img src={image3} alt="Login Int'l" />
                        </a>
                          <span className='box'>
                          {/* style="width: 100% !important; display: inline-grid; /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;  
                       margin-top: 7px;
                       padding: 7px; background-color:rgb(199 64 68);  color: #fff;" */}

                        Published Date:&nbsp;&nbsp;<br />
Enterview Date:
                    </span>
                    </div> 
                    
                                    </div>
            </div>
         
    </div></section>
    </>
  );
}

export default CurrentVacancy