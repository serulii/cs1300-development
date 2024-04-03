import "./App.css";
import { useState } from "react";
import characterData from "./assets/character-data.json";
import CharacterCard from "./components/CharacterCard";
import MiniCharacterCard from "./components/MiniCharacterCard";

function App() {
  const [likeContents, setLikeContents] = useState([]);
  const [ownedContents, setOwnedContents] = useState([]);
  const [displayChars, setDisplayChars] = useState([]);

  function likeCharacter(charIdx) {
    // Makes sure you don't add duplicates
    if (!likeContents.includes(charIdx)) {
      setLikeContents([...likeContents, charIdx]);
    }
  }
  function ownCharacter(charIdx) {
    // Makes sure you don't add duplicates
    if (!ownedContents.includes(charIdx)) {
      setOwnedContents([...ownedContents, charIdx]);
    }
  }
  function deleteCharacterLikes(charIdx) {
    // delete using filter
    setLikeContents(
      likeContents.filter(function (i) {
        return i !== charIdx;
      })
    );
  }
  function deleteCharacterOwned(charIdx) {
    // delete using filter
    setOwnedContents(
      ownedContents.filter(function (i) {
        return i !== charIdx;
      })
    );
  }
  function getLikes() {
    if (likeContents.length === 0) {
      return <div>No characters liked!</div>;
    }
    return (
      <div id="list-container">
        {likeContents.map((item, index) => (
          <MiniCharacterCard index={item} delete={deleteCharacterLikes} />
        ))}
      </div>
    );
  }
  function getOwned() {
    if (ownedContents.length === 0) {
      return <div>No characters owned!</div>;
    }
    return (
      <div id="list-container">
        {ownedContents.map((item, index) => (
          <MiniCharacterCard index={item} delete={deleteCharacterOwned} />
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <div id="scrollable-container">
        <h1>Genshin Impact Characters</h1>
        <div id="filter-sort-bar">
          <button>
            <img
              className="filter-img"
              src="images/elements/element_anemo.png"
              alt="Filter by Anemo element only"
            />
          </button>
          <button>
            <img
              className="filter-img"
              src="images/elements/element_cryo.png"
              alt="Filter by Cryo element only"
            />
          </button>
          <button>
            <img
              className="filter-img"
              src="images/elements/element_dendro.png"
              alt="Filter by Dendro element only"
            />
          </button>
          <button>
            <img
              className="filter-img"
              src="images/elements/element_electro.png"
              alt="Filter by Electro element only"
            />
          </button>
          <button>
            <img
              className="filter-img"
              src="images/elements/element_geo.png"
              alt="Filter by Geo element only"
            />
          </button>
          <button>
            <img
              className="filter-img"
              src="images/elements/element_hydro.png"
              alt="Filter by Hydro element only"
            />
          </button>
          <button>
            <img
              className="filter-img"
              src="images/elements/element_pyro.png"
              alt="Filter by Pyro element only"
            />
          </button>
        </div>
        <div id="menu-container">
          {characterData.map((item, index) => (
            <CharacterCard
              index={index}
              likeButton={likeCharacter}
              ownButton={ownCharacter}
            />
          ))}
        </div>
      </div>
      <div id="lists-container">
        <h2>My Lists</h2>
        <div id="likes">
          <h3>Wishlist</h3>
          {getLikes()}
        </div>
        <div id="owned">
          <h3>Characters I have</h3>
          {getOwned()}
        </div>
      </div>
    </div>
  );
}

export default App;
