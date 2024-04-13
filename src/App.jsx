import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import styled from "styled-components";

const Main = styled.main`
  height: 100vh;
  display: flex;
`;

const Left = styled.div`
  padding: 2rem;
  border-right: 1px solid lightgray;
  width: 300px;
`;

const Right = styled.div`
  padding: 2rem;
  width: 100%;
`;

function App() {
  return (
    <>
      <Main>
        <Left>
          <NavBar />
        </Left>
        <Right>
          <Home />
        </Right>
      </Main>
    </>
  );
}

export default App;
