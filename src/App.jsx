import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.css'
import Footer from './components/footer/Footer'
import Navbar from './components/nav/Navbar'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import Course from './pages/course/Course'
import Err from './pages/err/Err'
import Home from './pages/home/Home'




const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/course" element={<Course/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Err/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App
