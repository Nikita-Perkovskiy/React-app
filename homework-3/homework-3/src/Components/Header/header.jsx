import "./header.scss";
//import PropTypes from "prop-types";
import Basket from "../Icons/basketIcon";
import FavIcon from "../Icons/favouriteIcon";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <h3 className="header-title">Phone Store</h3>
        <div className="icon-wrapper">
          <div className="cart-container">
            <Basket className="cart-icon" color={"#FF2A47"} />
            <p className="cart-counter"></p>
          </div>
          <div className="favorite-container">
            <FavIcon className="favorite-icon" color={"#FF2A47"} />
            <p className="favorite-counter"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
