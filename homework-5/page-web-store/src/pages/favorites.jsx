import { useSelector } from "react-redux";
import ProductList from "../components/product/productList";
import "./favorites-page.scss";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const isListEmpty = favorites.length === 0;

  return (
    <>
      <div className="favorites-container">
        <ProductList list={favorites} />
      </div>
    </>
  );
};

export default Favorites;
