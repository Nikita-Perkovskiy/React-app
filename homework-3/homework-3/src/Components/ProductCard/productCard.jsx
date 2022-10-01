import "./productCard.scss";
import PropTypes from "prop-types";
import Button from "../Button/button";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="product-card">
        <img className="product-card_img" src={product.url} alt="phone" />
        <div className="product-card_body">
          <h4 className="product-card_body_title">{product.name}</h4>
          <p className="product-card_body_color">Цвет: {product.color}</p>
        </div>
        <div className="product-card_footer">
          <p className="product-card_footer_price">Цена: {product.price} $</p>
          <Button text="В корзину" backgroundColor={"#ffd42a"} />
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
