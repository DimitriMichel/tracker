import AppBar from './Components/AppBar/AppBar';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';
import Headline from './Components/Front Page/Headline';
import FrontPage from './Components/Front Page/FrontPage';

const Global = createGlobalStyle`
body {
  font-family: NeueHaasDisplay,sans-serif;
  font-weight: normal;
}
button {
  font-weight: bold;
  color: black;
  padding: 5px 15px;
  background-color: #fe9e2b;
  width: fit-content;
  border: none;
  height: 32px;
  text-transform: capitalize;
}
button:hover {
  cursor: pointer;
}
`;
const MainContainer = styled.div`
  max-width: 1200px;
  padding-top: 20px;
  border-top: black 1px solid;
  margin: auto;
`;

function App() {
  return (
    <>
      <Global />
      <div className="App">
        <AppBar />
        <MainContainer>
          <FrontPage />
        </MainContainer>
      </div>
    </>
  );
}

export default App;
