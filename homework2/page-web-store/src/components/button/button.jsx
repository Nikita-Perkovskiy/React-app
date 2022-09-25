import { Component } from "react";
import "./button.scss";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const { backgroundColor, text, onClick, className } = this.props;
    return (
      <button
        className={className}
        onClick={onClick}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        {text}
      </button>
    );
  }
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Button;
