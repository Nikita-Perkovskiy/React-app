import { Component } from "react";
import Button from "../button/button";
import "./modal.scss";
import PropTypes from "prop-types";

class Modal extends Component {
  handleAddToBasket = (product) => {
    this.props.addToBasket(product);
    this.props.closeModal();
  };

  render() {
    const { header, text, closeModal } = this.props;

    return (
      <>
        <div className="modal">
          <div className="modal_title-wrapper">
            <h3 className="modal_title-wrapper_title">{header}</h3>
            <Button
              className="modal_title-wrapper_btn"
              onClick={closeModal}
              text={"X"}
            />
          </div>
          <div className="modal_body">
            <p className="modal_body_text">{text}</p>
            {/* {actions} */}
            <Button
              onClick={this.handleAddToBasket}
              className="modal_body_btn"
              text="Yes"
            />
            <Button onClick={closeModal} className="modal_body_btn" text="No" />
          </div>
        </div>
        <div className="background" onClick={closeModal} />
      </>
    );
  }
}

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  addToBasket: PropTypes.func.isRequired,
};

export default Modal;
