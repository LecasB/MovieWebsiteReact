import { Link } from "react-router-dom";
import "./PopUpMenu.css";
import X from "../../../assets/X.png";
import Sound from "../../Atoms/Sound/Sound";
import noid from "../../../assets/noid.mp3";
import chroma from "../../../assets/chroma.mp3";
import wasDead from "../../../assets/wasDead.mp3";

const PopUpMenu = ({ isShowing, onClose }) => {
  const soundFiles = [noid, chroma, wasDead];
  return (
    <>
      {isShowing && (
        <div className="popup-menu">
          <div className="X-container">
            <img className="X" src={X} onClick={onClose} alt="Close" />
          </div>
          <div className="menu-container">
            <Link to="/">Home</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/wishList">WishList</Link>
            <Link to="/movies">Movies</Link>
            <Sound soundFile={soundFiles} />
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpMenu;
