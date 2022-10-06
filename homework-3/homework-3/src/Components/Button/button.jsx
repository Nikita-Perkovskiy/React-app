import "./button.scss";
import PropTypes from "prop-types";

const Button = ({ backgroundColor, text, onClick, param, className }) => {
  return (
    <button
      className={className}
      style={{ backgroundColor: `${backgroundColor}` }}
      onClick={() => onClick(param)}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
