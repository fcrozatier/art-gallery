import styled from 'styled-components';
import { Btn } from './Item.elements';
import { ArtWork, Container } from './Shop.elements';

export const ItemsContainer = styled(Container)`
  margin-bottom: 60px;
`;

export const Art = styled(ArtWork)`
  &:hover {
    cursor: default;
  }
`;

export const Heading = styled.h1`
  padding-top: calc(30px + 1vw);
  text-align: center;
  font-size: 36px;
  font-weight: 500;
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
