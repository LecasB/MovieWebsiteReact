import Logo from "../../../assets/logo.png";
import Trailer from "../../../assets/trailers.png";
import "./AppLogo.css";
import { Link } from "react-router-dom";

const AppLogo = ({ trailer }) => {
  return (
    <div className="logodiv">
      <Link className="imgLink" to="/">
        <img src={trailer ? Trailer : Logo} className="app-logo" />
      </Link>
    </div>
  );
};

export default AppLogo;
