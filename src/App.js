import logo from './logo.svg';
import './App.css';

import "./styles.css"

import React from 'react';
import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes, } from "react-router-dom"    

function App() {
  return (
    // navbar
    <div className="App, container">
      <>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </>
    </div>
  );
}

export default App;
