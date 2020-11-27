import { NavLink as Link } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";

import styled from "styled-components/macro";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background: #000;
  color: #fff;
  padding: 0 max(50px, calc((100vw - 1000px) / 2));
`;

export const NavIcon = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 36px;
  color: #fff;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const NavBtn = styled(Link)`
  text-decoration:none;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ShoppingCart = styled(CgShoppingCart)`
  font-size: 22px;
`