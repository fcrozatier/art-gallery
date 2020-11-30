import { IoIosArrowBack } from "react-icons/io";
import {
  Artist,
  Btn,
  Container,
  Description,
  DescriptionWrapper,
  DisplayImg,
  Medium,
  MyLink,
  Price,
  Title,
} from "./Item.elements";

function Item() {
  return (
    <>
      <Container>
        <DisplayImg src={require("../images/snakecharmer.jpg").default} />
        <DescriptionWrapper>
          <Title>Snake Charmer</Title>
          <Artist>Chuck Hipsher</Artist>
          <Description>My last inspiration</Description>
          {/* <Medium>Oil</Medium> */}
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
