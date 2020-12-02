import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Art, ItemsContainer, Heading, Footer, Invoice, Checkout,
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

function Cart({ cart }) {
  const total = () => cart.reduce((sum, item) => sum + (item.qty * item.price), 0);

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
              <Price>
                $
                {painting.price.toLocaleString('en-US')}
              </Price>
            </ArtDetails>
          </Art>
        ))}
      </ItemsContainer>
      <Footer>
        <Invoice>{(total()).toLocaleString('en-US')}</Invoice>
        <Checkout>Checkout</Checkout>
      </Footer>
    </>
  );
}

Cart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cart: PropTypes.array.isRequired,
};

export default Cart;
