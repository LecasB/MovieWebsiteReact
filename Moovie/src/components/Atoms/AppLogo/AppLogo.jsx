import Logo from "../../../assets/logo.png";
import "./AppLogo.css";

const AppLogo = () => {
  return (
    <div className="logodiv">
      <img src={Logo} className="app-logo" />
    </div>
  );
};

export default AppLogo;
