import React, { useState } from 'react'
import Search from '../Search/Search';
import ItemsList from '../ItemsList';
import styled from 'styled-components';

function Trade(props) {


  return (
    <TradeStyle>
      <div className='trade'>
        <div className='tradehead'>
          <div>
            <h2>Trade</h2>
          </div>
          
        </div>
        
        <div className='itemslist'>
          <ItemsList/>
        </div>
        

      </div>

    </TradeStyle>

  )
}
export default Trade;
const TradeStyle = styled.div`
    padding: 1em;
    display:flex;

    .tradehead {
      display:flex;
      flex-direction:row;
    }
    

    h2 {
        font-size: 1em;
    }
`