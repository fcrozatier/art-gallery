import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';

export const Container = styled.main`
  display: grid;
  padding: 50px;
  gap: 30px;
  justify-content: center;
  justify-items: center;
  ${(props) => (props.small
    ? css`
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        `
    : css`
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        `)};

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  @media screen and (max-width: 768px) {
    padding: 30px 0;
    grid-template-columns: 1fr;
  }
`;

export const ArtWork = styled(Link)`
  text-decoration: none;
  display: grid;
  height: 500px;
  width: ${({ small }) => (small ? '400px' : 'auto')};
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 2px;
  transition: transform 300ms ease-in-out;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
`;

export const ArtImg = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const ArtDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

export const ArtDescription = styled.div``;

export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 2px;
  color: rgba(0, 0, 0, 0.9);
`;

export const Artist = styled.small`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
`;

export const Price = styled.p`
  margin-left: 20px;
  font-size: 28px;
  color: rgba(0, 0, 0, 0.9);
`;
