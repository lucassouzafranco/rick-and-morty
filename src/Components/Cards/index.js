import React from 'react';
import './index.css';

const Cards = ({eps}) => {

  return(

    <>
      <div className='flexContainer'>
        {eps.map((item, key) => (
          <div className='cardContainer'>
            <div className='cardImage'>
              <img src={`https://rickandmortyapi.com/api/character/avatar/${key+1}.jpeg`} className='imageStyle'></img>
            </div>
            <div className='cardText'>  
              <div>
                <p className='episodeTitle'>{item.name} - {item.episode}</p>
              </div>
              <div>
                <p className='releaseDate'>{item.air_date}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
    </>

  )
}

export default Cards