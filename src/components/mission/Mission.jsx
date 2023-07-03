import React from 'react'
import image1 from '../../assets/target.png'
import image2 from '../../assets/eye.png'
import image3 from '../../assets/value.png'
import './mission.css'

const Mission = () => {
  return (
    <>
      <div class="container">
    <div class="mission-area">
        <div class="row gy-3">
            <div class="col-lg-4 col-md-4 col-12">
                <div class="mission">
                                        <div class="mission-icon">
                        <a href="/missions"> 
                            <img src={image1} alt="" />
                        </a>
                    </div>
                    <div class="mission-title">
                        <a href="/missions">
                            <h3>Mission</h3>
                        </a>
                    </div>
                    <div class="mission-dec">
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis...
                    </p></div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12">
                <div class="mission">
                                        <div class="mission-icon">
                        <a href="/vision"><img src={image2} alt="" /></a>



                    </div>
                    <div class="mission-title">
                        <a href="/vision">
                            <h3>vision</h3>
                        </a>

                    </div>
                    <div class="mission-dec">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis...
                    </p></div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12">
                <div class="mission">
                                        <div class="mission-icon">
                        <a href="/value"> <img src={image3} alt="" /></a>


                    </div>
                    <div class="mission-title">
                        <a href="/value">
                            <h3>Value</h3>
                        </a>

                    </div>
                    <div class="mission-dec">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis...
                    </p></div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Mission