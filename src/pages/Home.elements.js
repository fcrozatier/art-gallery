import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: center;
  position: relative;
`;

export const Btn = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  z-index: 1;

  background-color: #000;
  color: white;
  text-decoration: none;
  padding: 20px;
  border: 1px solid #fff;
  user-select: none;
`;

export const MainArtWork = styled.img`
  max-width: 90%;
  max-height: 658px;
  object-fit: contain;
  object-position: center center;

  border: 1px solid rgba(0,0,0,0.5);
  border-radius: 4px;
  padding: 30px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.5;
  }

  ${Btn}:hover + & {
    opacity: 0.5;
  }

`;
