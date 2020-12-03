import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  padding: 50px;
  gap: 20px;
`;

export const DisplayImg = styled.img`
  object-fit: contain;
  object-position: center top;
  flex-shrink: 1;
  max-width: 50%;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-basis: 400px;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  text-align: center;
  padding: calc(20px + 3vw);
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 5px;
`;

export const Artist = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 50px;
`;

export const Description = styled.p`
  text-align: justify;
  text-justify: auto;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 30px;
  max-width: 400px;
  width: 90%;
`;

export const Medium = styled.small`
  font-size: 18px;
`;

export const Price = styled.p`
  font-size: 28px;
  margin-bottom: 20px;
`;

export const MyLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  transition: margin 300ms ease-in-out;

  &:hover {
    margin-right: 5px;
  }
`;
