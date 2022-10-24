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
                <h2 className="products-list-container_title">Наші товари:</h2>
                {isLoading && (
                  <div>
                    <h4>Завантажуємо продукти</h4>
                  </div>
                )}
                {hasError && (
                  <div>
                    <p>Ууупс, щось пішло не так.</p>
                  </div>
                )}
                <ProductList
                  list={products}
                  // removeBtn={false}
                />
              </div>
              {modal && (
                <Modal
                  header="Додавання у кошик"
                  text="Бажаєте додати цей товар у кошик?"
                />
              )}
            </>
          }
        />
        <Route
          path="/basket"
          element={
            <>
              <Basket />
              {modal && (
                <Modal
                  header="Видалення з кошику"
                  text="Ви бажаєте видалити цей товар із кошику?"
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
                  header="Додавання у кошик"
                  text="Бажаєте додати цей товар у кошик?"
                />
              )}
            </>
          }
        />
      </Routes>
    </>
  );
};;;

export default App;
