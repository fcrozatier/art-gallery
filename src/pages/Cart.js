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
  return (
    <>
      <Heading>Shopping cart</Heading>
      <ItemsContainer small>
        {cart.map((painting) => (
          <Art key={painting.id} small>
            <ImgWrapper>
              <Link
                to={{
                  pathname: `/${painting.id}`,
                  state: painting,
                }}
              >
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
        <Invoice>{(15675).toLocaleString('en-US')}</Invoice>
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
