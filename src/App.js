// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Home from './constraints/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutCompany from './constraints/aboutcompany/AboutCompany';
import Documentation from './constraints/documentation/Documentation';
import JobSector from './constraints/jobsector/JobSector';
import JobSector2 from './constraints/jobsector/JobSector2';
import Gallery1 from './constraints/gallery/Gallery1';
import Gallery2 from './constraints/gallery/Gallery2';
import Gallery3 from './constraints/gallery/Gallery3';
import Contact from './constraints/contact/Contact';
import Apply from './constraints/apply/Apply';
import AboutNepal from './constraints/aboutcompany/AboutNepal';
import FromMD from './constraints/aboutcompany/FromMD';
import Recruit from './constraints/aboutcompany/Recruit';
import WhyUs from './constraints/aboutcompany/WhyUs';
// import './index.css'
 
//import { Header, Navbarr, About, Client, CurrentVacancy, Feature, FeatureJob, Footer, Mission, Slider, Testimonial} from './components';
 

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-company' element={<AboutCompany />} />
        <Route path='/about-nepal' element={<AboutNepal />} />
        <Route path='/fromMD' element={<FromMD />} />
        <Route path='/recruitment' element={<Recruit />} />
        <Route path='/why-us' element={<WhyUs />} />
        <Route path='/job-sector' element={<JobSector />} />
        <Route path='/job-sector2' element={<JobSector2 />} />
        <Route path='/documentation' element={<Documentation />} />
        <Route path='/gallery1' element={<Gallery1 />} />
        <Route path='/gallery2' element={<Gallery2 />} />
        <Route path='/gallery3' element={<Gallery3 />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/apply' element={<Apply />} />
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
