import "./Button.css";

const Button = ({ text, onClick = null, style }) => {
  return (
    <button type="button" onClick={onClick} style={style}>
      {text ? text : "Default"}
    </button>
  );
};

export default Button;
