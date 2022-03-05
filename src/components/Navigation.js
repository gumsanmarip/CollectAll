import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink} from 'react-router-dom';


function Navigation(props) {


  return (
    <NavStyle>
        <div role="banner">
          <nav>
            <li><NavLink id="homeScreen" to="/">Home</NavLink></li>
            <li><NavLink id="searchScreen" to="search">Search</NavLink></li>
            <li><NavLink id="exploreScreen" to="explore">Explore</NavLink></li>
            <li><NavLink id="shopScreen" to="shop">Shop</NavLink></li>
            <li><NavLink id="tradeScreen" to="trade">Trade</NavLink></li>
          </nav>
        </div>
      </NavStyle>
      
  )
}
export default Navigation;

const NavStyle = styled.div`
    padding: 1em;
    background-color: #a1dacf;

    div{
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    nav{
      display: inline-flex;
    }

    li{
      list-style-type: none;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;
    }
`