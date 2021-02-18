import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

Wrapper.defaultProps = {
  role: 'search',
};
const Input = styled.input`
  font-family: NeueHaasDisplay, sans-serif;
  font-weight: normal;
  text-align: center;
  border: none;
  height: 30px;
`;
Input.defaultProps = {
  role: 'searchbox',
};

const Search = ({ keyword, setKeyword }) => {
  return (
    <Wrapper>
      <Input
        key="placeholder"
        value={keyword}
        placeholder={'Ticker'}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button>Search</button>
    </Wrapper>
  );
};

export default Search;
