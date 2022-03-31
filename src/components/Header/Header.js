import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavItems from '../NavItems/Navigation';
import Search from '../Search/Search';

function Header(){

 return(
 <div>
 <HeaderStyle>
    <div>
        <h1><Link to="/">NEESH</Link></h1>
    </div>
    <div>
        <NavItems/>
    </div>
   
    <div>
        <MenuStyle>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </MenuStyle>
    </div>

    

 </HeaderStyle>
 </div>    
 );
}

export default Header;

const HeaderStyle = styled.div`
    padding: 1em;
    background-color: #daa1ac;
    display:flex;
    
    justify-content: space-between;

    p {
        font-size: 1em;
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