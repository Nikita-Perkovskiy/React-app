import { Component } from "react";
import Basket from "../icon/basket";
import FavIcon from "../icon/favorite";
import "./header.scss";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    const { basketCount, favoriteCount } = this.props;
    return (
      <>
        <div className="header-container">
          <h3 className="header-title">Phone Store</h3>
          <div className="icon-wrapper">
            <div className="cart-container">
              <Basket className="cart-icon" color={"#d4c709"} />
              <p className="cart-counter">{basketCount}</p>
            </div>
            <div className="favorite-container">
              <FavIcon className="favorite-icon" color={"#d4c709"} />
              <p className="favorite-counter">{favoriteCount}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Header.propTypes = {
  basketCount: PropTypes.number,
  favoriteCount: PropTypes.number,
};
Header.defaultProps = {
  basketCount: 0,
  favoriteCount: 0,
};

export default Header;
