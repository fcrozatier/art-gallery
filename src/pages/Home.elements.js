import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: center;
  position: relative;
`;

export const MainArtWork = styled.img`
  display: flex;
  max-width: 90%;
  max-height: 658px;
  object-fit: contain;
  object-position: center center;
`;

export const BtnContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
`

export const Btn = styled(Link)`
  position: relative;
  top: -50%;
  left: -50%;
  background-color: #000;
  color: white;
  text-decoration: none;
  padding: 20px;
  border: 1px solid #fff;
  user-select: none;
`;
