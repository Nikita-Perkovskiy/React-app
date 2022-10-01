import "./App.scss";
import "./api/getProducts";
import React, { useEffect, useState } from "react";
import getProducts from "./api/getProducts";
import ProductBorder from "./Components/ProductBorder/productBorder";
import Header from "./Components/Header/header";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  console.log(products);

  return (
    <div className="App">
      <Header />
      <ProductBorder list={products} />
    </div>
  );
};

export default App;
