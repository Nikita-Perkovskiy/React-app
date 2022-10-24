import "./basketBorder.scss";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/productCard";

const BasketBorder = ({
  lsBasket,
  openModal,
  addFavorProduct,
  showCross,
  favProducts,
  modalNoNe,
  basketProducts,
}) => {
  return (
    <div className="basketBorder-container">
      {lsBasket.map((product) => {
        return (
          <div key={product.squ}>
            <ProductCard
              product={product}
              showCross={showCross}
              openModal={openModal}
              basketProducts={basketProducts}
              modalNoNe={modalNoNe}
              favProducts={favProducts}
              addFavorProduct={addFavorProduct}
            />
          </div>
        );
      })}
    </div>
  );
};

BasketBorder.propTypes = {
  lsBasket: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  addFavorProduct: PropTypes.func.isRequired,
  favProducts: PropTypes.array.isRequired,
  showCross: PropTypes.bool.isRequired,
  modalNoNe: PropTypes.bool.isRequired,
  basketProducts: PropTypes.array.isRequired,
};

export default BasketBorder;
