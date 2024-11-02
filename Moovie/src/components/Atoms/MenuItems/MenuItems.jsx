import { Link } from "react-router-dom";
import "./MenuItems.css";
import Burguer from "../../../assets/burger.svg";
import { useState, useEffect } from "react";
import PopUpMenu from "../../Molecules/PopUpMenu/PopUpMenu";

const MenuItems = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showPopUpMenu, setShowPopUpMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBurgerClick = () => {
    setShowPopUpMenu(!showPopUpMenu);
  };

  return (
    <>
      {!isMobile ? (
        <ul className="menu-items">
          <li>
            <Link className="list-item" to="/movies">
              Movies
            </Link>
          </li>
          <li>
            <Link className="list-item" to="/wishList">
              WishList
            </Link>
          </li>
          <li>
            <Link className="list-item" to="/reviews">
              Reviews
            </Link>
          </li>
        </ul>
      ) : (
        <>
          <img src={Burguer} onClick={handleBurgerClick} alt="Menu" />
          <PopUpMenu isShowing={showPopUpMenu} onClose={handleBurgerClick} />
        </>
      )}
    </>
  );
};

export default MenuItems;
