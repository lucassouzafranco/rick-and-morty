import React, { useState } from 'react';
import './index.css';
import {BiSearchAlt2} from 'react-icons/bi';
import { useEffect } from 'react';
import axios from 'axios';
import Cards from '../Cards';

const Search = () => {

  const [word, setWord] = useState('');
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      await axios.get('https://rickandmortyapi.com/api/episode')
        .then((response) =>{
          if(response) {
            setEpisodes(response.data.results);
            setLoading(false);
          }
        })
          .catch((erro) => console.log(erro));
    }
    loadData();
  }, [])
  console.log();

  return (
    <>
      <div className='inputArea'>
        <div className='inputContainer'>
          <input placeholder=' Digite o nome de um episódio' onChange={(e) => setWord(e.target.value)}></input>
          <BiSearchAlt2 className='iconStyle'/>
        </div>
      </div>  
      {word ?
        <>
         <Cards eps={episodes.filter(eps => eps.name.includes(word))}/>
        </>
        : 
        <>
          <Cards eps={episodes}/>
        </>
      }
    </>
  )

}

export default Search