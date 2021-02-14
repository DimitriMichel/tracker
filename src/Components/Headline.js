import React from 'react';
import styled from 'styled-components';

const HeadlineGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'headline-image headline-title headline-title headline-title'
    'headline-image headline-story-one headline-story-two headline-story-three';
  .headline-image {
    grid-area: headline-image;
  }

  .headline-title {
    grid-area: headline-title;
  }
  .story {
    background-color: black;
    color: #fe9e2b;
  }
  .headline-story-one {
    grid-area: headline-story-one;
  }

  .headline-story-two {
    grid-area: headline-story-two;
  }

  .headline-story-three {
    grid-area: headline-story-three;
  }
  a {
    color: #fe9e2b;
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
  }
  p {
    margin: 10px;
    font-size: 1.3rem;
  }
`;

const HeadlineImage = styled.div`
  grid-area: headline-image;
  background-color: black;
  img {
    max-height: 100%;
    max-width: 400px;
  }
`;
const Title = styled.h1`
  grid-area: headline-title;
  margin: 0 0 0 10px;
  font-size: 2.7rem;
  height: 100%;
  width: 100%;
`;

const Headline = () => {
  return (
    <section>
      <article>
        <HeadlineGrid>
          <Title tabIndex="0">
            Trump Defense to Wrap Up in Under Four Hours: Impeachment Update
          </Title>
          <HeadlineImage>
            <img
              src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ieUAMcd464Dw/v0/800x600.jpg"
              alt="trump"
            />
          </HeadlineImage>
          <div className="headline-story-one story" tabIndex="1">
            <p>
              <a href="#">
                Trump Defense to Wrap Up in Under Four Hours: Impeachment Update
              </a>
            </p>
          </div>
          <div className="headline-story-two story" tabIndex="2">
            <p>
              <a href="#">
                Democrats Use Video, Trump’s Words to Build Impeachment Case
              </a>
            </p>
          </div>
          <div className="headline-story-three story" tabIndex="3">
            <p>
              <a href="#">
                Trump Team Hoping ‘Peacefully and Patriotically’ Will Be Shield
              </a>
            </p>
          </div>
        </HeadlineGrid>
      </article>
    </section>
  );
};

export default Headline;
