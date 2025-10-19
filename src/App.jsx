import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Component/About.jsx";
import Projects from "./Component/Projects.jsx";
import Cursor from "./Cursor/cursor.jsx";
import  Home from "./Component/Home.jsx";
import Header from './Component/Header';
import Footer from './Component/Footer';
const App = () => {
  return (
    <Router>
      {/* Custom Cursor visible on all pages */}
      <Cursor />
<Header name="Xhaffi Xcript"/>
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
       <Footer/>
    </Router> 
  );
};

export default App;