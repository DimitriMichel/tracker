import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  grid-area: latest-news-title;
  align-self: end;
  justify-self: center;
  text-align: center;
  text-transform: uppercase;
  color: white;
  padding: 1px;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 15px 0 0 0;
  width: 100%;
  background-color: black;
`;
const RecentArticles = styled.div`
  grid-area: latest-news;
  display: flex;
  padding-right: 30px;
  flex-direction: column;
`;
const RecentArticleTitle = styled.h3`
  grid-area: latest-news;
  margin: 20px 0 0 0px;
  padding-bottom: 20px;
  font-size: 1rem;
  width: 100%;
  max-width: 100%;
  border-bottom: 1px dotted black; ;
`;

const LatestArticles = () => {
  return (
    <>
      <Title>Latest</Title>
      <RecentArticles>
        <RecentArticleTitle>
          New Zealand’s Largest City Goes Into Three-Day Lockdown
        </RecentArticleTitle>
        <RecentArticleTitle>
          Andrew Lloyd Webber Says Lockdowns Push London Theater to Abyss
        </RecentArticleTitle>
        <RecentArticleTitle>
          From Global Pariah to Emerging-Market Proxy: The Rand Turns 60
        </RecentArticleTitle>
        <RecentArticleTitle>
          Ethiopian Politicians in Hunger Strike Urge End to Impasse
        </RecentArticleTitle>
        <RecentArticleTitle>
          Iran Says U.S. Attempt to Seize Oil Cargo Is ‘Act of Piracy’
        </RecentArticleTitle>
      </RecentArticles>
    </>
  );
};

export default LatestArticles;
