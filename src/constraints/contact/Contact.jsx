import React from 'react'
import { Footer, Header, Navbarr, OtherHeader} from '../../components';
import './contact.css';

const Contact = () => {
  return (
    <>
    <Header />
    <Navbarr />
    <OtherHeader  name="GALLERY" />
        <div className="container">
                <div className="contact-area-page">
                    <div className="service-title">
                        <h1>Contact Us</h1>
                    </div>
                    <form className="row" action="http://equintl.demo.radiantnepal.com/contact/store" method="post" id="contact-form" enctype="multipart/form-data">
                        <div className="col-lg-6 col-md-12 col-12">
                                                        <div className="form-area">
                                <div className="row">
                                    <input type="hidden" name="_token" value="0iScPOdLitvsuL441pIsAPIw5gZmryAcf3F6L8Qp" />                                        <div className="col-6">
                                            <div className="contact-form">
                                                <input type="text" name="first_name" className="form-control" id="inputName4" placeholder="Full Name *" required="" />
                                            </div>
            
                                        </div>
            
                                        <div className="col-6">
                                            <div className="contact-form">
                                                <input type="Phone" name="number" className="form-control" id="inputPhone" placeholder="Number *" required="" />
                                            </div>
            
                                        </div>
                                        <div className="col-12">
                                            <div className="contact-form">
                                                <input type="email" name="email" className="form-control" id="inputemail2" placeholder="Email *" required="" />
                                            </div>
            
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control" rows="5" id="comment" name="message" placeholder="Comment" required=""></textarea>
                                        </div>
                                        <div className="mr-auto">
                                            <button className="btn" type="submit">Submit</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="form-text-area ">
                            <iframe title="hi" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7062.5908927051905!2d85.30563875390625!3d27.739031899999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb192769445433%3A0x9b19ae864def10a7!2sEquator%20International%20P.%20Ltd.!5e0!3m2!1sen!2snp!4v1680172383936!5m2!1sen!2snp" 
                            width="600" height="450" 
                            style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
        
                        </div>
        
        
                    </form>
        
                </div>
            </div>
            <Footer />
    </>
  )
}

export default Contact