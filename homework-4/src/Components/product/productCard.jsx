import { useDispatch, useSelector } from "react-redux";
import "./productCard.scss";
import Button from "../button/button";
import FavIcon from "../icon/favorite";
import PropTypes from "prop-types";

import {
  openModal as openModalActions,
  selectedProduct,
} from "../../store/modal/actions";

import {
  addFavorites as addFavoritesActions,
  removeFavorites as removeFavoritesActions,
} from "../../store/favorites/actions";

const ProductCard = ({ product, removeBtn }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const basket = useSelector((state) => state.basket);

  const isFavorite = favorites.some(
    (favProduct) => favProduct.squ === product.squ
  );

  const isInBasket = basket.some(
    (basketProduct) => basketProduct.squ === product.squ
  );

  const addFavorite = () => {
    dispatch(addFavoritesActions(product));
  };

  const removeFavorite = () => {
    dispatch(removeFavoritesActions(product));
  };

  const openModal = (product) => {
    dispatch(openModalActions());
    dispatch(selectedProduct(product));
  };

  return (
    <>
      <div className="product-card">
        <div className="product-card_wrapper">
          {removeBtn && (
            <button
              className="product-card_wrapper_remove-btn"
              onClick={() => openModal(product)}
            >
              X
            </button>
          )}
          <img className="product-card_wrapper_img" src={product.url} alt="" />
        </div>
        <div
          className="product-card_favorite-container"
          onClick={isFavorite ? removeFavorite : addFavorite}
        >
          <div className="product-card_favorite-container_icon">
            <FavIcon color={isFavorite ? "#FF2A47" : "white"} />{" "}
          </div>
        </div>
        <div className="product-card_body">
          <h4 className="product-card_body_title">{product.name}</h4>
          <p className="product-card_body_color">Колір: {product.color}</p>
        </div>
        <div className="product-card_footer">
          <p className="product-card_footer_price">Ціна: {product.price} UAH</p>
          <Button
            disable={!isInBasket ? false : true}
            className={
              !isInBasket
                ? "product-card_footer_btn-buy"
                : "product-card_footer_btn-inbasket"
            }
            text={!isInBasket ? "Додати в кошик" : "У кошику"}
            backgroundColor={!isInBasket ? "#FF2A47" : "white"}
            onClick={openModal}
            param={product}
          />
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    squ: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};
export default ProductCard;
