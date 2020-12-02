import {
  Btn,
  Container,
  MainArtWork,
} from './Home.elements';

import mainImg from '../images/main.jpg';

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
