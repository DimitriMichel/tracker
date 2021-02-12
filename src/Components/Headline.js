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

  .headline-story-one {
    grid-area: headline-story-one;
  }

  .headline-story-two {
    grid-area: headline-story-two;
  }

  .headline-story-three {
    grid-area: headline-story-three;
  }
`;

const HeadlineImage = styled.div`
  grid-area: headline-image;
  background-color: black;
  img {
    max-height: 100%;
    max-width: 100%;
  }
`;
const HeadlineTitle = styled.h1`
  grid-area: headline-title;
  margin: 0;
  font-size: 2.7rem;
  height: 100%;
  width: 100%;
`;

const HeadlineStory1 = styled.div`
  font-size: 1.3rem;
  grid-area: headline-story-one;
  background-color: black;
  color: #fe9e2b;
  height: 100%;
  width: 100%;
  
`;
const HeadlineStory2 = styled.div`
  font-size: 1.3rem;
  grid-area: headline-story-two;
  background-color: black;
  color: #fe9e2b;
  height: 100%;
  width: 100%;
`;
const HeadlineStory3 = styled.div`
  font-size: 1.3rem;
  grid-area: headline-story-three;
  background-color: black;
  color: #fe9e2b;
  height: 100%;
  width: 100%;
`;

const Headline = () => {
  return (
    <section>
      <article>
        <HeadlineGrid>
          <HeadlineTitle>
            Trump Defense to Wrap Up in Under Four Hours: Impeachment Update
          </HeadlineTitle>
          <HeadlineImage>
            <img
              src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ieUAMcd464Dw/v0/800x600.jpg"
              alt="trump"
            />
          </HeadlineImage>
          <HeadlineStory1>
            Trump Defense to Wrap Up in Under Four Hours: Impeachment Update
          </HeadlineStory1>
          <HeadlineStory2>
            Democrats Use Video, Trump’s Words to Build Impeachment Case
          </HeadlineStory2>
          <HeadlineStory3>
            Trump Team Hoping ‘Peacefully and Patriotically’ Will Be Shield
          </HeadlineStory3>
        </HeadlineGrid>
      </article>
    </section>
  );
};

export default Headline;
