 import React from 'react'
 import { Header, Navbarr, About, Client, CurrentVacancy, Feature, FeatureJob, Footer, Mission, Slider, Testimonial} from '../../components';
 import '../../App.css';
 
 const Home = () => {
   return (
     <>
        <Header/>
   <Navbarr />
   <Slider />
   <Feature />
 <About />
 <CurrentVacancy />
 <FeatureJob />
 <Mission />
<Testimonial />
<Client />
  <Footer />
     </>
   )
 }
 
 export default Home