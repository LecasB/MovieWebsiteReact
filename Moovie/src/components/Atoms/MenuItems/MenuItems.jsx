import { Link } from "react-router-dom";
import "./MenuItems.css";
import Burguer from "../../../assets/burger.svg";
import { useState, useEffect } from "react";

const MenuItems = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    // Set the initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isMobile ? (
        <ul className="menu-items">
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/wishList">WishList</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
      ) : (
        <img src={Burguer} />
      )}
    </>
  );
};

export default MenuItems;
