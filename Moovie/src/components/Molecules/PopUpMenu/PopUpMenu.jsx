import { Link } from "react-router-dom";
import "./PopUpMenu.css";
import X from "../../../assets/X.png";

const PopUpMenu = ({ isShowing, onClose }) => {
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
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpMenu;
