import React from 'react'
import { Footer, Header, Navbarr, OtherHeader} from '../../components';
import './documentation.css'

const Documentation = () => {
  return (
    <>
    <Header />
    <Navbarr />
    <OtherHeader  name="DOCUMENTATION" />
    <div className="container">
            <div className="recu-pro-area">
                <div className="service-title">
                    <h1 
                    style={{ marginLeft: '257px' }}
                    >Documentation</h1>
                </div>
                <div className="recu-pro-content-area" 
                style={{marginTop: '-150px' }}
                >
                    <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="recu-pro-content">
                                
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="recu-pro-content">
                        <strong>From Qatar. Kuwait, Bahrain, Oman, Lebanon and UAE</strong>
<ul>
	<li>Demand Letter</li>
	<li>Power of Attorney</li>
	<li>Agency Agreement</li>
	<li>Guarantee Letter</li>
	<li>Employment Contract</li>
	<li>Chamber of Commerce / Nepal Embassy (in some case)</li>
</ul>

<p><strong>From Malaysia</strong></p>

<ul>
	<li>Demand Letter</li>
	<li>Power of Attorney</li>
	<li>Agency Agreement</li>
	<li>Letter written by company to Malaysian Embassy in Nepal</li>
	<li>Employment Contract</li>
	<li>A?davit</li>
	<li>KDN Approval (From Ministry of Labor</li>
	<li>Translation Letter (From Ministry of Labor or Ministry of Home)</li>
	<li>Notary Public or Attestation of Nepal Embassy KL</li>
	<li>Pro?le of Company.</li>
</ul>

<p><strong>From Saudi Arabia</strong></p>

<ul>
	<li>Demand Letter</li>
	<li>Power of Attorney</li>
	<li>Agency Agreement</li>
	<li>Guarantee later</li>
	<li>Employment Contract</li>
	<li>Visa slip</li>
	<li>Consulate Authorization</li>
	<li>Commercial Registration</li>
	<li>COC/MOFA/Nepal - Ambassy (in some case)</li>
</ul>
                    </div>
                </div>
            </div>
        </div>
    <Footer />
       
    </>
  )
}

export default Documentation