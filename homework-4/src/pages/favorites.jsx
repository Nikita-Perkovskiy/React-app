import { useSelector } from "react-redux";
import ProductList from "../components/product/productList";
import "./favorites-page.scss";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  const isListEmpty = favorites.length === 0;

  return (
    <>
      <div className="favorites-container">
        <h2 className="favorites-title">Обрані товари:</h2>
        {isListEmpty ? (
          <div className="favorites-empty-list">
            <h3 className="favorites-empty-list_title">
              Ваш лист бажань порожній
            </h3>
            <img
              className="favorites-empty-list_img"
              src="./img/empty-list.png"
              alt="empty list"
            />
            <p className="favorites-empty-list_text">
              Ви можете поповнити його
            </p>
            <Link to="/">
              <button className="favorites-empty-list_btn">На головну</button>
            </Link>
          </div>
        ) : (
          <ProductList list={favorites} />
        )}
      </div>
    </>
  );
};

export default Favorites;
