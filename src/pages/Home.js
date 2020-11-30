import { Btn, Container, MainArtWork } from './Home.elements';

const mainImg = require('../images/main.jpg').default;

function Home() {
  return (
    <>
      <Container>
        <MainArtWork
          src={mainImg}
          alt="showcase"
        />
        <Btn to="/shop">Visit gallery</Btn>
      </Container>
    </>
  );
}

export default Home;
