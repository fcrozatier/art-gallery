import styled from 'styled-components/macro';
import { Btn } from '../Styles';

export const Container = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: center;
  position: relative;
`;

export const MainBtn = styled(Btn)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  z-index: 1;
`;

export const MainArtWork = styled.img`
  max-width: 90%;
  max-height: 658px;
  object-fit: contain;
  object-position: center center;

  border: 1px solid #CCC;
  border-radius: 2px;
  padding: 30px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  ${MainBtn}:hover + & {
    opacity: 0.7;
  }

`;
