// PopUpDelete.js
import React from "react";
import "./PopUpDelete.css";
import hahaha from "../../../assets/hahaha.gif";

const PopUpDelete = ({ title, name, onConfirm, onCancel }) => (
  <div className="popup-overlay" onClick={onCancel}>
    <div className="popup-delete" onClick={(e) => e.stopPropagation()}>
      <h1>Doom is about to destroy this review, are you sure?</h1>
      <img src={hahaha} alt="Delete confirmation GIF" />
      <h2>Movie: {title}</h2>
      <h3>By: {name}</h3>
      <button onClick={onConfirm}>Doom it!</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  </div>
);

export default PopUpDelete;
