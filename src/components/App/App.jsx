import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App () {

  const getThoseGifs = () => {
    // TODO: make request to our server
    console.log('getting gifs from our server');
    axios.get('/api/giphy')
    .then((response) => {
      console.log('those gifs', response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">APIS</h1>
          <h4><i>APIS</i></h4>
        </header>
        <button onClick={() => getThoseGifs()}>Get Gifs</button>
      </div>
    );
  
}

export default App;
