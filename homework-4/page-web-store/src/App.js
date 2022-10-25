import "./App.scss";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./components/product/productList";
import Header from "./components/header/header";
import Modal from "./components/modal/modal";
import Basket from "./pages/basket";
import Favorites from "./pages/favorites";
import { fetchProducts } from "./store/products/actions";

const App = () => {
  const dispatch = useDispatch();
  const { products, isLoading, hasError } = useSelector(
    (state) => state.products
  );
  const modal = useSelector((state) => state.showModal);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="products-list-container">
                <ProductList list={products} removeBtn={false} />
              </div>
              {modal && (
                <Modal
                  header="Добавить продукт в корзину"
                  text="Хотите добавить этот продукт?"
                />
              )}
            </>
          }
        />
        <Route
          path="/basket"
          element={
            <>
              <Basket removeBtn={true} />
              {modal && (
                <Modal
                  header="Удалить из Корзины"
                  text="Хотите удалить этот продукт?"
                />
              )}
            </>
          }
        />
        <Route
          path="/favorites"
          element={
            <>
              <Favorites />
              {modal && (
                <Modal
                  header="Удалить из Корзины"
                  text="Хотите удалить этот продукт?"
                />
              )}
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
