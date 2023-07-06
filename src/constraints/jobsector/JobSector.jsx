import React from 'react'
import { Footer, Header, Navbarr, OtherHeader} from '../../components';
import image1 from '../../assets/1676546291_Manufacturing.jpg';
//import image2 from '../../assets/1676546347_Security Guards.jpg';
import image3 from '../../assets/1682921453_PA-51277514.2e16d0ba.fill-1200x630.jpg'
import image4 from '../../assets/1676546508_carousel-3.jpg';
import image5 from '../../assets/1680429092_team.jpg';
import image6 from '../../assets/1680429165_sales-service-marketing.jpg';
import './jobsector.css';

const JobSector = () => {
  return (
    <>
    <Header />
    <Navbarr />
    <OtherHeader  name="JOB SECTOR" />
        <div className="container">
            <div className="job-sectors-area">
                <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                        <a href="/food">
                            <div className="bg-items">
                                <div className="items" 
                                style={{ backgroundImage : `url(${image1})` }}>
                                    <div className="job-sector-title">
                                        <p>Manufacturing</p>
                                    </div>
                                    
                                    <div className="tl5"></div>
                                    <div className="br5"></div>
                                    <div className="details">
                                        <p>Manufacturing</p>
                                        <h6>Read more</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                        </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                        <a href="/security-guards">
                            <div className="bg-items">
                                <div className="items image2" 
                                // style={{ backgroundImage : `url(${image2})` }}
                                >
                                    <div className="job-sector-title">
                                        <p>Security Guards</p>
                                    </div>
                                    
                                    <div className="tl5"></div>
                                    <div className="br5"></div>
                                    <div className="details">
                                        <p>Security Guards</p>
                                        <h6>Read more</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                        </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                        <a href="/cleaning">
                            <div className="bg-items">
                                <div className="items" 
                                style={{ backgroundImage : `url(${image3})` }}>
                                    <div className="job-sector-title">
                                        <p>Cleaning Section</p>
                                    </div>
                                    
                                    <div className="tl5"></div>
                                    <div className="br5"></div>
                                    <div className="details">
                                        <p>Cleaning Section</p>
                                        <h6>Read more</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                        </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                        <a href="/manufacture-company">
                            <div className="bg-items">
                                <div className="items" 
                                style={{ backgroundImage : `url(${image4})` }}>
                                    <div className="job-sector-title">
                                        <p>Cunstruction</p>
                                    </div>
                                    
                                    <div className="tl5"></div>
                                    <div className="br5"></div>
                                    <div className="details">
                                        <p>Cunstruction</p>
                                        <h6>Read more</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                        <a href="/engineering-and-construction">
                            <div className="bg-items">
                                <div className="items" 
                                style={{ backgroundImage : `url(${image5})`}}>
                                    <div className="job-sector-title">
                                        <p>Engineering and Construction Personnel</p>
                                    </div>
                                    
                                    <div className="tl5"></div>
                                    <div className="br5"></div>
                                    <div className="details">
                                        <p>Engineering and Construction Personnel</p>
                                        <h6>Read more</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                        </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                        <a href="/salese-service">
                            <div className="bg-items">
                                <div className="items" 
                                style= {{ backgroundImage : `url(${image6})` }}>
                                    <div className="job-sector-title">
                                        <p>Sales &amp; Service Personnel</p>
                                    </div>
                                    
                                    <div className="tl5"></div>
                                    <div className="br5"></div>
                                    <div className="details">
                                        <p>Sales &amp; Service Personnel</p>
                                        <h6>Read more</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                        </div>
                                    </div>
            </div>
                            <div className="pagination-wrapper" 
                            style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center' }}>
                    <ul className="pagination" role="navigation">
        
                    <li className="page-item disabled" 
                     aria-label="« Previous">
                <span className="page-link" aria-hidden="true">‹</span>
            </li>
        
                          <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                         <li className="page-item"><a className="page-link" href="/job-sector2">2</a></li>
                                                        
        
                    <li className="page-item">
                <a className="page-link" href="/job-sector2" rel="next" aria-label="Next »">›</a>
            </li>
            </ul>

                </div>
                    </div>
                    <Footer />
    </>
  )
}

export default JobSector