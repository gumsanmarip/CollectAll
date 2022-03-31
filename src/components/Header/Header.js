import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavItems from '../NavItems/Navigation';
import Search from '../Search/Search';

function Header(){

 return(
 <div>
 <HeaderStyle>
    <div className='topheader'>
        <div className='logo'>
            <h1><Link to="/">NEESH</Link></h1>
        </div>
        <div>
            <Search/>
        </div>
        <div className='menu'>
            <MenuStyle>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </MenuStyle>
        </div>    
    </div>

    <div>
        <NavItems/>
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
    flex-direction:column; 
    justify-content: space-between;
    

    .topheader {
        display:flex;
        flex-direction:row;
        align-items: center;
    }
    .menu {
        display:flex;
        flex-direction:row-reverse;
        align-items: center;
        margin-left: auto;
    }

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