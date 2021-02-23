import React from 'react';
import styled from 'styled-components';

const mockData = {
  'P/E Ration': 35.25,
  'Shares Issued': 4082000000,
  EBITDA: 80342000000,
  Revenue: 65809000000,
  Profit: 101983000000,
};

const mockDataTwo = {
  '1 Year Return': '67.25%',
  '30 Day Avg Volume': 907800,
  EPS: 3.68,
  Dividend: 0.63,
  'Price to Book Ratio': 32.9916,
};

const KeyStatistics = () => {
  return (
    <KeyDetailsGrid>
      <Headline>Key Statistics</Headline>

      <Container style={{ gridArea: 'about' }}>
        <Module>
          <Title>About</Title>
          <Info>
            Apple, Inc. engages in the design, manufacture, and marketing of
            mobile communication, media devices, personal computers, and
            portable digital music players. It operates through the following
            geographical segments: Americas, Europe, Greater China, Japan, and
            Rest of Asia Pacific. The Americas segment includes North and South
            America. The Europe segment consists of European countries, as well
            as India, the Middle East, and Africa. The Greater China segment
            comprises of China, Hong Kong, and Taiwan. The Rest of Asia Pacific
            segment includes Australia and Asian countries. The company was
            founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G.
            Wozniak on April 1, 1976 and is headquartered in Cupertino, CA.
          </Info>
        </Module>
        <Module>
          <Title>Management</Title>
          <Info>CEO: Timothy Donald Cook</Info>
        </Module>
      </Container>
    </KeyDetailsGrid>
  );
};

const KeyDetailsGrid = styled.div`
  margin-top: 60px;
  grid-area: key-statistics;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'headline headline headline headline'
    'statistics statistics statistics statistics'
    'statistics statistics statistics statistics'
    'about about about about'
    'about about about about';

  background-color: black;
  padding: 25px;
  color: white;
  border-radius: 4px;
`;

const StatsModule = styled.div`
  position: relative;
  margin-bottom: 4px;
  padding-bottom: 20px;
`;

const RowList = styled.div`
  display: inline-block;
  width: calc(50% - 10px);
  vertical-align: top;
`;

const RowListItem = styled.div`
  border-bottom: 1px dotted white;
  padding: 10px 0;
  line-height: 10px;
  overflow: hidden;
`;

const Label = styled.div`
  display: block;
  font-size: 1rem;
  letter-spacing: 0.2px;
  color: white;
  float: left;
`;
const DataPoint = styled.div`
  display: block;
  font-size: 1rem;
  letter-spacing: 3px;
  color: white;
  float: right;
`;
const Headline = styled.h2`
  grid-area: headline;
  margin: 0 0 20px 0;
  font-size: 2.8rem;
  padding-bottom: 5px;
  font-weight: 900;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const Title = styled.h2`
  font-size: 2rem;
  padding-bottom: 5px;
  margin: 0;
  font-weight: 900;
  width: 100%;
  border-bottom: white 1px solid;
`;
const Module = styled.div`
  max-width: 50%;
  width: 50%;
`;
const Info = styled.div`
  font-family: NeueHaasDisplay, sans-serif;
  font-size: 1.2rem;
  max-width: 500px;
  line-height: 1.5rem;
  margin: 0;
  padding: 20px 20px 0 0;
  font-weight: normal;
  width: 100%;
  min-height: 100%;
`;


export default KeyStatistics;
