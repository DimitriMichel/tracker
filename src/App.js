import AppBar from './Components/AppBar/AppBar';
import styled, { createGlobalStyle } from 'styled-components';
import Router from './Components/Router';
import './App.css';

const Global = createGlobalStyle`
body {
  font-family: NeueHaasDisplay,sans-serif;
  font-weight: normal;
}
button {
  font-weight: bold;
  color: black;
  padding: 5px 15px;
  background-color: white;
  width: fit-content;
  border-left: 1px black solid;
  border-bottom: none;
  border-right: none;
  border-top: none;
  height: 32px;
  text-transform: capitalize;
}
button:hover {
  cursor: pointer;
}
`;
const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;
MainContainer.defaultProps = {
  role: 'main',
};

function App() {
  return (
    <>
      <Global />
      <div className="App">
        <AppBar />
        <MainContainer>
          <Router />
        </MainContainer>
      </div>
    </>
  );
}

export default App;
