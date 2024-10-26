import "./Button.css";

const Button = ({ text }) => {
  return <button type="button">{text ? text : "Default"}</button>;
};

export default Button;
