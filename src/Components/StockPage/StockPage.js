import React from 'react';
import styled from 'styled-components';
import DataStrip from './DataStrip';
import StockTickerOverview from './StockTickerOverview';
import PriceChart from './Charts/PriceChart';
import StockNews from './StockNews';
import KeyStatistics from './KeyStatistics';
import BalanceSheetChart from './Charts/BalanceSheetChart';

const StockPageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 0px 0px;
  grid-template-areas:
    'data-strip data-strip data-strip data-strip'
    'stock-ticker stock-ticker stock-chart stock-chart'
    'current-stock-price current-stock-price stock-chart stock-chart'
    'stock-overview stock-overview stock-chart stock-chart'
    'key-statistics key-statistics key-statistics key-statistics'
    'stock-news stock-news stock-news stock-news'
    'stock-news stock-news stock-news stock-news';
`;
const NewsContainer = styled.div`
  background-color: black;
  padding: 15px;
  width: 100%;
`;

const StockPage = () => {
  return (
      <StockPageGrid>
        <DataStrip />
        <StockTickerOverview />
        <PriceChart />
        <KeyStatistics />
      </StockPageGrid>
  );
};

export default StockPage;
