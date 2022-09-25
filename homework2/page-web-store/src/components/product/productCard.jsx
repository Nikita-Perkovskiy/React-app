import { Component } from "react";
import "./productCard.scss";
import Button from "../button/button";
import Modal from "../modal/modal";
import FavIcon from "../icon/favorite";
import PropTypes from "prop-types";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  createModal = (e) => {
    this.setState({
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleAddToBasket = (squ) => {
    this.props.productListBasket(squ);
  };

  handleFavorites = (squ) => {
    this.props.handleFavorites(squ);
  };

  render() {
    const { product, isFavorite } = this.props;
    return (
      <>
        <div className="product-card">
          <img className="product-card_img" src={product.url} alt="" />
          <div
            className="product-card_favorite-container"
            onClick={() => this.handleFavorites(product.squ)}
          >
            <FavIcon
              className="product-card_favorite"
              color={isFavorite ? "#ffdc2a" : "white"}
            />
          </div>
          <div className="product-card_body">
            <h4 className="product-card_body_title">{product.name}</h4>
            <p className="product-card_body_color">Цвет: {product.color}</p>
          </div>
          <div className="product-card_footer">
            <p className="product-card_footer_price">
              Цена: {product.price} UAH
            </p>
            <Button
              className="product-card_footer_btn-buy"
              text="В корзину"
              backgroundColor={"#ffd42a"}
              onClick={this.createModal}
            />
          </div>
        </div>
        {this.state.showModal && (
          <Modal
            header="Add to the basket"
            text="Do you want to add the product to the basket?"
            closeModal={this.closeModal}
            addToBasket={() => this.handleAddToBasket(product.squ)}
          />
        )}
      </>
    );
  }
}
ProductCard.propTypes = {
  product: PropTypes.shape({
    squ: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  productListBasket: PropTypes.func.isRequired,
  handleFavorites: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};
export default ProductCard;
