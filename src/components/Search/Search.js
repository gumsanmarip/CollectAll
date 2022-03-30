import React, { useState } from 'react'
import styled from 'styled-components';

function Search(props) {


  return (
    <SearchStyle>
      <h2>Search</h2>
    </SearchStyle>

  )
}
export default Search;

const SearchStyle = styled.div`
    padding: 1em;
    background-color: #daa1ac;
    display:flex;
    
    justify-content: space-between;

    h2 {
        font-size: 1em;
    }
`