import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink} from 'react-router-dom';


function Navigation(props) {


  return (
    <NavStyle>
        <div>
          <nav>
            <NavLink id="homeScreen" to="/">Home</NavLink>
            <NavLink id="searchScreen" to="/search">Search</NavLink>
            <NavLink id="exploreScreen" to="/explore">Explore</NavLink>
            <NavLink id="shopScreen" to="/shop">Shop</NavLink>
            <NavLink id="tradeScreen" to="/trade">Trade</NavLink>
          </nav>
        </div>
      </NavStyle>
      
  )
}
export default Navigation;

const NavStyle = styled.div`
    padding: 1em;
    background-color: #a1dacf;
    align-items: center;
    justify-content: space-between;

    nav{
      display: inline;
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-left: 30px;
      padding-right: 30px;
    }
`