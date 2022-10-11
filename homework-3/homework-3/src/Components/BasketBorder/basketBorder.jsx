import "./basketBorder.scss";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/productCard";
import ProductBorder from "../ProductBorder/productBorder";

const BasketBorder = (
  list,
  openModal,
  addFavorProduct,
  closeModal,
  text,
  header,
  addToBasket,
  showModal,
  favProducts
) => {
  return (
    <ProductBorder
      list={list}
      openModal={openModal}
      addFavorProduct={addFavorProduct}
      showModal={showModal}
      closeModal={closeModal}
      addToBasket={addToBasket}
      favProducts={favProducts}
      header={"Добавить продукт в корзину"}
      text={"Хотите добавить этот продукт?"}
    />
  );
};

BasketBorder.propTypes = {
  list: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  addFavorProduct: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  addToBasket: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  favProducts: PropTypes.array.isRequired,
};

export default BasketBorder;
