// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
// import './index.css'
 
import { Header, Navbarr, About, Client, CurrentVacancy, Feature, FeatureJob, Footer, Mission, Slider, Testimonial} from './components';
 

const App = () => {
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

export default App
