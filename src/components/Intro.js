import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Intro = ({ intro }) => {
  const Topic = styled.div`
    font-size: 28px;
    text-align: left;
    display: flex;
    color: #394e5d;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin: 0px 10px;
    @media (max-width: 735px) {
      h1 {
        font-size: 3.2rem;
      }
    }
  `;
  const FlexContainer = styled.div`
    margin: 5vh 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    & .story_left {
      max-width: 500px;
      width: 500px;
      margin-right: 20px;
      padding: 10px;

      @media (max-width: 375px) {
        .imageContainer {
          display: none;
        }
      }
    }
    & .story_right {
      max-width: 500px;
      margin: 10px 5px;
      h3 {
        font-size: 20px;
        text-align: left;
        color: #394e5d;
        margin: 10px 0px;
      }
      p {
        text-align: left;
        color: #394e5d;
        font-size: 18px;
      }
      @media (max-width: 659px) {
        h3 {
          font-size: 18px;
        }
        p {
          font-size: 16px;
        }
      }
    }
  `;
  return (
    <>
      <Topic>
        <h1>{intro.heading}</h1>
      </Topic>
      <FlexContainer>
        <div className="story_left">
          <div
            className="imageContainer"
            style={{ width: "50%", float: "right", marginRight: "30%" }}
          >
            <Img fluid={intro.image.childImageSharp.fluid} alt="Hero image" />
          </div>
        </div>
        <div className="story_right">
          <h3>{intro.description.slice(5, 29)}</h3>
          <p>{intro.description.slice(29)}</p>
        </div>
      </FlexContainer>
    </>
  );
};

export default Intro;
