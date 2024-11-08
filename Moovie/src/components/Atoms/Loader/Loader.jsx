import React from "react";
import loadergif from "../../../assets/load.gif";
import "./Loader.css"; // Import the CSS file

const Loader = ({ text }) => {
  return (
    <div className="loader-container">
      <img src={loadergif} alt="loading..." />
      <h1>Doom is processing {text}...!</h1>
      <p>Please be patient</p>
    </div>
  );
};

export default Loader;
