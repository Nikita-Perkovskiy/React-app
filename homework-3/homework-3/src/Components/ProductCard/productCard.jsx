import "./productCard.scss";
import PropTypes from "prop-types";
import Button from "../Button/button";
import FavIcon from "../Icons/favouriteIcon";

const ProductCard = ({ product, openModal, favorColor, addFavorProduct }) => {
  return (
    <>
      <div className="product-card">
        <img className="product-card_img" src={product.url} alt="phone" />
        <div className="product-card_body">
          <h4 className="product-card_body_title">{product.name}</h4>
          <div className="favorite-icon_card" onClick={addFavorProduct}>
            <FavIcon
              className="favorite-icon"
              color={favorColor ? "#ffffff" : "#ffd42a"}
            />
          </div>
          <p className="product-card_body_color">Цвет: {product.color}</p>
        </div>
        <div className="product-card_footer">
          <p className="product-card_footer_price">Цена: {product.price} $</p>
          <Button
            className="open-btn"
            text="В корзину"
            backgroundColor={"#ffd42a"}
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
  openModal: PropTypes.func.isRequired,
  favorColor: PropTypes.bool.isRequired,
  addFavorProduct: PropTypes.func.isRequired,
};
export default ProductCard;
