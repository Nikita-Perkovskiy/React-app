import ProductCard from "./productCard";
import "./productList.scss";
import PropTypes from "prop-types";
import FormBlock from "../form/form";

const ProductList = ({ list, removeBtn }) => {
  return (
    <>
      <div className="list-container">
        {list.map((product) => {
          return (
            <ProductCard
              key={product.squ}
              product={product}
              removeBtn={removeBtn}
            />
          );
        })}
      </div>
      <div className="list-footer">
        <FormBlock />
      </div>
    </>
  );
};

ProductList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default ProductList;
