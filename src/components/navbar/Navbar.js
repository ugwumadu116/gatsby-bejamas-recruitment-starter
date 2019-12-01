import React from 'react'
import styled from "styled-components";

import { useSpring, animated, config } from "react-spring";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CloseMenu";
import Logo from "../../assets/Logo.svg";
import NavLink from './NavLinks';
import { navData } from './navAssets';
import NavImg from "./navAssets/ellipse.png";



const Navbar = ({ navbarState,size, handleNavbar}) => {
  const Image = styled.img`
    height: 85%;
    margin: auto 0;
  `;

  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)"
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  const NavBar = styled(animated.nav)`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    font-size: 20px;
    padding-top: 15px;
    background: #ffffff;
    box-shadow: 0px 2px 12px #0000001d;
    display: flex;
    justify-content: space-between;
  `;

  const FlexContainer = styled.div`
    max-width: 120rem;
    display: flex;
    margin: auto;
    padding: 0 2rem;
    justify-content: space-between;
    height: 5rem;
  `;
  
  const NavLinksContainer = styled(animated.ul)`
    justify-self: end;
    list-style-type: none;
    margin: auto ;
    display: flex;

    & a {
      color: #394e5d;
      text-transform: capitalize;
      font-weight: 600;
      border-bottom: 1px solid transparent;
      margin: 0 1.5rem;
      transition: all 300ms linear 0s;
      text-decoration: none;
      cursor: pointer;
      padding: 10px;
      background: url(${NavImg}) no-repeat 50% 45px;

      &:hover {
        background: url(${NavImg}) no-repeat 50% 38px;
      }

      @media (max-width: 768px) {
        display: none;
      }
    }
    & .middleLogo {
      @media (max-width: 768px) {
        display: none;
      }
    }
  `;

  const BurgerWrapper = styled.div`
    margin: auto;

    @media (min-width: 769px) {
      display: none;
    }
  `;
  const activeStyles = {
    background: `url(${NavImg}) no-repeat 50% 38px`,
  };
  return (
    <div>
      <NavBar style={barAnimation}>
        <BurgerWrapper>
          <BurgerMenu navbarState={navbarState} handleNavbar={handleNavbar} />
        </BurgerWrapper>
        <FlexContainer>
          {size < 769 && (
            <div>
              <Image src={Logo} alt=" Logo" />
            </div>
          )}
          <NavLinksContainer style={linkAnimation}>
            {[...navData.slice(0, 2)].map(item => (
              <div key={item.id}>
                <NavLink activeStyling={activeStyles} to={item.to}>
                  {item.name}
                </NavLink>
              </div>
            ))}
            <div className="middleLogo">
              <Image src={Logo} alt=" Logo" />
            </div>
            {[...navData.slice(2)].map(item => (
              <div key={item.id}>
                <NavLink activeStyling={activeStyles} to={item.to}>
                  {item.name}
                </NavLink>
              </div>
            ))}
          </NavLinksContainer>
        </FlexContainer>
      </NavBar>
      {size <= 768 && (
        <CollapseMenu navbarState={navbarState} handleNavbar={handleNavbar} />
      )}
    </div>
  );
};
 
export default Navbar;
