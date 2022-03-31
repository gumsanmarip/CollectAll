import React, { useState } from 'react'
import styled from 'styled-components';

function Footer(props) {


  return (
    <FooterStyle>
      <div className='footer'>
        <p>About Neesh</p>
        <p>Help & Contact</p>
        <p>Social</p>
        <p>Copyright 2022 Neesh Inc All Rights Reserved</p>
    </div>
    </FooterStyle>  
  )
}
export default Footer;

const FooterStyle = styled.div`
  .footer {
    padding: 1em;
    background-color: #8aa4b9;
    color: white;

    left: 0;
    bottom: 0;
    width: 100%;

    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }
  p {
      font-size: .75em;
  }
`