import ProductCard from "./productCard";
import "./productList.scss";
import PropTypes from "prop-types";
import FormBlock from "../form/form";
import { useSelector } from "react-redux";

const ProductList = ({ list, removeBtn }) => {
  const basket = useSelector((state) => state.basket);
  const basketEmpty = basket.length !== 0;

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
      {basketEmpty && (
        <div className="list-footer">
          <FormBlock />
        </div>
      )}
    </>
  );
};

ProductList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default ProductList;
