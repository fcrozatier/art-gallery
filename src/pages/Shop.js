import {
  ArtDescription,
  ArtDetails,
  ArtImg,
  Artist,
  ArtWork,
  Container,
  ImgWrapper,
  Price,
  Title,
} from "./Shop.elements";
import { paintings } from "./Data";
import _ from "lodash";

function Shop() {
  const paints = _.shuffle(paintings);

  return (
    <>
      <Container>
        {paints.map((painting) => {
          return (
            <ArtWork key={painting.id} to="/item">
              <ImgWrapper>
                <ArtImg src={painting.img} alt="artwork" />
              </ImgWrapper>
              <ArtDetails>
                <ArtDescription>
                  <Title>{painting.title}</Title>
                  <Artist>{painting.artist}</Artist>
                </ArtDescription>
                <Price>${painting.price.toLocaleString("en-US")}</Price>
              </ArtDetails>
            </ArtWork>
          );
        })}
      </Container>
    </>
  );
}

export default Shop;
