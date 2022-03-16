import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavItems from './Navigation';
function Header(){

 return(
 <HeaderStyle>
     <h1><Link to="/">NEESH</Link></h1>
    <NavItems></NavItems>
    <MenuStyle>
        <li><Link to="account">Login/Register/Logout</Link></li>
        <li><Link to="notifications">Notifications</Link></li>
        <li><Link to="profile">Profile</Link></li>
    </MenuStyle>

 </HeaderStyle>
 );
}

export default Header;

const HeaderStyle = styled.div`
    padding: 1em;
    background-color: #daa1ac;
    display:flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-weight: bold;
        font-size: 1.5em;
    }
`

const MenuStyle = styled.ul`
  li {
        display: inline-block;
        padding: 0.3rem 1rem;
        
        a {
            text-decoration: none;
            color: black;
            font-size: 1em;
        }
    }
`