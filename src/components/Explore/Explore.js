import React, { useState } from 'react';
import NeeshList from './NeeshList';


function Explore(props) {


  return (
    <div>
      <div>
        <h2>Explore</h2>
      </div>

      <div className="addButton">
        <button>Add Neesh</button>
      </div>
      <div className="neeshList">
        <NeeshList/>
      </div>


    </div>
      
  )
}
export default Explore;