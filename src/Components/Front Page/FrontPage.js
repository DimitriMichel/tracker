import React from 'react';
import styled from 'styled-components';
import TodaysStories from './TodaysArticles';
import LatestArticles from './LatestArticles';
import Crypto from './Crypto';
import TrendingStocks from './StockSideBar';
import GeneralStories from './GeneralStories';
import Headline from './Headline';

const FrontPageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.3fr 0.1fr 0.2fr 1fr;
  gap: 0px 20px;
  grid-template-areas:
    'latest-news-title subzone-name subzone-name subzone-name stock-title'
    'latest-news subzone-image subzone-subheadline subzone-subheadline stocks'
    'latest-news subzone-stories subzone-stories subzone-stories crypto-title'
    'latest-news subzone-stories subzone-stories subzone-stories crypto';
`;

const FrontPage = () => {
  return (
    <>
      <Headline />
      <FrontPageGrid>
        <TodaysStories />
        <LatestArticles />
        <TrendingStocks />
        <GeneralStories />
        <Crypto />
      </FrontPageGrid>
    </>
  );
};

export default FrontPage;
