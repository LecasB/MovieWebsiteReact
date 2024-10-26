import AppLogo from "../../Atoms/AppLogo/AppLogo";
import MenuItems from "../../Atoms/MenuItems/MenuItems";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <AppLogo />
      <MenuItems />
    </header>
  );
};

export default Header;
