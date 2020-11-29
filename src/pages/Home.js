import { Btn, BtnContainer, Container, MainArtWork } from "./Home.elements";

function Home() {
  return (
    <>
      <Container>
        <MainArtWork
          src={require("../images/main.jpg").default}
          alt="showcase"
        />
        <BtnContainer>
          <Btn to="/shop">Visit gallery</Btn>
        </BtnContainer>
      </Container>
    </>
  );
}

export default Home;
