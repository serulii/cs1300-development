// TODO: create a component that displays a single bakery item
import React from "react";
import characterData from "../assets/character-data.json";
import "./CharacterCard.css";

function CharacterCard(props) {
  return (
    <div id="item-container">
      <div id="item-pic">
        <img
          src={characterData[props.index].image}
          alt={characterData[props.index].name}
        ></img>
      </div>
      <div id="item-desc">
        <h3>{characterData[props.index].name}</h3>
        <p>{characterData[props.index].element}</p>
        <p>{characterData[props.index].rarity}</p>
        <p>{characterData[props.index].weapon}</p>
        {/* <button onClick={() => props.addFunc(props.index)}>Add to Cart</button> */}
      </div>
    </div>
  );
}

export default CharacterCard;
