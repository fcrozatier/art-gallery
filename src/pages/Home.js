import {
  Container,
  MainArtWork,
  MainBtn,
} from './Home.elements';

import mainImg from '../images/main.jpg';

function Home() {
  return (
    <>
      <Container>
        <MainBtn to="/shop">Visit gallery</MainBtn>
        <MainArtWork src={mainImg} alt="showcase" />
      </Container>
    </>
  );
}

export default Home;
