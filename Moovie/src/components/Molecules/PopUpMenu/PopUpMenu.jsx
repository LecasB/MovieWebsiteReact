import { Link, useActionData } from "react-router-dom";
import "./PopUpMenu.css";
import X from "../../../assets/X.png";
import Sound from "../../Atoms/Sound/Sound";
import like from "../../../assets/like.mp3";
import krypto from "../../../assets/krypto.mp3";
import awser from "../../../assets/awser.mp3";
import grinder from "../../../assets/grinder.mp3";
import { useState } from "react";

const PopUpMenu = ({ isShowing, onClose }) => {
  const [background, setBackground] = useState("");
  const soundFiles = [awser, like, krypto, grinder];

  const changedBg = (link) => {
    setBackground(link);
  };

  return (
    <>
      {isShowing && (
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="popup-menu"
        >
          <div className="X-container">
            <img className="X" src={X} onClick={onClose} alt="Close" />
          </div>
          <div className="menu-container">
            <Link className="items-style" to="/">
              Home
            </Link>
            <Link className="items-style" to="/reviews">
              Reviews
            </Link>
            <Link className="items-style" to="/wishList">
              WishList
            </Link>
            <Link className="items-style" to="/movies">
              Movies
            </Link>
            <Sound soundFile={soundFiles} bgFunc={changedBg} />
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpMenu;
