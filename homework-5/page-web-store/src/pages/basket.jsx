import ProductList from "../components/product/productList";
import "./favorites-page.scss";
import { useSelector } from "react-redux";

const Basket = () => {
  const basket = useSelector((state) => state.basket);
  const isListEmpty = basket.length === 0;

  return (
    <>
      <div className="favorites-container">
        <ProductList list={basket} removeBtn={true} />
      </div>
    </>
  );
};

export default Basket;
