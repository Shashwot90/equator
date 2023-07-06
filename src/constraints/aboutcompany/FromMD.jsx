import React from 'react'
import image1 from '../../assets/1680085284_md.jpg';
import './aboutcompany.css';
import { Footer, Header, Navbarr, OtherHeader } from "../../components";

const FromMD = () => {
  return (
    <>
    <Header />
      <Navbarr />
      <OtherHeader name="MESSAGE FROM MD" />
        <main className="main-content-wrapper">
         

        <section className="message-area ptb--60" 
        style={{ marginTop: '50px' }}>
            <div className="container">
                <div className="message-heading">
                    <h2>Message From  MD</h2>
                    <hr className="delimeter" />
                </div>
                <div className="row">
                    <div className="col-md-7">
                         
                        <p>Established to serve, this organization has played a vital role in supplying hard working, sincere and honest manpower to various companies abroad. As a Managing Director of this organization, I assure all concerned, including my business partners, that I will fully utilize my years of experience in this sector to ensure smooth relationship and better service.<br />
                        <br />
                        Here at this point, I would also wish to offer my cordial greetings to all our esteemed clients abroad as well as in Nepal.<br />
                        <br />
                        Supplying manpower from one country to another is a service in itself where everybody becomes a winner. An ideal blend of commitment, honesty and hard work leads to a win situation and this, I feel, is success.<br />
                        <br />
                        Lastly, I once again express my gratitude and appreciation to all my partner and clients for their cooperation.<br />
                        <br />
                        Thanks,<br />
                        <br />
                        <strong>Harish Kunwar</strong><br />
                         Managing Director</p>
                    </div>
                    <div className="col-md-5 col-sm-6">
                        <img src={image1} alt="Chairman's Message" 
                        style={{ animation: 'slideInFromLeft 1s ease-out'}} />
                    </div>
                </div>
            </div>
        </section>
        
        

     
    </main>
    <Footer />
    </>
  )
}

export default FromMD