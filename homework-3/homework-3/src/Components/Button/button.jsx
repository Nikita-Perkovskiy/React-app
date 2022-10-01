import "./button.scss";
import PropTypes from "prop-types";

const Button = ({ backgroundColor, text }) => {
  return (
    <button
      className="open-btn"
      //onClick={() => onClick(param)}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  // onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Button;
