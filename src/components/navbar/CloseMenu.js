import React from "react";
import styled from "styled-components";
import { navData } from "./navAssets";
import NavImg from "./navAssets/smallellipse.png";
import Link from "./NavLinks";

import { useSpring, animated } from "react-spring";

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    const activeStyles = {
      background: `url(${NavImg}) no-repeat 0px 50%`,
    };

    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200]
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <NavLinks>
          {navData.map(item => (
            <li key={item.id}>
              <Link activeStyling={activeStyles} to={item.to}>
                {item.name}
              </Link>
            </li>
          ))}
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  /* background: red; */
  position: fixed;
  top: 5.9rem;
  left: 0;
  right: 0;
  bottom: 0px;
  z-index: 999;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: left;
  flex-direction: column;
  height: 100%;
  background: white;
  z-index: 999;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 20px;
    line-height: 2;
    color: #394e5d;
    text-transform: capitalize;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    padding: 10px;
    padding-left: 15px;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
