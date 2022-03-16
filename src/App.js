import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


import Header from './components/Header/Header';

import Search from './components/Search';
import Explore from './components/Explore';
import Shop from './components/Shop';
import Trade from './components/Trade'
import Home from './components/Home';
import Footer from './components/Footer';

function App() {


  return (
    <React.StrictMode>

      <Header />
    
      <Routes>
        <Route path="header" element={<Header/>}/>  
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


