import React, { useState, useLayoutEffect } from "react";
import { graphql } from "gatsby";

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Logos from '../components/Logos';

export function IndexPageTemplate({ winSize, intro, hero,  }) {
  // console.log(logos);
         return (
           <>
             <Hero hero={hero} />
             <Intro intro={intro} />
             <Logos winSize={winSize} />
           </>
         );
       }

IndexPageTemplate.propTypes = {}

function IndexPage({ data }) {
  const [size, setSize] = useState(100);

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  
  const {
    frontmatter: { title, intro, hero }
  } = data.markdownRemark;

  return (
    <Layout winSize={size} title={title}>
      <IndexPageTemplate
        winSize={size}
        hero={hero}
        intro={intro}
      />
    </Layout>
  );
}

IndexPage.propTypes = {}

export default IndexPage

export const pageQuery = graphql`
         query IndexPageTemplate {
           markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
             frontmatter {
               title
               intro {
                 heading
                 description
                 image {
                   childImageSharp {
                     fluid(maxWidth: 2048, quality: 100) {
                       ...GatsbyImageSharpFluid
                     }
                   }
                 }
               }
               hero {
                 heading
                 subheading
                 image {
                   childImageSharp {
                     fluid(maxWidth: 2048, quality: 100) {
                       ...GatsbyImageSharpFluid
                     }
                   }
                 }
               }
               
             }
           }
         }
       `;
   
