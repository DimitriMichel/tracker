import React from 'react';
import styled from 'styled-components';

const MainSectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.8fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'top-news subzone-name subzone-name subzone-name crypto'
    'top-news subzone-image subzone-subheadline subzone-subheadline crypto'
    'top-news subzone-image subzone-subheadline subzone-subheadline crypto'
    'top-news subzone-stories subzone-stories subzone-stories subzone-stories';

  .top-news {
    grid-area: top-news;
  }

  .subzone-image {
    grid-area: subzone-image;
  }

  .subzone-stories {
    grid-area: subzone-stories;
  }

  .subzone-subheadline {
    grid-area: subzone-subheadline;
  }

  .subzone-name {
    grid-area: subzone-name;
  }

  .crypto {
    grid-area: crypto;
  }
`;

const Title = styled.h2`
  align-self: center;
  grid-area: subzone-name;
  margin: 0;
  font-weight: 900;
  font-size: 2.3rem;
  width: 100%;
  border-bottom: 2px solid #fe9e2b; ;
`;
const Image = styled.img`
  grid-area: subzone-image;
  max-height: 100%;
  max-width: 100%;
  background-color: black;
`;
Image.defaultProps = {
  src:
    'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/icpliHBOAYqk/v0/800x600.jpg',
  alt: 'SubZone Image',
};
const TodaysMainArticles = styled.div`
  grid-area: subzone-subheadline;
  display: flex;
  flex-direction: column;
`;
const SubMainTitle = styled.h3`
  margin: 0 0 0 20px;
  padding-bottom: 20px;
  font-size: 1.3rem;
  width: 100%;
  border-bottom: 1px dotted #fe9e2b; ;
`;
const SubStoryTitle = styled.h4`
  margin: 0 0 0 20px;
  font-weight: normal;
  padding: 5px 0;
  font-size: 1.1rem;
  width: 100%;
  border-bottom: 1px dotted #fe9e2b; ;
`;

const MainSection = () => {
  return (
    <>
      <MainSectionGrid>
        <Title>Today's Stories</Title>
        <Image />
        <TodaysMainArticles>
          <SubMainTitle>
            Speculative Traders Add Billions to ‘Meme’ Stocks at New Records
          </SubMainTitle>
          <SubStoryTitle>
            Buffett’s Favorite Valuation Metric Is Ringing an Alarm
          </SubStoryTitle>
          <SubStoryTitle>
            Morgan Stanley May Bet on Bitcoin in $150 Billion Investment Arm
          </SubStoryTitle>
          <SubStoryTitle>
            Bond-Market Reflation Trade Absorbs Punch to Extend 2021 Advance
          </SubStoryTitle>
        </TodaysMainArticles>
      </MainSectionGrid>
    </>
  );
};

export default MainSection;
