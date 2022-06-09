import React from 'react';
import './index.css';

const Header = () => {
  return(
      <div className='imageAndTitleArea'>
        <div className='imageContainer'/>
        <div className='titleContainer' >
          <h2 className='title'>Rick and Morty</h2>
        </div>
      </div> 
  )
}

export default Header