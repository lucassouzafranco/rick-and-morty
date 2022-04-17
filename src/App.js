import React from 'react';
import Header from './Components/Header/index.js';
import 'normalize.css';
import Main from './Components/Main/index.js'
import Cards from './Components/Cards/index.js';

const App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <Cards/>
    </>
  );
}

export default App;
