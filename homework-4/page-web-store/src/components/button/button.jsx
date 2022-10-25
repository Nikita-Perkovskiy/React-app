import "./button.scss";
import PropTypes from "prop-types";

const Button = ({
  backgroundColor,
  text,
  onClick,
  className,
  param,
  disable,
}) => {
  return (
    <button
      className={className}
      onClick={() => onClick(param)}
      style={{ backgroundColor: `${backgroundColor}` }}
      disabled={disable}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
