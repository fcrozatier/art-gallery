import React from "react";
import { NavBar, NavBtn, NavIcon, NavLink, ShoppingCart } from "./Nav.elements";

function Nav() {
  return (
    <>
      <NavBar>
        <NavIcon to="/">ArtGallery</NavIcon>
        <NavLink to="/shop">Shop</NavLink>
        <NavBtn to="/cart">
          <ShoppingCart />0
        </NavBtn>
      </NavBar>
    </>
  );
}

export default Nav;
