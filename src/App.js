import './App.css';
import React, { useState } from 'react';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom';


import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Search from './components/Search';
import Explore from './components/Explore';
import Shop from './components/Shop';
import Trade from './components/Trade';
import Footer from './components/Footer';

function App() {


  return (
    <React.StrictMode>
      
      <Header />

      <Navigation />
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="explore" element={<Explore/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="trade" element={<Trade/>}/>
      </Routes> 

      <Footer />

    </React.StrictMode>
  )
};

export default App;


