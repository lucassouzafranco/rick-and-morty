import React from 'react';
import './index.css';
import rickandmorty_card_cover from '../../assets/Img/rickandmorty_card_cover.png';
import {getEpisode} from 'rickmortyapi';
import { useState } from 'react';
import axios from 'axios';
import {episodios} from '../../episodios';

const Cards = (props) => {

  const [episodeOne, setEpisodeOne] = React.useState((null), [props.episode]);
  const [nameEpisode, setName] = React.useState((null), [props.name]);
  
  const loadData = async () => {
    const request = await axios.get('https://rickandmortyapi.com/api/episode');
    //setEpisodeOne(await getEpisode(1));
    //console.log(episodeOne);
  }

  return(
    <>
      <div className='flexContainer'>
      {episodios.map((item) => (
        <div className='cardContainer'>
          <div className='cardImage'>
            <img src={rickandmorty_card_cover} className='imageStyle'></img>
          </div>
          <div className='cardText'>
            <p className='textStyle'>{item.nome}</p>
            <p className='releaseDate'>{item.temporada}</p>
          </div>
        </div>
      ))}
      </div>
    </>
  )
}

export default Cards