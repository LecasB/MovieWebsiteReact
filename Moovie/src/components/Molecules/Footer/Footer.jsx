import AppLogo from "../../Atoms/AppLogo/AppLogo";
import Button from "../../Atoms/Button/Button";
import MenuItems from "../../Atoms/MenuItems/MenuItems";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <MenuItems />
        <AppLogo />
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <p style={{ fontFamily: "monospace", fontStyle: "italic" }}>
          @2024 M"F"ovies, Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
