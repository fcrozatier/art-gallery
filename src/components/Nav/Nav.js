import {
  NavBar,
  NavBtn,
  NavIcon,
  NavLink,
  NavLinks,
  ShoppingCart,
} from "./Nav.elements";

function Nav() {
  return (
    <>
      <NavBar>
        <NavIcon to="/">ArtGallery</NavIcon>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          <NavBtn to="/cart">
            <ShoppingCart />0
          </NavBtn>
        </NavLinks>
      </NavBar>
    </>
  );
}

export default Nav;
