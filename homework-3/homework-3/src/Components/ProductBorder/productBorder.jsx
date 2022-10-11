import "./productBorder.scss";
import ProductCard from "../ProductCard/productCard";
import PropTypes from "prop-types";

const ProductBorder = ({
  list,
  openModal,
  addFavorProduct,
  closeModal,
  text,
  header,
  addToBasket,
  showModal,
  favProducts,
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
                favProducts={favProducts}
                addFavorProduct={addFavorProduct}
                closeModal={closeModal}
                addToBasket={addToBasket}
                header={header}
                text={text}
                showModal={showModal}
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
  openModal: PropTypes.func.isRequired,
  addFavorProduct: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  addToBasket: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  favProducts: PropTypes.array.isRequired,
};

export default ProductBorder;
