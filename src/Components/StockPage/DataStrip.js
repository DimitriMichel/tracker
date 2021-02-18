import React from 'react';
import styled from 'styled-components';

const Strip = styled.div`
  grid-area: data-strip;
  max-width: 100%;
  border-bottom: black solid 1px;
  padding: 0 0 20px 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DataCube = styled.div`
  border-left: #9cf4dc 5px solid;
  padding-left: 5px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 50px;
  max-width: 120px;
  width: 120px;
`;

const Ticker = styled.div`
  font-weight: bold;
  font-size: 13px;
  padding-top: 3px;
`;
const Price = styled.div`
  font-size: 13px;
  padding-top: 3px;
`;

const DataStrip = () => {
  return (
    <>
      <Strip>
        <DataCube>
          <Ticker>
            <span>DJIA</span>
          </Ticker>
          <Price>
            <span>31,522.75</span>
          </Price>
        </DataCube>
        <DataCube>
          <Ticker>
            <span>S&P 500</span>
          </Ticker>
          <Price>
            <span>3977.90</span>
          </Price>
        </DataCube>
        <DataCube>
          <Ticker>
            <span>NASDAQ</span>
          </Ticker>
          <Price>
            <span>14,031.75</span>
          </Price>
        </DataCube>
        <DataCube>
          <Ticker>
            <span>FTSE 100</span>
          </Ticker>
          <Price>
            <span>6748.95</span>
          </Price>
        </DataCube>
        <DataCube>
          <Ticker>
            <span>NIKKEI 225 Future</span>
          </Ticker>
          <Price>
            <span>30,200.75</span>
          </Price>
        </DataCube>

      </Strip>
    </>
  );
};

export default DataStrip;
