import "./productBorder.scss";
import ProductCard from "../ProductCard/productCard";
import PropTypes from "prop-types";

const ProductBorder = ({ list, openModal, favorColor, addFavorProduct }) => {
  return (
    <>
      <div className="border-container">
        {list.map((product) => {
          return (
            <ProductCard
              key={product.squ}
              product={product}
              openModal={openModal}
              favorColor={favorColor}
              addFavorProduct={addFavorProduct}
            />
          );
        })}
      </div>
    </>
  );
};

ProductBorder.propTypes = {
  list: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  favorColor: PropTypes.bool.isRequired,
  addFavorProduct: PropTypes.func.isRequired,
};

export default ProductBorder;
