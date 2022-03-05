import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, NavLink, Routes, Route, useNavigate } from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import Explore from './components/Explore';
import Shop from './components/Shop';
import Trade from './components/Trade';
import Feed from './components/Feed'
import Footer from './components/Footer';

function App() {


  return (
    <React.StrictMode>
      <Header />

      <div>
        <nav>
          <NavLink id="groups" to="/search">Search</NavLink>
          <NavLink id="groups" to="/explore">Explore</NavLink>
          <NavLink id="groups" to="/shop">Shop</NavLink>
          <NavLink id="groups" to="/trade">Trade</NavLink>
        </nav>
      </div>
    
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
