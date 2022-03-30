import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/Header/Header';
import Login from './components/Header/Login';
import Search from './components/Search/Search';
import Explore from './components/Explore/Explore';
import Shop from './components/Shop/Shop';
import Trade from './components/Trade/Trade'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

import { useStateValue } from './state/StateProvider';

function App() {

  //const [{ user }, dispatch] = useStateValue();
  return (
    <React.StrictMode>
      <div className='app'>        
      <Header />    
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/trade" element={<Trade/>}/>
      </Routes> 
      <Footer />
      </div>
    </React.StrictMode>
  )
};

export default App;


