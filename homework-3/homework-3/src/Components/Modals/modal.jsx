import "./modal.scss";
import Button from "../Button/button";
import PropTypes from "prop-types";

const Modal = ({ closeModal, text, header, addToBasket, product }) => {
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
          <Button
            backgroundColor={" rgb(91, 12, 12)"}
            className="modal_body_btn"
            text="Yes"
            onClick={() => addToBasket(product)}
          />
          <Button
            backgroundColor={" rgb(91, 12, 12)"}
            className="modal_body_btn"
            text="No"
            onClick={closeModal}
          />
        </div>
      </div>
      <div className="background" onClick={closeModal} />
    </>
  );
};

Modal.propTypes = {
  product: PropTypes.shape({
    squ: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  addToBasket: PropTypes.func.isRequired,
};

export default Modal;
