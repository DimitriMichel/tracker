import React from 'react';
import styled from 'styled-components';

const StoriesContainer = styled.div`
  grid-area: subzone-stories;
  display: flex;

  flex-flow: row wrap;
  width: 100%;
`;
const StoryTitle = styled.div`
  margin: 0px 10px 10px 0px;
  padding-bottom: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  width: 175px;

  max-width: 100%;
  border-bottom: 1px dotted #fe9e2b; ;
`;

const GeneralStories = () => {
  return (
    <>
      <StoriesContainer>
        <StoryTitle>
          Asian Stocks Advance; Crude Oil Jumps: Markets Wrap
        </StoryTitle>
        <StoryTitle>
          Don’t Let Down Guard on Virus, CDC Head Warns Amid Lethal Strain
        </StoryTitle>
        <StoryTitle>
          Big Freeze Threatens Texas With Blackouts as Markets Gyrate
        </StoryTitle>
        <StoryTitle>
          Suspect Arrested in Fatal Stabbings in NYC Subway System
        </StoryTitle>
        <StoryTitle>
          Goldman’s Weaker Dollar Call Adds to Emerging-Market Fervor
        </StoryTitle>
        <StoryTitle>
          Drones Seen Capturing 30% of Express Delivery Market by 2040
        </StoryTitle>
        <StoryTitle>
          Carlos Menem, Argentine Leader Who Tamed Inflation, Dies at 90
        </StoryTitle>
        <StoryTitle>
          U.S. Infection Rate Eases to Lowest Since October: Virus Update
        </StoryTitle>
      </StoriesContainer>
    </>
  );
};

export default GeneralStories;
