import "./modal.scss";
import Button from "../Button/button";
import PropTypes from "prop-types";

const Modal = ({ closeModal, text, header, addToBasket }) => {
  return (
    <>
      <div className="modal">
        <div className="modal_title-wrapper">
          <h3 className="modal_title-wrapper_title">{header}</h3>
          <Button
            className="modal_title-wrapper_btn"
            text={"X"}
            onClick={closeModal}
            backgroundColor={"#ffffff"}
          />
        </div>
        <div className="modal_body">
          <p className="modal_body_text">{text}</p>
          <Button className="modal_body_btn" text="Yes" onClick={addToBasket} />
          <Button className="modal_body_btn" text="No" onClick={closeModal} />
        </div>
      </div>
      <div className="background" onClick={closeModal} />
    </>
  );
};

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  addToBasket: PropTypes.func.isRequired,
};

export default Modal;
