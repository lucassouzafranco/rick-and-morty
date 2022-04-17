import React from 'react';
import './index.css';
import {BiSearchAlt2} from 'react-icons/bi';

const Main = () => {

  return (
    <div className='inputArea'>
      <div className='inputContainer'>
        <input placeholder=' Digite o nome de um episódio'></input>
        <BiSearchAlt2 className='iconStyle'/>
      </div>
    </div>  
  )
}

export default Main