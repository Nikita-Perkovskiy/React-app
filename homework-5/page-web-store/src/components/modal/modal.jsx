import { useDispatch, useSelector } from "react-redux";
import Button from "../button/button";
import "./modal.scss";
import PropTypes from "prop-types";
import { closeModal as closeModalActions } from "../../store/modal/actions";
import {
  addToBasket as addToBasketActions,
  removeFromBasket as removeFromBasketActions,
} from "../../store/basket/actions";

const Modal = ({ header, text }) => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const basket = useSelector((state) => state.basket);
  const isInBasket = basket.some(
    (product) => product.squ === selectedProduct.squ
  );

  const addToBasketStore = () => {
    if (!isInBasket) {
      dispatch(addToBasketActions(selectedProduct));
    }
    closeModal();
  };

  const removeFromBasket = () => {
    dispatch(removeFromBasketActions(selectedProduct));
    closeModal();
  };

  const closeModal = () => {
    dispatch(closeModalActions());
  };

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
          <Button
            onClick={isInBasket ? removeFromBasket : addToBasketStore}
            className="modal_body_btn"
            text="Yes"
          />
          <Button onClick={closeModal} className="modal_body_btn" text="No" />
        </div>
      </div>
      <div className="background" onClick={closeModal} />
    </>
  );
};

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Modal;
