import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PreventionTips from './components/PreventionTips';
import Video from './components/video';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import News from './components/News';
import Symptoms from './components/symptoms';
import DenguePage from './components/dengue';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dengue" element={<DenguePage />} />
          <Route path="/prevent" element={<PreventionTips />} /> 
          <Route path="/video" element={<Video />} />
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="news" element={<News />} />
            <Route path="symptoms" element={<Symptoms />} />

          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
