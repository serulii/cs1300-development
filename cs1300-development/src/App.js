import "./App.css";
import characterData from "./assets/character-data.json";
import CharacterCard from "./components/CharacterCard";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div id="scrollable-container">
        <h1>Genshin Characters</h1>
        <div id="menu-container">
          {characterData.map((item, index) => (
            <CharacterCard index={index} />
          ))}
        </div>
      </div>
      <div id="cart-container">
        <h2>My Lists</h2>
      </div>
    </div>
  );
}

export default App;
