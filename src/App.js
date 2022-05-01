import React from 'react';
import Header from './Components/Header/index.js';
import 'normalize.css';
import Main from './Components/Main/index.js'
import Cards from './Components/Cards/index.js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Footer from './Components/Footer/index.js';

const App = () => {

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

  return (
    <>
      <Header/>
      <Main/> 
      {loading ? <span>Carregando</span> : <Cards eps={episodes}/>}
      <Footer/>
    </>
  );
}

export default App;
