import "./productBorder.scss";
import ProductCard from "../ProductCard/productCard";
import PropTypes from "prop-types";

const ProductBorder = ({
  list,
  addFavorProduct,
  favProducts,
  showCross,
  modalNoNe,
  openModal,
  basketProducts,
}) => {
  return (
    <>
      <div className="border-container">
        {list.map((product) => {
          return (
            <div key={product.squ}>
              <ProductCard
                product={product}
                openModal={openModal}
                showCross={showCross}
                favProducts={favProducts}
                addFavorProduct={addFavorProduct}
                basketProducts={basketProducts}
                modalNoNe={modalNoNe}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

ProductBorder.propTypes = {
  list: PropTypes.array.isRequired,
  addFavorProduct: PropTypes.func.isRequired,
  favProducts: PropTypes.array.isRequired,
  showCross: PropTypes.bool.isRequired,
  modalNoNe: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  basketProducts: PropTypes.array.isRequired,
};

export default ProductBorder;
