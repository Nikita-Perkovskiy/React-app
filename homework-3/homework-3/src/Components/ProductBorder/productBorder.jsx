import "./productBorder.scss";
import ProductCard from "../ProductCard/productCard";
import PropTypes from "prop-types";

const ProductBorder = ({ list }) => {
  return (
    <>
      <div className="border-container">
        {list.map((product) => {
          return <ProductCard key={product.squ} product={product} />;
        })}
      </div>
    </>
  );
};

ProductBorder.propTypes = {
  list: PropTypes.array.isRequired,
};

export default ProductBorder;
