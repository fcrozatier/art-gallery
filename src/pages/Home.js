import React from "react";
import {
  Container, MainArtWork,
} from "./Home.elements";

function Home() {
  return (
    <>
      <Container>
          <MainArtWork src={require("../images/main.jpg").default} alt="showcase" />
      </Container>
    </>
  );
}

export default Home;
