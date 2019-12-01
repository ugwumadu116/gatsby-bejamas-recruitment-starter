import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/img/56217.png";

const Story = () => {
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
  `;
 const FlexContainer = styled.div`
   margin: 5vh 10px;
   display: flex;
   flex-flow: row wrap;
   justify-content: center;
   align-items: center;
   & .story_left {
     max-width: 500px;
     margin-right: 20px;
     padding: 10px;
     @media (max-width: 375px) {
       img {
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
        <h1>Lorem ipsum something</h1>
      </Topic>
      <FlexContainer>
        <div className="story_left">
          <div className="imageContainer">
            <img src={HeroImage} alt="Hero image" />
          </div>
        </div>
        <div className="story_right">
          <h3>New Product, new Story</h3>
          <p>
            Vivamus vestibulum elit efficitur, elementum sapien a, aliquet
            ipsum. Fusce placerat dolor id cursus finibus. Aliquam tempus
            facilisis ipsum sit amet molestie. Proin lobortis eros a turpis
            tempor, sed ornare augue aliquam. Donec imperdiet nulla ut placerat
            molestie. In hendrerit blandit ante facilisis ultrices. Mauris
            vulputate metus sit amet ex dignissim, sed hendrerit nunc rhoncus.
          </p>
        </div>
      </FlexContainer>
    </>
  );
};

export default Story;
