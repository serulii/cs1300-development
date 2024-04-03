import React from "react";
import characterData from "../assets/character-data.json";
import "./MiniCharacterCard.css";
import { MdDeleteOutline } from "react-icons/md";

function MiniCharacterCard(props) {
  return (
    <div id="mini-item-container">
      <div id="item-pic">
        <img
          id="mini-img"
          src={characterData[props.index].image}
          alt={characterData[props.index].name}
        ></img>
      </div>
      <div id="mini-item-desc">
        <button id="del-button" onClick={() => props.delete(props.index)}>
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
}

export default MiniCharacterCard;
