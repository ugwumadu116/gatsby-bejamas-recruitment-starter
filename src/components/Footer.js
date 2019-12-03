import React from 'react';
import styled from "styled-components";
import Logo from "../assets/footerLogo.svg";
const Footer = () => {
    const FooterContainer = styled.div`
      background: #4296cb;
      color: white;
      height: 60px;
      margin-top: 183px;
      display: flex;
      padding-left: 80px;
      line-height: 60px;
      @media (max-width: 320px) {
        margin-right: -20px;
      }
      h4 {
        font-size: 14px;
        margin-left: 10px;
      }
    `;
    return (
        <FooterContainer>
            <img src={Logo} />            
        <h4>All rights reserved ©</h4>
      </FooterContainer>
    );
}
 
export default Footer;
