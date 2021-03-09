import './App.css';
import React, { useState } from 'react';

function App(properties) {
  let zmienna = useState(true);
  console.log(zmienna);
  let [isLight, setLight] = useState(false);
  let layout = "ciemny";
  if (isLight) { layout = "jasny" }
  return (
    <div className={"App " + layout}>
      Hello world
      <header className="main-header">
        <h1>Portfolio</h1>
        <nav>
          <a href="#">Główna</a>
          <a href="#">O mnie</a>
          <a href="#">Projekty</a>
          <a href="#">Kontakt</a>
        </nav>
      </header>
      <main>
        <div className="main-container">
          <div className="main-container__left">
            <img src={properties.image} alt="Zdjęcie profilowe" />
          </div>
          <div className="main-container__right">
            <header className="main-container__right-header">
              <p><h2>{properties.name}</h2></p>
            </header>
            <p>{properties.description.length > 180 ? properties.description.substring(0, 180) + "Czytaj wiecej" : properties.description}</p>
          </div>
        </div>
        <button className="button-color" onClick={() => { setLight(!isLight)}}>Zmień</button>
      </main>
    </div>
  );
}

export default App;
