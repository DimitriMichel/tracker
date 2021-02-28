import React from 'react';
import styled from 'styled-components';
import StatisticsModule from './Statistics/StatisticsModule';
import AboutModule from './Statistics/AboutModule';

let mockData = {
  'P/E Ration': 35.25,
  'Shares Issued': 4082000000,
  EBITDA: 80342000000,
  Revenue: 65809000000,
  Profit: 101983000000,
};

let mockDataTwo = {
  '1 Year Return': '67.25%',
  '30 Day Avg Volume': 907800,
  EPS: 3.68,
  Dividend: 0.63,
  'Price to Book Ratio': 32.9916,
};

let companyAbout =
  '            Apple, Inc. engages in the design, manufacture, and marketing of\n' +
  '            mobile communication, media devices, personal computers, and\n' +
  '            portable digital music players. It operates through the following\n' +
  '            geographical segments: Americas, Europe, Greater China, Japan, and\n' +
  '            Rest of Asia Pacific. The Americas segment includes North and South\n' +
  '            America. The Europe segment consists of European countries, as well\n' +
  '            as India, the Middle East, and Africa. The Greater China segment\n' +
  '            comprises of China, Hong Kong, and Taiwan. The Rest of Asia Pacific\n' +
  '            segment includes Australia and Asian countries. The company was\n' +
  '            founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G.\n' +
  '            Wozniak on April 1, 1976 and is headquartered in Cupertino, CA.';

let managementAbout = 'CEO: Timothy Donald Cook';

const KeyStatistics = () => {
  return (
    <KeyDetailsGrid>
      <Headline>Key Statistics</Headline>
      <Container style={{ gridArea: 'statistics' }}>
        <StatisticsModule data={mockData} title="Advanced Statistics" />
        <StatisticsModule data={mockDataTwo} title="Balance Sheet" />
        <StatisticsModule data={mockData} title="Income Statement" />
        <StatisticsModule data={mockDataTwo} title="Cash Flow" />
      </Container>
      <Container style={{ gridArea: 'about' }}>
        <AboutModule about={companyAbout} title="About" />
        <AboutModule about={managementAbout} title="Management" />
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

export default KeyStatistics;
