import React, { useState } from 'react'
import styled from 'styled-components';
import TextField from "@mui/material/TextField";

function Search(props) {


  return (
    <SearchStyle>
      <div className='search'>
        <div>
          <TextField
            id="outlined"
            fullWidth
            label="Search"
          />  
        </div>
      
      </div>
    </SearchStyle>

  )
}
export default Search;

const SearchStyle = styled.div`
    padding: 1em;
    display:flex;
    
    justify-content: space-between;

    h2 {
        font-size: 1em;
    }
`