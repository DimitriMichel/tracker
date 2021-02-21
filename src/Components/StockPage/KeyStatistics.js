import React from 'react';
import styled from 'styled-components';

const KeyStatistics = () => {
  return (
    <KeyDetailsGrid>
      <Headline>Key Statistics</Headline>
      <AboutContainer>
        <Company>
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
        </Company>
        <Management>
          <Title>Management</Title>
          <Info>
            CEO: Timothy Donald Cook
            <br /> Employees: 132000
          </Info>
        </Management>
      </AboutContainer>
    </KeyDetailsGrid>
  );
};

const KeyDetailsGrid = styled.div`
  margin-top: 60px;
  grid-area: key-statistics;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'headline headline headline headline'
    'about about about about'
    'about about about about'
    'statistics-title statistics-title statistics-title statistics-title'
    'statistics statistics statistics statistics';

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

const AboutContainer = styled.div`
  grid-area: about;
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
const Company = styled.div`
  max-width: 50%;
  width: 50%;
`;
const Info = styled.p`
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
const Management = styled.div`
  max-width: 50%;
  width: 50%;
`;

export default KeyStatistics;
