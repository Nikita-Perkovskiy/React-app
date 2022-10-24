import { useSelector } from "react-redux";
import Basket from "../icon/basket";
import FavIcon from "../icon/favorite";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const favorites = useSelector((state) => state.favorites);
  const basket = useSelector((state) => state.basket);

  const isFavoriteNotEmpty = favorites.length !== 0;
  const isBasketNotEmpty = basket.length !== 0;

  return (
    <>
      <div className="header-container">
        <Link to="/">
          <h3 className="header-title">Helmets</h3>
        </Link>
        <div className="icon-wrapper">
          <Link to="/basket">
            <div className="cart-container">
              <Basket className="cart-icon" color={"#FF2A47"} />
              {isBasketNotEmpty && (
                <div className="cart-counter">
                  <p>{basket.length}</p>
                </div>
              )}
            </div>
          </Link>
          <Link to="/favorites">
            <div className="favorite-container">
              <FavIcon className="favorite-icon" color={"white"} />
              {isFavoriteNotEmpty && (
                <div className="favorite-counter">
                  <p>{favorites.length}</p>
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
