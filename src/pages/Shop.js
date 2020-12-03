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
          to={`/shop/${painting.id}`}
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

Shop.defaultProps = {
  paintings: [],
};

Shop.propTypes = {
  paintings: PropTypes.arrayOf(PropTypes.object),
};
export default Shop;
