import React from 'react';
import styled from 'styled-components';
import DataStrip from './DataStrip';
import StockTickerOverview from './StockTickerOverview';

const StockPageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: .2fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 20px;
  grid-template-areas:
    'data-strip data-strip data-strip data-strip'
    'stock-ticker stock-ticker stock-ticker stock-ticker'
    'current-stock-price current-stock-price current-stock-price stock-chart'
    'stock-overview stock-overview stock-overview stock-chart'
    'headline headline headline related-news-title'
    'article-image article article related-news'
    'key-statistics key-statistics key-statistics related-news';

  .stock-ticker {
    grid-area: stock-ticker;
  }

  .current-stock-price {
    grid-area: current-stock-price;
  }

  .stock-overview {
    grid-area: stock-overview;
  }

  .stock-chart {
    grid-area: stock-chart;
  }

  .key-statistics {
    grid-area: key-statistics;
  }

  .article-image {
    grid-area: article-image;
  }

  .article {
    grid-area: article;
  }

  .headline {
    grid-area: headline;
  }

  .related-news-title {
    grid-area: related-news-title;
  }

  .related-news {
    grid-area: related-news;
  }
`;

const StockPage = () => {
  return (
    <StockPageGrid>
      <DataStrip />
      <StockTickerOverview />
    </StockPageGrid>
  );
};

export default StockPage;
