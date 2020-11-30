import { Btn, Container, MainArtWork } from "./Home.elements";

function Home() {
  return (
    <>
      <Container>
        <MainArtWork
          src={require("../images/main.jpg").default}
          alt="showcase"
        />
          <Btn to="/shop">Visit gallery</Btn>
      </Container>
    </>
  );
}

export default Home;
