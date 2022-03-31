import React, { useState } from 'react';
import Search from '../Search/Search';
import ItemsList from '../ItemsList';
import styled from 'styled-components';

function Shop(props) {


  return (
    <ShopStyle>
      <div className='shop'>
        <div className='shophead'>
          <div>
            <h2>Shop</h2>
          </div>
        </div>
        
        <div className='itemslist'>
          <ItemsList/>
        </div>
        

      </div>

    </ShopStyle>
    
     

  )
}
export default Shop;

const ShopStyle = styled.div`
    padding: 1em;
    display:flex;

    .shophead {
      display:flex;
      flex-direction:row;
    }
    

    h2 {
        font-size: 1em;
    }
`