import "./productCard.scss";
import PropTypes from "prop-types";
import Button from "../Button/button";
import FavIcon from "../Icons/favouriteIcon";

const ProductCard = ({
  product,
  openModal,
  addFavorProduct,
  favProducts,
  showCross,
  modalNoNe,
  basketProducts,
}) => {
  let favorColor = favProducts.find((el) => el.squ === product.squ);

  let cardDeleate = showCross;

  return (
    <div>
      <div className="product-card">
        <img className="product-card_img" src={product.url} alt="phone" />
        <div className="product-card_body">
          <h4 className="product-card_body_title">{product.name}</h4>
          <div className="favorite-icon_card">
            {cardDeleate ? (
              <Button
                className="modal_title-wrapper_btn"
                text={"X"}
                onClick={() => openModal(product)}
                backgroundColor={"#ffffff"}
              />
            ) : (
              <div onClick={() => addFavorProduct(product)}>
                <FavIcon
                  className="favorite-icon"
                  color={favorColor ? "#ffd42a" : "#ffffff"}
                />
              </div>
            )}
          </div>
          <p className="product-card_body_color">Цвет: {product.color}</p>
        </div>
        <div className="product-card_footer">
          <p className="product-card_footer_price">Цена: {product.price} $</p>
          {modalNoNe && (
            <Button
              className="open-btn"
              text="В корзину"
              backgroundColor={"#ffd42a"}
              onClick={() => openModal(product)}
              param={product}
            />
          )}
        </div>
      </div>
    </div>
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
  addFavorProduct: PropTypes.func.isRequired,
  favProducts: PropTypes.array.isRequired,
  showCross: PropTypes.bool.isRequired,
  modalNoNe: PropTypes.bool.isRequired,
  basketProducts: PropTypes.array.isRequired,
};

export default ProductCard;
