import styled from "styled-components/macro";

export const Container = styled.main`
  display: grid;
  gap: 30px;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  padding: 50px;

  @media screen and (max-width: 768px) {
    padding: 30px 0;
    grid-template-columns: 1fr;
  }
`;

export const ArtWork = styled.div`
  height: 500px;
  width: 500px;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  transition: all 300ms ease-in-out;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  display: grid;

  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
`;

export const ArtImg = styled.img`
  min-width: 100%;
  height: 100%;
  /* aspect-ratio: 1; */
  object-fit: cover;
`;

export const ArtDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

export const ArtDescription = styled.div`
  /* display: grid; */
`;

export const Title = styled.h2`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.9);
`;

export const Artist = styled.small`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
`;

export const Price = styled.p`
  font-size: 28px;
  color: rgba(0, 0, 0, 0.9);
`;
