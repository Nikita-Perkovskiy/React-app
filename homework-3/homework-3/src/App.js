import "./App.scss";
import "./api/getProducts";
import React, { useEffect, useState } from "react";
import getProducts from "./api/getProducts";
import ProductBorder from "./Components/ProductBorder/productBorder";
import Header from "./Components/Header/header";
// import BasketBorder from "./Components/BasketBorder/basketBorder";

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

  const createModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addFavorProduct = (product) => {
    const favProduct = product.squ;
    if (favProducts.includes(product.squ)) {
      let deleatProduct = favProducts.filter((el) => el !== favProduct);
      setFavProduct(deleatProduct);
    } else {
      setFavProduct((favProducts) => [...favProducts, favProduct]);
    }
  };

  const addToBasket = (product) => {
    const sailProduct = product.squ;
    setBasketProducts((basketProducts) => [...basketProducts, sailProduct]);
  };

  return (
    <div className="App">
      <Header
        basketNumber={basketProducts.length}
        favNumber={favProducts.length}
      />
      <ProductBorder
        list={products}
        openModal={createModal}
        addFavorProduct={addFavorProduct}
        showModal={showModal}
        closeModal={closeModal}
        addToBasket={addToBasket}
        favProducts={favProducts}
        header={"Добавить продукт в корзину"}
        text={"Хотите добавить этот продукт?"}
      />
      {/* <BasketBorder
        list={basketProducts}
        openModal={createModal}
        addFavorProduct={addFavorProduct}
        showModal={showModal}
        closeModal={closeModal}
        addToBasket={addToBasket}
        favProducts={favProducts}
        header={"Добавить продукт в корзину"}
        text={"Хотите добавить этот продукт?"}
      /> */}
    </div>
  );
};

export default App;
