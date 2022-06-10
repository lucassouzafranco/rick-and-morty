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

  function stringTreatment(event) {
    if(word) {
      setWord('');
    }
    let string = event.target.value;
    string = string.trim();
    string = string[0].toUpperCase() + string.substring(1);
    setWord(string);
  }
  
  return (
    <>
      <div className='inputArea'>
        <div className='inputContainer'>
          <input placeholder=' Digite o nome de um episódio' onChange={stringTreatment}></input>
          <BiSearchAlt2 className='iconStyle'/>
        </div>
      </div>  
      {word ?
        <>
         <Cards eps={episodes.filter(eps => eps.name.includes(word))}/>
        </>
        : 
        <>
          <Cards eps={episodes}/> //todos os episódios
        </>
      }
    </>
  )

}

export default Search