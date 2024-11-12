import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import Home from './home/Home'
import Courses from './courses/Courses'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './components/Signup'
import About from './components/About'

function App() {
  const location = useLocation();
  
  // Check if current path is signup
  const hideNavbarAndFooter = location.pathname === "/signup";

  return (
    <>
      {/* Conditionally render Navbar and Footer */}
      {!hideNavbarAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path='/about' element={<About/>}/>
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;
