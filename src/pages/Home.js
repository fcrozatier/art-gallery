import React from "react";
import {
  Container,
} from "./Home.elements";

function Home() {
  return (
    <>
      <Container>
          <img src={require("../images/main.jpg").default} alt="showcase" />
      </Container>
    </>
  );
}

export default Home;
