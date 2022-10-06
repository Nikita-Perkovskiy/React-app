import "./App.scss";
import "./api/getProducts";
import React, { useEffect, useState } from "react";
import getProducts from "./api/getProducts";
import ProductBorder from "./Components/ProductBorder/productBorder";
import Header from "./Components/Header/header";
import Modal from "./Components/Modals/modal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [favorColor, setFavorColor] = useState(true);
  const [basketNumber, setBasketNumber] = useState(0);
  const [favNumber, setFavNumber] = useState(0);

  const createModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addFavorProduct = () => {
    setFavorColor(false);
    setFavNumber(favNumber + 1);
    console.log(9);
  };

  const addToBasket = () => {
    setBasketNumber(basketNumber + 1);
  };

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div className="App">
      <Header basketNumber={basketNumber} favNumber={favNumber} />
      <ProductBorder
        list={products}
        openModal={createModal}
        favorColor={favorColor}
        addFavorProduct={addFavorProduct}
      />
      {showModal && (
        <Modal
          closeModal={closeModal}
          addToBasket={addToBasket}
          header="Добавить продукт в корзину"
          text="Хотите добавить этот продукт?"
        />
      )}
    </div>
  );
};

export default App;
