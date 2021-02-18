import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
  width: 100%;
  height: 100%;
  font-size: 5rem;
  background-color: black;
  color: white;
  border-bottom: 1px black solid;
`;

const NotFound = () => {
  return (
    <Error>
      Our apologies. We're unable to find the page you're looking for...
    </Error>
  );
};

export default NotFound;
