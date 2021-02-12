import AppBar from './Components/AppBar/AppBar';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';
import Headline from './Components/Headline';

const Global = createGlobalStyle`
body {
  font-family: NeueHaasDisplay,sans-serif;
  font-weight: normal;
}
button {
  font-weight: bold;
  color: white;
  padding: 5px 15px;
  background-color: black;
  width: fit-content;
  border: 1px black;
  height: 34px;
  text-transform: capitalize;
}
button:hover {
  cursor: pointer;
}
`;
const MainContainer = styled.div`
  max-width: 1080px;
  border: black 1px solid;
  margin: auto;
`;

function App() {
  return (
    <>
      <Global />
      <div className="App">
        <AppBar />
        <MainContainer>
          <Headline />
        </MainContainer>
      </div>
    </>
  );
}

export default App;
