import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  grid-area: stock-title;
  align-self: end;
  justify-self: center;
  text-align: center;
  text-transform: uppercase;
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 15px 0 0 0;
  border-top: black 1px solid;
  border-bottom: black 1px solid;
  width: 100%;
`;
const Trending = styled.div`
  grid-area: stocks;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
const Stocks = styled.h3`
  grid-area: stocks;
  margin: 0 0 0 0px;
  color: white;
  background-color: black;
  padding-bottom: 20px;
  font-size: 1.3rem;
  width: 100%;
  max-width: 100%;
  border-bottom: 1px dotted #fe9e2b; ;
`;
const TrendingStocks = () => {
  return (
    <>
      <Title>Trending</Title>
      <Trending>
        <Stocks>AAPL</Stocks>
        <Stocks>TSLA</Stocks>
        <Stocks>ARKK</Stocks>
        <Stocks>PLTR</Stocks>
        <Stocks>GME</Stocks>
      </Trending>
    </>
  );
};

export default TrendingStocks;
