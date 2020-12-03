import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Btn } from './Item.elements';
import { Container } from './Shop.elements';

export const ItemsContainer = styled(Container)`
  margin-bottom: 60px;
`;

export const Art = styled.div`
  display: grid;
  height: 500px;
  width: ${({ small }) => (small ? '400px' : 'auto')};
  padding: 30px;
  border: 1px solid #CCC;
  border-radius: 2px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
`;

export const Heading = styled.h1`
  padding-top: calc(30px + 1vw);
  text-align: center;
  font-size: 36px;
  font-weight: 500;
`;

export const Amount = styled.div`
  display: grid;
  justify-content: center;
`;

export const Quantity = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Qty = styled.p`
  padding: 0 10px;
`;

export const MyBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

  font-size: 18px;
  color: white;
  text-decoration: none;
  padding: 5px 10px;

  margin-bottom: 0px;
  border: none;
  user-select: none;
  outline: none;
  cursor: pointer;
`;

export const MyLink = styled(Link)`
  text-decoration: none;
  color: #777;
  justify-self: flex-start;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 80px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  border-top: 1px solid #CCC;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2)
`;

export const Invoice = styled.p`
  margin: 0 auto;
  transform: translate(50%, 0);
  font-size: 28px;
  font-weight: 500;

  &::before{
    content: 'Total $';
  }

  @media screen and (max-width: 600px){
    transform: translate(0, 0);

  }
`;

export const Checkout = styled(Btn)`
  margin-right: calc(30px + 1vw);
  margin-bottom: 0px;
  padding: 15px calc(10px + 1vw);
  font-size: 20px;
`;
