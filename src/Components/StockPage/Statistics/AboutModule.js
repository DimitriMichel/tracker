import React from "react";
import styled from "styled-components";


const AboutModule = ({about, title}) => {
  return (
    <Module>
      <Title>{title}</Title>
      <Info>{about}</Info>
    </Module>
  );
};

const Module = styled.div`
  max-width: 50%;
  width: 50%;
`;
const Title = styled.h2`
  font-size: 2rem;
  padding-bottom: 5px;
  margin: 0;
  font-weight: 900;
  width: 100%;
  border-bottom: white 1px solid;
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
export default AboutModule;