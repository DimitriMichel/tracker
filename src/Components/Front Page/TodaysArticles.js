import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  align-self: end;
  grid-area: subzone-name;
  margin: 0;
  font-weight: 900;
  font-size: 2.3rem;
  width: 100%;
  border-bottom: 2px solid #1fc894; ;
`;
const Image = styled.img`
  grid-area: subzone-image;
  max-height: 100%;
  max-width: 280px;
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
  margin: 0 0 0 0px;
  padding: 10px 0;

  font-size: 1.3rem;
  width: 100%;
  max-width: 100%;
  border-bottom: 1px dotted black; ;
`;
const SubStoryTitle = styled.h4`
  margin: 0 0 0 0px;
  font-weight: normal;
  padding: 5px 0px;
  font-size: 1.1rem;
  width: 100%;
  max-width: 100%;
  width: 100%;
  border-bottom: 1px dotted black; ;
`;

const TodaysStories = () => {
  return (
    <>
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
    </>
  );
};

export default TodaysStories;
