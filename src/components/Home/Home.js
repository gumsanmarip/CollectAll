import React, { useState } from 'react'
import Clubs from './Clubs';
import Feed from './Feed';


function Home(props) {


  return (
    <div>
      <h2>Home</h2>
      <div>
        <Clubs/>
      </div>
      <div>
        <Feed/>
      </div>
    </div>
      
      
  )
}
export default Home;