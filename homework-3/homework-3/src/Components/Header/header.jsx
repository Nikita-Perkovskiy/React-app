import "./header.scss";
import { Link } from "react-router-dom";
import Basket from "../Icons/basketIcon";
import FavIcon from "../Icons/favouriteIcon";
import PropTypes from "prop-types";

const Header = ({ basketNumber, favNumber }) => {
  return (
    <>
      <div className="header-container">
        <Link to="/">
          <h3 className="header-title">Phone Store</h3>
        </Link>
        <div className="icon-wrapper">
          <Link to="/basket">
            <div className="cart-container">
              <Basket color="#FF2A47" number={basketNumber} />
              <p className="cart-counter"></p>
            </div>
          </Link>
          <Link to="/fav">
            <div className="favorite-container">
              <FavIcon
                className="favorite-icon"
                color="#FF2A47"
                number={favNumber}
              />
              <p className="favorite-counter"></p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  basketNumber: PropTypes.number.isRequired,
  favNumber: PropTypes.number.isRequired,
};

Header.defaultProps = {
  basketNumber: 0,
  favNumber: 0,
};

export default Header;
