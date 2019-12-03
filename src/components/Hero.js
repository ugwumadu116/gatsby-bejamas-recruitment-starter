import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";


const Hero = ({ hero }) => {
  const FlexContainer = styled.div`
    height: 93vh;
    margin: 10vh 0px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    & .hero_left {
      max-width: 500px;
      width: 500px;
      margin-right: 20px;
      padding: 10px;
      h1 {
        font-size: 46px;
        text-align: left;
        color: #394e5d;
        margin: 10px 0px;
      }
      p {
        text-align: left;
        color: #394e5d;
        font-size: 22px;
      }
      @media (max-width: 659px) {
        h1 {
          font-size: 2.5rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }
    & .hero_right {
      max-width: 500px;
      width: 500px;
      margin: 10px 5px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    @media (max-width: 769px) {
      .hero_right {
        max-width: 100%;
      }
    }
  `;
  return (
    <FlexContainer>
      <div className="hero_left">
        <h1>{hero.heading}</h1>
        <p>{hero.subheading}</p>
      </div>
      <div
        className="hero_right"
      >
        <div
          style={{ width: "80%"}}
        >
          <Img fluid={hero.image.childImageSharp.fluid} alt="Hero image" />
        </div>
      </div>
    </FlexContainer>
  );
};

export default Hero;
