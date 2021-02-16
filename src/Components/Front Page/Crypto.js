import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  grid-area: crypto-title;
 align-self: end;
  justify-self: center;
  text-align: center;
  text-transform: uppercase;
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 15px 0 0px 0;
  border-top: black 1px solid;
  border-bottom: black 1px solid;
  width: 100%;
`;
const LiveCurrency = styled.div`
  margin-top: 20px;
  grid-area: crypto;
  display: flex;
  flex-direction: column;
`;
const Currency = styled.h3`
  grid-area: crypto;
  margin: 0 0 0 0px;
  
  color: black;
  background-color: aquamarine;
  padding-bottom: 20px;
  font-size: 1.3rem;
  width: 100%;
  max-width: 100%;
  border-bottom: 1px dotted #fe9e2b; ;
`;
const Crypto = () => {
  return (
    <>
      <Title>Crypto</Title>
      <LiveCurrency>
        <Currency>BTC</Currency>
        <Currency>LTC</Currency>
        <Currency>DOGE</Currency>
        <Currency>XRP</Currency>
      </LiveCurrency>
    </>
  );
};

export default Crypto;
