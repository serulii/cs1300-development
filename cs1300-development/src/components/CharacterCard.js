import React from "react";
import characterData from "../assets/character-data.json";
import "./CharacterCard.css";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";

function getElement(element) {
  return "images/elements/element_" + element + ".png";
}

function CharacterCard(props) {
  return (
    <div id="item-container">
      <div id="item-pic">
        <img
          src={characterData[props.index].image}
          alt={characterData[props.index].name}
        ></img>
        <img
          id="element-img"
          src={getElement(characterData[props.index].element)}
          alt="element"
        ></img>
      </div>
      <div id="item-desc">
        <h3>{characterData[props.index].name}</h3>
        <div id="button-bar">
          <button onClick={() => props.ownButton(props.index)}>
            <FaRegCheckSquare />
          </button>
          <button onClick={() => props.likeButton(props.index)}>
            <FaRegHeart />
          </button>
        </div>
        {/* <p>{characterData[props.index].rarity}</p>
        <p>{characterData[props.index].weapon}</p> */}
      </div>
    </div>
  );
}

export default CharacterCard;
