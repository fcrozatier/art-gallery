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

const img = require('../images/snakecharmer.jpg').default;

function Item() {
  return (
    <>
      <Container>
        <DisplayImg src={img} />
        <DescriptionWrapper>
          <Title>Snake Charmer</Title>
          <Artist>Chuck Hipsher</Artist>
          <Description>My last inspiration</Description>
          <Price>$7400</Price>
          <Btn>Add to cart</Btn>
          <MyLink to="/shop">
            <IoIosArrowBack />
            Go back
          </MyLink>
        </DescriptionWrapper>
      </Container>
    </>
  );
}

export default Item;
