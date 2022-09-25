import "./App.scss";
import { Component } from "react";
import getProducts from "./api/getProducts";
import ProductList from "./components/product/productList";
import Header from "./components/header/header";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      favorites: [],
      basket: [],
    };
  }

  componentDidMount() {
    getProducts().then((products) => {
      this.setState({ products: products });
    });
    const lsBasket = getProductsFromLS("LS Basket");
    const lsFavorites = getProductsFromLS("LS Favorites");

    this.setState({
      basket: lsBasket,
    });
    this.setState({
      favorites: lsFavorites,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favorites !== this.state.favorites) {
      localStorage.setItem(
        "LS Favorites",
        JSON.stringify(this.state.favorites)
      );
    }

    if (prevState.basket !== this.state.basket) {
      localStorage.setItem("LS Basket", JSON.stringify(this.state.basket));
    }
  }

  addToBasket = (squ) => {
    const basket = this.state.products.find((product) => product.squ === squ);
    this.setState({
      basket: [...this.state.basket, basket],
    });
  };

  favoritesToggle = (squ) => {
    const favProduct = this.state.products.find(
      (product) => product.squ === squ
    );
    favProduct.isFav = true;
    const isFavProduct = this.state.favorites.find(
      (product) => product.squ === squ
    );
    if (isFavProduct) {
      const filter = this.state.favorites.filter((el) => el.squ !== squ);
      this.setState({
        favorites: filter,
      });
    } else {
      this.setState({
        favorites: [...this.state.favorites, favProduct],
      });
    }
  };

  render() {
    const { products, favorites } = this.state;
    return (
      <>
        <Header
          basketCount={this.state.basket.length}
          favoriteCount={favorites.length}
        />
        <ProductList
          list={products}
          addToBasket={this.addToBasket}
          favoritesToggle={this.favoritesToggle}
          favorites={favorites}
        />
      </>
    );
  }
}

export default App;
