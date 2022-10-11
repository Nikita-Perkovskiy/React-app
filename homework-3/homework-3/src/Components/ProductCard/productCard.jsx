import "./productCard.scss";
import PropTypes from "prop-types";
import Button from "../Button/button";
import FavIcon from "../Icons/favouriteIcon";
import Modal from "../Modals/modal";

const ProductCard = ({
  product,
  openModal,
  addFavorProduct,
  closeModal,
  text,
  header,
  addToBasket,
  showModal,
  favProducts,
}) => {
  let favorColor = favProducts.includes(product.squ);

  return (
    <div>
      <div className="product-card">
        <img className="product-card_img" src={product.url} alt="phone" />
        <div className="product-card_body">
          <h4 className="product-card_body_title">{product.name}</h4>
          <div
            className="favorite-icon_card"
            onClick={() => addFavorProduct(product)}
          >
            <FavIcon
              className="favorite-icon"
              color={favorColor ? "#ffd42a" : "#ffffff"}
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
      {showModal && (
        <Modal
          closeModal={closeModal}
          addToBasket={() => addToBasket(product)}
          header={header}
          text={text}
        />
      )}
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
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  addToBasket: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  favProducts: PropTypes.array.isRequired,
};
export default ProductCard;
