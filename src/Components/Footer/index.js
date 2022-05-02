import React from "react";
import './index.css';
import axios from 'axios';
import { useState } from "react";
import Cards from "../Cards";

const Footer = ({newPage}) => {
  const [eps, setEps] = useState([{}]);
  const [loading, setLoading] = useState(false);
  
  let pages = newPage - 1;
  const load = async() => {
    if (pages <= newPage) {
      setLoading(true);
      await axios.get(`https://rickandmortyapi.com/api/episode?page=${pages}`)
      .then((response) =>{
            if(response) {
              setEps(response.data.results);
              setLoading(false);
              pages += 1;
            }
          })
            .catch((erro) => console.log(erro));
      }
    }

  return(
    <>
      {loading ? <span>Carregando</span>: <Cards eps={eps}/>}
        <div className="container">
          <div className="plusButton">
            <h2 className="buttonText" onClick={load}>Carregar mais ep's</h2>
          </div>
        </div>
    </>
  )
}

export default Footer