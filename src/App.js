import './App.css';
import "./styles.css"
import './pages/About.css';
import './pages/Account.css'

import React from 'react';
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Account from "./pages/Account";
import { Route, Routes, } from "react-router-dom";    

function App() {
  return (
    // navbar
    <div className="App, container">
      <>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/About" element={<About />} />
            <Route path="/pages/Account" element={<Account />} />
          </Routes>
      </>
    </div>
  );
}

export default App;
