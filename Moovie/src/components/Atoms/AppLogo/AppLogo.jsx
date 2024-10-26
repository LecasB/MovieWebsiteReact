import Logo from "../../../assets/logo.png";
import "./AppLogo.css";
import { Link } from "react-router-dom";

const AppLogo = () => {
  return (
    <div className="logodiv">
      <Link className="imgLink" to="/">
        <img src={Logo} className="app-logo" />
      </Link>
    </div>
  );
};

export default AppLogo;
