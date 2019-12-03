import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import Logo from '../../static/uploads/Logo.svg'

const Logos = ({ winSize }) => {
  const LogoContainer = styled.div`
    background: #f5f8fa;
    height: 145px;
    img {
      margin-top: 50px;
      width: 143px;
      height: 44px;
    }
  `;
  const StyledCarousel = styled(Carousel)`
    &.slider {
      .slider-control-centerleft,
      .slider-control-centerright,
      .slider-control-bottomcenter {
        opacity: 0;
      }
    }
  `;
  return (
    <LogoContainer>
      <StyledCarousel slidesToShow={winSize<768?3: 5} wrapAround={true} dragging={winSize<768?true:false}>
        <img src={Logo} />
        <img src={Logo} />
        <img src={Logo} />
        <img src={Logo} />
        <img src={Logo} />
      </StyledCarousel>
    </LogoContainer>
  );
};

export default Logos;
