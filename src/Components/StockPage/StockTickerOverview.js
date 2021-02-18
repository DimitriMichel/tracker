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
        <PriceOverview>
          <Price>
            130.84<PriceCurrency>USD</PriceCurrency>
          </Price>
          <PriceChange aria-labelledby="change">
            <AbsoluteChange id="change">-1.76%</AbsoluteChange>
            <PriceChangeArrow>{''}</PriceChangeArrow>
          </PriceChange>
        </PriceOverview>
      </Company>
      <Details>
        <DataBox>
          <DataTitle>Open</DataTitle>
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
  margin-left: 10px;
  width: 100%;
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
  grid-area: 'current-stock-price';
  margin-top: 15px;
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
  grid-area: 'stock-overview';
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const DataTitle = styled.span`
  font-weight: 100;
  color: #767676;
`;

const DataBox = styled.div`
  min-height: 56px;
  border-top: 1px dotted black;
  margin: 0 8px;
  flex-grow: 1;
`;

export default StockTickerOverview;
