import ProductList from "../components/product/productList";
import { Link } from "react-router-dom";
import "./favorites-page.scss";
import { useSelector } from "react-redux";

const Basket = () => {
  const basket = useSelector((state) => state.basket);
  const isListEmpty = basket.length === 0;

  return (
    <>
      <div className="favorites-container">
        <h2 className="favorites-title">Товари у кошику:</h2>
        {isListEmpty ? (
          <div className="favorites-empty-list">
            <h3 className="favorites-empty-list_title">Ваш кошик порожній</h3>
            <img
              className="favorites-empty-list_img"
              src="./img/empty-list.png"
              alt="empty list"
            />
            <p className="favorites-empty-list_text">
              Але ніколи не пізно його поповнити
            </p>
            <Link to="/">
              <button className="favorites-empty-list_btn">На головну</button>
            </Link>
          </div>
        ) : (
          <ProductList list={basket} removeBtn={true} />
        )}
      </div>
    </>
  );
};

export default Basket;
