import React from 'react';
import styled from 'styled-components';
import Search from './Search';
const AppBar = () => {
  const AppBarWrapper = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin-bottom: 25px;
    border-bottom:  #fe9e2b solid 1px;
    background-color: black;
  `;
  const Title = styled.div`
    font-weight: 900;
    font-size: 3rem;
    color: #fe9e2b;
  `;


  return (
      <AppBarWrapper>
        <Search />
        <Title>Jupiter°</Title>
        <button style={{ marginLeft: 90 }}>Subscribe</button>
      </AppBarWrapper>

  );
};

export default AppBar;
