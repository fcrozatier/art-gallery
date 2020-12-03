import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Art,
  ItemsContainer,
  Heading,
  Footer,
  Invoice,
  Checkout,
  MyLink,
  Amount,
  Quantity,
  MyBtn,
  Qty,
} from './Cart.elements';
import {
  ImgWrapper,
  ArtDescription,
  Title,
  Artist,
  ArtDetails,
  ArtImg,
  Price,
} from './Shop.elements';

function Cart({ cart, deleteItem, setItemDelta }) {
  const total = () => cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <>
      <Heading>Shopping cart</Heading>
      <ItemsContainer small>
        {cart.map((painting) => (
          <Art key={painting.id} small>
            <ImgWrapper>
              <Link to={`/shop/${painting.id}`}>
                <ArtImg src={painting.img} alt="artwork" />
              </Link>
            </ImgWrapper>
            <ArtDetails>
              <ArtDescription>
                <Title>{painting.title}</Title>
                <Artist>{painting.artist}</Artist>
              </ArtDescription>
              <Amount>
                <Price>
                  $
                  {painting.price.toLocaleString('en-US')}
                </Price>
                <Quantity>
                  <MyBtn onClick={() => setItemDelta(painting.id, -1)}>-</MyBtn>
                  <Qty>{painting.qty}</Qty>
                  <MyBtn onClick={() => setItemDelta(painting.id, 1)}>+</MyBtn>
                </Quantity>
              </Amount>
            </ArtDetails>
            <MyLink onClick={() => deleteItem(painting.id)}>delete</MyLink>
          </Art>
        ))}
      </ItemsContainer>
      <Footer>
        <Invoice>{total().toLocaleString('en-US')}</Invoice>
        <Checkout>Checkout</Checkout>
      </Footer>
    </>
  );
}

Cart.defaultProps = {
  cart: [],
  deleteItem: () => {},
  setItemDelta: () => {},
};

Cart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cart: PropTypes.array,
  deleteItem: PropTypes.func,
  setItemDelta: PropTypes.func,
};

export default Cart;
