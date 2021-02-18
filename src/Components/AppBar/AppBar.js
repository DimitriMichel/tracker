import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import { Link } from 'react-router-dom';
const AppBar = () => {
  const AppBarWrapper = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: #fe9e2b solid 2px;
    background-color: black;
  `;
  const Title = styled.div`
    font-weight: 900;
    font-size: 2.5rem;
    color: white;
    a {
      color: white;
      text-decoration: none;
    }
  `;
  Title.defaultProps = {
    role: 'banner',
  };
  const Degree = styled.span`
    font-weight: 900;
    font-size: 2.5rem;
    color: #fe9e2b;
  `;
  const EconBar = styled.div`
    width: 100%;

    margin-bottom: 25px;
    background-color: #fe9e2b;
  `;

  return (
    <>
      <AppBarWrapper>
        <Search />
        <Title>
          <Link to="/">Jupiter</Link>
          <Degree>°</Degree>
        </Title>
        <button style={{ marginLeft: 90 }}>Subscribe</button>
      </AppBarWrapper>
      <EconBar>
        <div className="words"></div>
      </EconBar>
    </>
  );
};

export default AppBar;
