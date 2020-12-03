import PropTypes from 'prop-types';
import {
  NavBar,
  NavBtn,
  NavIcon,
  NavLink,
  NavLinks,
  Qty,
  ShoppingCart,
} from './Nav.elements';

function Nav({ itemsQty }) {
  return (
    <>
      <NavBar>
        <NavIcon to="/">ArtGallery</NavIcon>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          <NavBtn to="/cart">
            <ShoppingCart />
            <Qty>{itemsQty}</Qty>
          </NavBtn>
        </NavLinks>
      </NavBar>
    </>
  );
}

Nav.propTypes = {
  itemsQty: PropTypes.number.isRequired,
};

export default Nav;
