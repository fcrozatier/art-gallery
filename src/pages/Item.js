import { PropTypes } from 'prop-types';
import { IoIosArrowBack } from 'react-icons/io';
import {
  Artist,
  Btn,
  Container,
  Description,
  DescriptionWrapper,
  DisplayImg,
  MyLink,
  Price,
  Title,
} from './Item.elements';

function Item({ painting }) {
  const {
    title, artist, price, description, img,
  } = painting;

  return (
    <Container>
      <DisplayImg src={img} />
      <DescriptionWrapper>
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
        <Description>{description}</Description>
        <Price>
          $
          {price.toLocaleString('en-US')}
        </Price>
        <Btn>Add to cart</Btn>
        <MyLink to="/shop">
          <IoIosArrowBack />
          Go back
        </MyLink>
      </DescriptionWrapper>
    </Container>
  );
}

Item.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  painting: PropTypes.object.isRequired,
};

export default Item;
