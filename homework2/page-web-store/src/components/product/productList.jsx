import ProductCard from "./productCard";
import { Component } from "react";
import "./productList.scss";
import PropTypes from 'prop-types';

class ProductList extends Component {
  handleAddToCart = (squ) => {
    this.props.addToBasket(squ);
  };

  handleFavorites = (squ) => {
    this.props.favoritesToggle(squ);
  };

  render() {
    const { list, favorites } = this.props;

    return (
      <>
        <div className="list-container">
          {list.map((product) => {
            const isFavSquList = favorites.map(el => el.squ)
            const isFavorite = isFavSquList.includes(product.squ);
            return (
              <ProductCard
                key={product.squ}
                product={product}
                productListBasket={() => this.handleAddToCart(product.squ)}
                handleFavorites={() => this.handleFavorites(product.squ)}
                isFavorite={isFavorite}
              />
            );
          })}
        </div>
      </>
    );
  }
}
ProductList.propTypes = {
  list: PropTypes.array.isRequired,
  addToBasket: PropTypes.func.isRequired,
  favoritesToggle: PropTypes.func.isRequired,
  favorites: PropTypes.array
}
ProductList.defaultProps = {
  favorites: []
};

export default ProductList;
