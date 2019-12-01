import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/img/56256.png";

const Hero = () => {
  const FlexContainer = styled.div`
      height: 93vh;
      margin: 0 auto;
      margin-top: 7vh;
      max-width: 1140px;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      & .hero_left {
        max-width: 570px;
        margin-right: 20px;
        padding: 10px;
        h1 {
          font-size: 46px;
          text-align: left;
          color: #394e5d;
        }
        p {
          text-align: left;
          color: #394e5d;
          font-size: 22px;
        }
        @media (max-width: 769px) {
          h1 {
          font-size: 32px;
          }
        p {
          font-size: 18px;
          }
      }
      & .hero_left {
        max-width: 570px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    `;
  return (
    <FlexContainer>
      <div className="hero_left">
        <h1>Start new… Today!</h1>
        <p>
          Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum
        </p>
      </div>
      <div className="hero_right">
        <div className="imageContainer">
          <img src={HeroImage} alt="Hero image" />
        </div>
      </div>
    </FlexContainer>
  );
};

export default Hero;
