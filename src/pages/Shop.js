import _ from 'lodash';
import PropTypes from 'prop-types';
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
} from './Shop.elements';

function Shop({ paintings }) {
  const paints = _.shuffle(paintings);

  return (
    <Container>
      {paints.map((painting) => (
        <ArtWork
          key={painting.id}
          to={`/${painting.id}`}
          // to={{
          //   pathname: `/${painting.id}`,
          //   state: painting,
          // }}
        >
          <ImgWrapper>
            <ArtImg src={painting.img} alt="artwork" />
          </ImgWrapper>
          <ArtDetails>
            <ArtDescription>
              <Title>{painting.title}</Title>
              <Artist>{painting.artist}</Artist>
            </ArtDescription>
            <Price>
              $
              {painting.price.toLocaleString('en-US')}
            </Price>
          </ArtDetails>
        </ArtWork>
      ))}
    </Container>
  );
}

Shop.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  paintings: PropTypes.array.isRequired,
};
export default Shop;
