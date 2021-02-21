import React from 'react';
import styled from 'styled-components';

const StockNewsGrid = styled.div`
  grid-area: stock-news;

  background-color: black;
  padding: 25px;
  color: white;
  border-radius: 4px;
`;

const ImageContainer = styled.div`
  padding: 10px;
`;

const Image = styled.img`
  padding: 0 15px 0px 0;
  max-width: 400px;
`;
Image.defaultProps = {
  src:
    'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/icpliHBOAYqk/v0/800x600.jpg',
  alt: 'SubZone Image',
};
const ArticleText = styled.p`
  font-family: Georgia, sans-serif;
  font-size: 1.2rem;
  max-width: 800px;
  margin-top: 0;
  line-height: 1.7rem;
`;
const Headline = styled.h2`
  margin: 0 0 20px 0;
  font-size: 2.7rem;
  padding-bottom: 5px;
  font-weight: 900;
  width: 100%;
  border-bottom: white 1px solid;
`;

const StockNews = () => {
  return (
    <StockNewsGrid>
      <Headline>
       Key Statistics
      </Headline>



    </StockNewsGrid>
  );
};

export default StockNews;
