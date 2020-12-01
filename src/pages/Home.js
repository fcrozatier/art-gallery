import {
  Btn,
  Container,
  MainArtWork,
} from './Home.elements';

import mainImg from '../images/main.jpg';
// const mainImg = require('../images/main.jpg').default;

function Home() {
  return (
    <>
      <Container>
        <Btn to="/shop">Visit gallery</Btn>
        <MainArtWork src={mainImg} alt="showcase" />
      </Container>
    </>
  );
}

export default Home;
