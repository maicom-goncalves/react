import React, { useEffect, useState } from "react";
import './Components/style.css';


import { AnimeList } from "./Components/AnimeList";

function App() {

  const [search, setSearch] = useState('Naruto');
  const [animeData, setAnimeData] = useState();
  
  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=24`)
    const resData = await res.json();
    console.log(resData)
    setAnimeData(resData.data)
  }
  useEffect(() => {
    getData()
  }, [search])

  return (
    <>
      
      <div className="header">
        <h1><b>BUSCADOR DE ANIMES</b></h1>
        <div className="search-box">
          <input type="search" placeholder="Procure seu anime favorito"
            onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>

      <div className="container">
        <div className="anime-row">
            <AnimeList
                animelist={animeData}
              />
            <br />          
        </div>
      </div>
    </>
  );
}

export default App;
