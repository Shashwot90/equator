import React from 'react'
import './featurejob.css'
import image1  from '../../assets/1682936783_IT-Staffing-shutterstock_1590824863-1.jpg'
import image2 from '../../assets/1682921536_PA-51277514.2e16d0ba.fill-1200x630.jpg'
import image3 from '../../assets/1682921321_toyota-nepal-servicing-and-support.jpg'
import image4 from '../../assets/1682921120_STATIC-GUARD-AND-NEPAL-scaled.jpg'
const FeatureJob = () => {
  return (
    <>
      <div class="service">
        <div class="container">
            <div class="section-header text-center" id="dev">
               
                <h2>FEATURED JOBS</h2>
            </div>
            <div class="row">
                 <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                 {/* style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;" */}
                            <div class="service-item">
                                <div class="service-img">
                                    <img src={image1} alt="Image1" width="400px" height="300px" />
                                    <div class="service-overlay">
                                    </div>
                                </div>
                                <div class="service-text">
                                    <h3>
                                        IT personnels
                                    </h3>
                                    <a class="btn" href="/jobdetail/itofficer">+</a>
                                </div>
                            </div>
                        </div>     
                           <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                           {/* style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;" */}
                            <div class="service-item">
                                <div class="service-img">
                                    <img src={image2} alt="Image1" width="400px" height="300px" />
                                    <div class="service-overlay">
                                    </div>
                                </div>
                                <div class="service-text">
                                    <h3>
                                        Cleaning Section
                                    </h3>
                                    <a class="btn" href="/jobdetail/cleaning-one">+</a>
                                </div>
                            </div>
                        </div>     
                         <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                         {/* style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;" */}
                            <div class="service-item">
                                <div class="service-img">
                                    <img src={image3} alt="Image1" width="400px" height="300px" />
                                    <div class="service-overlay">
                                    </div>
                                </div>
                                <div class="service-text">
                                    <h3>
                                        Mechanics
                                    </h3>
                                    <a class="btn" href="/jobdetail/mechanics">+</a>
                                </div>
                            </div>
                        </div>     
                       <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                       {/* style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;" */}
                            <div class="service-item">
                                <div class="service-img">
                                    <img src={image4} alt="Image1" width="400px" height="300px" />
                                    <div class="service-overlay">
                                    </div>
                                </div>
                                <div class="service-text">
                                    <h3>
                                        Security Company
                                    </h3>
                                    <a class="btn" href="/jobdetail/abc-company">+</a>
                                </div>
                            </div>
                        </div>     
                                             
            </div>
                    </div>
    </div>
    </>
  )
}

export default FeatureJob