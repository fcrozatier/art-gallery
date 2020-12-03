import { NavLink as Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';

import styled from 'styled-components/macro';

export const NavBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background: #252525;
  color: #fff;
  padding: 0 100px;

  @media screen and (max-width: 768px){
    padding: 0 30px;
  }
`;

export const NavIcon = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 36px;
  color: #fff;

  @media screen and (max-width: 768px){
    font-size: 26px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: calc(20px + 2vw);
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
`;

export const NavBtn = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-right: 30px;
  left: -5px;
`;

export const ShoppingCart = styled(BsBag)`
  font-size: 30px;
  position: relative;
  top: -2px;
`;

export const Qty = styled.p`
  position: absolute;
  top: 13%;
  right: 10%;
  font-size: 20px
`;
