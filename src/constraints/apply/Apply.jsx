import React from 'react'
import '../contact/contact.css'
import { Footer, Header, Navbarr, OtherHeader} from '../../components';

const Apply = () => {
  return (
    <>
    <Header />
    <Navbarr />
    <OtherHeader  name="APPLY NOW" />
        <div class="container">
			<div class="contact-area-page">
				<div class="service-title">
					<h1>Apply Now</h1>
				</div>
				<form action="http://equintl.demo.radiantnepal.com/jobapply/store" method="POST" autocomplete="on" enctype="multipart/form-data" class="row">
					<input type="hidden" name="_token" value="0iScPOdLitvsuL441pIsAPIw5gZmryAcf3F6L8Qp" />					
                    <div class="col-lg-12 col-md-12 col-12">
												<div class="apply-area">
							<div class="row">
								<div class="col-6">
									<div class="apply-form">
										<input type="name" name="first_name" class="form-control" id="inputName4" placeholder="Full Name *" />
									</div>
	
								</div>
								<input type="hidden" name="job_id" value="" />
								<div class="col-6">
									<div class="apply-form">
										<input type="Phone" name="number" class="form-control" id="inputPhone" placeholder=" Contact Number *" />
									</div>
	
								</div>
								<div class="col-6">
									<div class="apply-form">
										<input type="text" name="permanent_address" class="form-control" id="inputemail2" placeholder="Permanent Address*" />
									</div>
	
								</div>
								<div class="col-6">
									<div class="apply-form">
										<input type="text" name="temporary_address" class="form-control" id="inputemail2" placeholder="Temporary Address" />
									</div>
	
								</div>
								<div class="col-6">
									<div class="apply-form">
										<input type="text" name="email" class="form-control" id="inputemail2" placeholder="Email Address*" />
									</div>
	
								</div>
								<div class="col-12">
									<textarea class="form-control" rows="5" id="comment" name="message" placeholder="Enter message"></textarea>
								</div>
								<div class="col-lg-4">
									<div class="form-group mt-3">
										<label class="mr-4">Upload your CV:</label>
	
										<div class="file-upload-wrapper" data-text="Select your file!">
											<input name="file" type="file" class="file-upload-field" accept="image/*" />
										</div>
									</div>
								</div>
	
								<div class="col-lg-4">
									<div class="form-group mt-3">
										<label class="mr-4">Upload your Latest Photo:</label>
										<div class="file-upload-wrapper" data-text="Select your file!">
											<input name="photo" type="file" class="file-upload-field" accept="image/*" />
										</div>
									</div>
								</div>
								<div class="col-lg-4">
									<div class="form-group mt-3">
										<label class="mr-4">Upload your Scanned Passport:</label>
										<div class="file-upload-wrapper" data-text="Select your file!">
											<input name="passport" type="file" class="file-upload-field" accept="image/*" />
										</div>
									</div>
								</div>
								<div class="mr-auto">
									<button class="btn" type="submit">Submit</button>
								</div>
							</div>
						</div>
					</div>
					 
	
	
				</form>
	
			</div>
		</div>
        <Footer />
    </>
  )
}

export default Apply