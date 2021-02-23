import React from 'react';
import styled from 'styled-components';

const StockTickerOverview = () => {
  return (
    <>
      <Company>
        <Ticker>AAPL</Ticker>
        <Separator>|</Separator>
        <Exchange>nasdaq</Exchange>
        <Container>
          <Name>Apple Inc</Name>
        </Container>
      </Company>
      <PriceOverview>
        <Price>
          130.84<PriceCurrency>USD</PriceCurrency>
        </Price>
        <PriceChange aria-labelledby="change">
          <AbsoluteChange id="change">-1.76%</AbsoluteChange>
          <PriceChangeArrow>{''}</PriceChangeArrow>
        </PriceChange>
      </PriceOverview>
      <Details>
        <DataBox>
          <DataTitle>Open</DataTitle>
          <DataValue>132.25</DataValue>
        </DataBox>
        <DataBox>
          <DataTitle>Close</DataTitle>
          <DataValue>131.83</DataValue>
        </DataBox>
        <DataBox>
          <DataTitle>Volume</DataTitle>
          <DataValue>98,005,433</DataValue>
        </DataBox>
        <DataBox>
          <DataTitle>Open</DataTitle>
          <DataValue>132.25</DataValue>
        </DataBox>
        <DataBox>
          <DataTitle>Close</DataTitle>
          <DataValue>131.83</DataValue>
        </DataBox>
        <DataBox>
          <DataTitle>Volume</DataTitle>
          <DataValue>98,005,433</DataValue>
        </DataBox>
      </Details>
    </>
  );
};

const Ticker = styled.span`
  font-weight: bold;
`;

const Company = styled.section`
  grid-area: stock-ticker;
  display: block;
  padding-left: 10px;
  width: 100%;

  border-left: 5px red solid;
`;

const Container = styled.div``;

const Name = styled.h1`
  font-weight: normal;
  margin: 0;
`;

const Separator = styled.span`
  font-weight: normal;
  margin: 0 0px 0 10px;
`;

const Exchange = styled.span`
  font-weight: 100;
  color: #767676;
  text-transform: uppercase;
  margin-left: 10px;
`;

const PriceOverview = styled.section`
  grid-area: current-stock-price;
  max-height: 50px;
  align-items: center;
  margin-top: 5px;
  display: inline-block;
`;
const Price = styled.div`
  font-size: 3rem;
  font-weight: bold;
  display: inline-block;
  margin-right: 20px;
`;

const PriceChange = styled.div`
  display: inline-block;
  max-height: 50px;
`;

const AbsoluteChange = styled.span`
  font-size: 1.2rem;
  display: inline-block;
`;
const PriceCurrency = styled.span`
  font-size: 0.8rem;
  margin-left: 5px;
  margin-right: 20px;
`;
const PriceChangeArrow = styled.span`
  width: 0;
  height: 0;
  font-size: 3px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #f00;
  margin-left: 5px;
`;

const Details = styled.div`
  grid-area: stock-overview;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;

const DataTitle = styled.header`
  font-weight: 100;
  color: #767676;
  margin-top: 5px;
`;

const DataBox = styled.div`
  height: 56px;
  display: flex;
  justify-content: center;
  max-width: 200px;
  min-width: 170px;
  flex-direction: column;
  border-top: 1px dotted black;
  margin: 0 8px;
  flex-grow: 1;
`;

const DataValue = styled.div`
  font-size: 1rem;
  width: 100%;
  font-weight: normal;
  letter-spacing: 3px;
  margin-top: 9px;
  padding-bottom: 9px;
`;

export default StockTickerOverview;
