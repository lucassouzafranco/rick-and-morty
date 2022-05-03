import React from "react";
import './index.css';
import axios from 'axios';
import { useState } from "react";
import Cards from "../Cards";

const Footer = () => {
  const [eps, setEps] = useState([{}]);
  const [loading, setLoading] = useState(false);
  let [pages, setPages] = useState(2);

  const load = async() => {
    if (pages <= 3) {
      setLoading(true);
      await axios.get(`https://rickandmortyapi.com/api/episode?page=${pages}`)
      .then((response) =>{
            if(response) {
              setEps(response.data.results);
              setLoading(false);
              setPages(pages + 1);
            }
          })
            .catch((erro) => console.log(erro));
      }
    }

  return(
    <>
      {loading ? <span>Carregando</span>: <Cards eps={eps}/>}
        <div className="container">
          {pages > 3 && (
            <div className="disabledButton">
              <h2 className="disabledButtonText">Carregar mais ep's</h2>
            </div>
          )}
          {pages <= 3 && (
            <div className="plusButton" >
              <h2 className="buttonText" onClick={load}>Carregar mais ep's</h2>
            </div>
          )}
        </div>
    </>
  )
}

export default Footer