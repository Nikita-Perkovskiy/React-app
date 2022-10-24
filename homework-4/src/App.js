import "./App.scss";
import "./api/getProducts";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import getProducts from "./api/getProducts";
import ProductBorder from "./Components/ProductBorder/productBorder";
import Header from "./Components/Header/header";
import BasketBorder from "./Components/BasketBorder/basketBorder";
import FavorBorder from "./Components/FavorBorder/favorBorder";
import Modal from "./Components/Modals/modal";
import store from "./Store/store";

const getProductsFromLS = (key) => {
  const lsProducts = localStorage.getItem(key);
  if (!lsProducts) return [];
  try {
    const value = JSON.parse(lsProducts);
    return value;
  } catch (e) {
    return [];
  }
};

const App = () => {
  const lsFavorites = getProductsFromLS("LS Favorites");
  const lsBasket = getProductsFromLS("LS Basket");

  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [favProducts, setFavProduct] = useState(lsFavorites);
  const [basketProducts, setBasketProducts] = useState(lsBasket);
  const [productToBasket, setProductTobasket] = useState({});

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("LS Basket", JSON.stringify(basketProducts));
  }, [basketProducts]);

  useEffect(() => {
    localStorage.setItem("LS Favorites", JSON.stringify(favProducts));
  }, [favProducts]);

  const createModal = (product) => {
    setShowModal(true);
    setProductTobasket(product);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addFavorProduct = (product) => {
    const favProduct = favProducts.find((el) => el.squ === product.squ);
    if (favProduct) {
      let deleatProduct = favProducts.filter((el) => el.squ !== product.squ);
      setFavProduct(deleatProduct);
      console.log("deleatFavProduct", deleatProduct);
    } else {
      setFavProduct((favProducts) => [...favProducts, product]);
    }
    //console.log("favProducts -App.js", favProducts);
    //window.location.reload();
  };

  const addToBasket = () => {
    const isBasketSquList = basketProducts.map((el) => el.squ);
    const isInBasket = isBasketSquList.includes(productToBasket.squ);
    if (!isInBasket) {
      setBasketProducts([...basketProducts, productToBasket]);
      closeModal();
    }
  };

  const deleatBasketCard = () => {
    const filter = basketProducts.filter(
      (el) => el.squ !== productToBasket.squ
    );
    // window.location.reload();
    setBasketProducts(filter);
    closeModal();
  };

  console.log(store.getState());

  return (
    <div className="App">
      <Header
        basketNumber={basketProducts.length}
        favNumber={favProducts.length}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductBorder
                list={products}
                openModal={createModal}
                showCross={false}
                addFavorProduct={addFavorProduct}
                basketProducts={basketProducts}
                modalNoNe={true}
                favProducts={favProducts}
              />
              {showModal && (
                <Modal
                  closeModal={closeModal}
                  addToBasket={addToBasket}
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
              <BasketBorder
                lsBasket={basketProducts}
                openModal={createModal}
                basketProducts={basketProducts}
                showCross={true}
                addFavorProduct={addFavorProduct}
                modalNoNe={false}
                favProducts={favProducts}
              />
              {showModal && (
                <Modal
                  closeModal={closeModal}
                  addToBasket={deleatBasketCard}
                  header="Удалить из Корзины"
                  text="Хотите удалить этот продукт?"
                />
              )}
            </>
          }
        />

        <Route
          path="/fav"
          element={
            <FavorBorder
              lsFavorites={favProducts}
              openModal={createModal}
              basketProducts={basketProducts}
              showCross={false}
              addFavorProduct={addFavorProduct}
              modalNoNe={true}
              favProducts={favProducts}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
