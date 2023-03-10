import React, { Suspense, lazy } from 'react'
import './App.css'
import {
  Routes,
  Route,
  Navigate,

} from "react-router-dom";
const Footer_2 = lazy(()=> import('./components/Footer-2/Footer_2'));
const ContactUs  =lazy(()=> import('./pages/ContactUs'));
const ContactUsForm = lazy(()=> import( './components/ContactUsForm/ContactUsForm'));
const Scrollbtn = lazy(()=> import( './components/Scrollbtn/Scrollbtn'));
const Home = lazy(()=> import( './pages/Home'));
const Navbar = lazy(()=> import( './components/Navbar/Navbar'));


function App() {


  return (
    <div>
      <Suspense>
      <Navbar/>
    </Suspense>
    <Suspense>
    <Routes>
        <Route path="/" element={<Suspense><Home/></Suspense>} />
        <Route path="/contact" element={<Suspense><ContactUs/></Suspense>} />
        {/* <Route path="*" element={<Suspense><Error /></Suspense>} /> */}
      </Routes>
    </Suspense>
    <Suspense>
      <Scrollbtn/>
    </Suspense>
    <Suspense>
      <Footer_2/>
    </Suspense>

    </div>
      
  )
}

export default App
