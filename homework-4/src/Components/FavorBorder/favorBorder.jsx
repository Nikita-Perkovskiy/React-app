import "./favorBorder.scss";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/productCard";

const FavorBorder = ({
  openModal,
  addFavorProduct,
  favProducts,
  lsFavorites,
  showCross,
  modalNoNe,
  basketProducts,
}) => {
  return (
    <div className="favorBorder-container">
      {lsFavorites.map((product) => {
        return (
          <div key={product.squ}>
            <ProductCard
              product={product}
              openModal={openModal}
              favProducts={favProducts}
              addFavorProduct={addFavorProduct}
              basketProducts={basketProducts}
              showCross={showCross}
              modalNoNe={modalNoNe}
            />
          </div>
        );
      })}
    </div>
  );
};

FavorBorder.propTypes = {
  lsFavorites: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  addFavorProduct: PropTypes.func.isRequired,
  favProducts: PropTypes.array.isRequired,
  showCross: PropTypes.bool.isRequired,
  modalNoNe: PropTypes.bool.isRequired,
  basketProducts: PropTypes.array.isRequired,
};

export default FavorBorder;
