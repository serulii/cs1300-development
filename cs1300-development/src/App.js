import "./App.css";
import { useState } from "react";
import characterData from "./assets/character-data.json";
import CharacterCard from "./components/CharacterCard";
import MiniCharacterCard from "./components/MiniCharacterCard";

function App() {
  const [likeContents, setLikeContents] = useState([]);
  const [ownedContents, setOwnedContents] = useState([]);
  const [currElement, setCurrElement] = useState("none");
  const [currWeapon, setCurrWeapon] = useState("none");
  const [sortType, setSortType] = useState("default");

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
      <div>
        <p className="counter">Total wished: {likeContents.length}</p>
        <div id="list-container">
          {likeContents.map((item, index) => (
            <MiniCharacterCard index={item} delete={deleteCharacterLikes} />
          ))}
        </div>
      </div>
    );
  }
  function getOwned() {
    if (ownedContents.length === 0) {
      return <div>No characters owned!</div>;
    }
    return (
      <div>
        <p className="counter">Total owned: {ownedContents.length}</p>
        <div id="list-container">
          {ownedContents.map((item, index) => (
            <MiniCharacterCard index={item} delete={deleteCharacterOwned} />
          ))}
        </div>
      </div>
    );
  }

  function filterElementHelper(character) {
    if (currElement === "none") {
      return true;
    }
    if (character.element === currElement) {
      return true;
    }
    return false;
  }

  function filterWeaponHelper(character) {
    if (currWeapon === "none") {
      return true;
    }
    if (character.weapon === currWeapon) {
      return true;
    }
    return false;
  }

  function resetFilters() {
    setCurrElement("none");
    setCurrWeapon("none");
    setSortType("default");
  }

  // Helper to sort alphabetically
  function sortHelper(a, b) {
    if (sortType === "default") {
      return 0;
    }
    return a.name.localeCompare(b.name);
  }

  function getMenuCharacters() {
    return characterData
      .filter(filterElementHelper)
      .filter(filterWeaponHelper)
      .sort(sortHelper)
      .map((item, index) => (
        <CharacterCard
          index={item.id}
          likeButton={likeCharacter}
          ownButton={ownCharacter}
        />
      ));
  }

  function applyElementFilter(element) {
    if (currElement === element) {
      setCurrElement("none");
    } else {
      setCurrElement(element);
    }
  }

  function applyWeaponFilter(weapon) {
    if (currWeapon === weapon) {
      setCurrWeapon("none");
    } else {
      setCurrWeapon(weapon);
    }
  }

  function buttonColor(buttonType) {
    if (
      currElement === buttonType ||
      currWeapon === buttonType ||
      sortType === buttonType
    ) {
      return { background: "#d9d9d9" };
    }
    return { background: "#eeeeee" };
  }

  function getFilterBar() {
    return (
      <div id="filter-bar">
        <div>
          <button style={{ padding: "14px" }} onClick={() => resetFilters()}>
            Reset Filters
          </button>
        </div>
        <div>
          <button
            style={buttonColor("anemo")}
            onClick={() => applyElementFilter("anemo")}
          >
            <img
              className="filter-img"
              src="images/elements/element_anemo.png"
              alt="Filter by Anemo element only"
            />
          </button>
          <button
            style={buttonColor("cryo")}
            onClick={() => applyElementFilter("cryo")}
          >
            <img
              className="filter-img"
              src="images/elements/element_cryo.png"
              alt="Filter by Cryo element only"
            />
          </button>
          <button
            style={buttonColor("dendro")}
            onClick={() => applyElementFilter("dendro")}
          >
            <img
              className="filter-img"
              src="images/elements/element_dendro.png"
              alt="Filter by Dendro element only"
            />
          </button>
          <button
            style={buttonColor("electro")}
            onClick={() => applyElementFilter("electro")}
          >
            <img
              className="filter-img"
              src="images/elements/element_electro.png"
              alt="Filter by Electro element only"
            />
          </button>
          <button
            style={buttonColor("geo")}
            onClick={() => applyElementFilter("geo")}
          >
            <img
              className="filter-img"
              src="images/elements/element_geo.png"
              alt="Filter by Geo element only"
            />
          </button>
          <button
            style={buttonColor("hydro")}
            onClick={() => applyElementFilter("hydro")}
          >
            <img
              className="filter-img"
              src="images/elements/element_hydro.png"
              alt="Filter by Hydro element only"
            />
          </button>
          <button
            style={buttonColor("pyro")}
            onClick={() => applyElementFilter("pyro")}
          >
            <img
              className="filter-img"
              src="images/elements/element_pyro.png"
              alt="Filter by Pyro element only"
            />
          </button>
        </div>
        <div>
          <button
            style={buttonColor("bow")}
            onClick={() => applyWeaponFilter("bow")}
          >
            <img
              className="filter-img"
              src="images/weapons/weapon_bow.png"
              alt="Filter by bow users only"
            />
          </button>
          <button
            style={buttonColor("catalyst")}
            onClick={() => applyWeaponFilter("catalyst")}
          >
            <img
              className="filter-img"
              src="images/weapons/weapon_catalyst.png"
              alt="Filter by catalyst users only"
            />
          </button>
          <button
            style={buttonColor("claymore")}
            onClick={() => applyWeaponFilter("claymore")}
          >
            <img
              className="filter-img"
              src="images/weapons/weapon_claymore.png"
              alt="Filter by claymore users only"
            />
          </button>
          <button
            style={buttonColor("polearm")}
            onClick={() => applyWeaponFilter("polearm")}
          >
            <img
              className="filter-img"
              src="images/weapons/weapon_polearm.png"
              alt="Filter by polearm users only"
            />
          </button>
          <button
            style={buttonColor("sword")}
            onClick={() => applyWeaponFilter("sword")}
          >
            <img
              className="filter-img"
              src="images/weapons/weapon_sword.png"
              alt="Filter by sword users only"
            />
          </button>
        </div>
      </div>
    );
  }

  function getSortBar() {
    return (
      <div id="sort-bar">
        <button
          onClick={() => setSortType("default")}
          style={buttonColor("default")}
        >
          Sort by default
        </button>
        <button
          onClick={() => setSortType("alphabetical")}
          style={buttonColor("alphabetical")}
        >
          Sort A-Z
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <div id="scrollable-container">
        <h1>Genshin Impact Characters</h1>
        {getFilterBar()}
        {getSortBar()}
        <div id="menu-container">{getMenuCharacters()}</div>
      </div>
      <div id="lists-container">
        <h2>My Lists</h2>
        <div id="likes">
          <h3 id="list-header">Wishlist</h3>
          {getLikes()}
        </div>
        <div id="owned">
          <h3 id="list-header">Characters I have</h3>
          {getOwned()}
        </div>
      </div>
    </div>
  );
}

export default App;
