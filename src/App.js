// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Home from './constraints/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobSector from './constraints/jobsector/JobSector';
// import './index.css'
 
//import { Header, Navbarr, About, Client, CurrentVacancy, Feature, FeatureJob, Footer, Mission, Slider, Testimonial} from './components';
 

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/job-sector' element={<JobSector />} />
      </Routes>
    </BrowserRouter>
    
   {/* <Header/>
   <Navbarr />
   <Slider />
   <Feature />
 <About />
 <CurrentVacancy />
 <FeatureJob />
 <Mission />
<Testimonial />
<Client />
  <Footer /> */}

   
    </>
  )
}

export default App
