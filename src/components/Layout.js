import React, { useState, useLayoutEffect } from "react";
import { Helmet } from 'react-helmet'

import { useSiteMetadata } from '../lib/hooks'
import Navbar from './navbar/Navbar'

import { createGlobalStyle } from 'styled-components';



function Layout(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  const {
    title: defaultTitle,
    description: defaultDescription
  } = useSiteMetadata();
  const title = props.title || defaultTitle
  const description = props.description || defaultDescription

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <GlobalStyles />
      <Navbar
        navbarState={navbarOpen}
        size={props.winSize}
        handleNavbar={handleNavbar}
      />

      <main>{props.children}</main>
    </div>
  );
}


const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;



export default Layout
