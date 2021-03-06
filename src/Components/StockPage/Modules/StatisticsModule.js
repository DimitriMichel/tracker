import React from 'react';
import styled from 'styled-components';

const StatisticsModule = ({ data, title }) => {
  return (
    <Module>
      <Title>{title}</Title>
      <Info>
        <StatsModule>
          <RowList>
            {Object.keys(data).map((label) => (
              <RowListItem>
                <Label>{label}</Label>
                <DataPoint>{data[label]}</DataPoint>
              </RowListItem>
            ))}
          </RowList>
          <RowList style={{ marginLeft: 10 }}>
            {Object.keys(data).map((label) => (
              <RowListItem>
                <Label>{label}</Label>
                <DataPoint>{data[label]}</DataPoint>
              </RowListItem>
            ))}
          </RowList>
        </StatsModule>
      </Info>
    </Module>
  );
};


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
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0.2px;
  color: white;
  float: left;
`;
const DataPoint = styled.div`
  display: block;
  font-size: 15px;
  letter-spacing: 3px;
  color: white;
  float: right;
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

export default StatisticsModule;
