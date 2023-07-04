import React from 'react';
import './feature.css';
import { GrUserWorker } from 'react-icons/gr';
import { BsFillBuildingsFill } from 'react-icons/bs';


const Feature = () => {
  return (
    <>
      <div className="feature wow fadeInUp" data-wow-delay="0.1s" >
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
                <div className="feature-item">
                    <div className="feature-icon">
                        <GrUserWorker className="flaticonw" color="white" />
                        {/* <i className="flaticon-worker"></i> */}
                    </div>
                    <div className="feature-text">
                                                <a href="feature/organizational-charts">
                            <h3>Organization Chart</h3>
                        </a>

                       
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="feature-item">
                    <div className="feature-icon">
                    <BsFillBuildingsFill className="flaticon" />
                        <i className="flaticon-building"></i>
                    </div>
                    <div className="feature-text">
                                                <a href="/legal-documents">
                            <h3>Legal Documents</h3>
                        </a>
                       
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="feature-item">
                    <div className="feature-icon">
                        <i className="flaticon-call"></i>
                    </div>
                    <div className="feature-text">
                                                <a href="feature/demand-letter">
                            <h3>Current Demand</h3>
                        </a>

                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Feature