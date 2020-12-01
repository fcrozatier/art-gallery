import { PropTypes } from 'prop-types';
import { IoIosArrowBack } from 'react-icons/io';
import { useParams } from 'react-router-dom';
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

function Item({ paintings }) {
  const { id } = useParams();
  const painting = paintings.filter((paint) => paint.id === +id)[0];
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
  paintings: PropTypes.array.isRequired,
};

export default Item;
