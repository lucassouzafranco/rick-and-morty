import React from 'react';
import './index.css';
import rickandmorty_card_cover from '../../assets/Img/rickandmorty_card_cover.png';
import {getEpisode} from 'rickmortyapi';
import { useState } from 'react';
import axios from 'axios';

const Cards = () => {

  const [episodeOne, setEpisodeOne] = useState(null);
  const [nameEpisode, setName] = useState(null);
  
  const loadData = async () => {
    
    const request = await axios.get('https://rickandmortyapi.com/api/episode');
    const firstEpisode = await getEpisode('1');

  }

  return(
    <div className='cardContainer'>
      <div className='cardImage'>
        <img src={rickandmorty_card_cover} className='imageStyle'></img>
      </div>
      <div className='cardText'>
        <p className='textStyle'>NomeDoEp - TEMPORADA</p>
      </div>
    </div>
  )
}

export default Cards