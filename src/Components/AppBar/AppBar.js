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
    border-bottom: black dotted 1px;
  `;
  const Title = styled.div`
    font-weight: 900;
    font-size: 3rem;
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
