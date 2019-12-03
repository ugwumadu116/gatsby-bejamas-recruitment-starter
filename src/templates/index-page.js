import React, { useState, useLayoutEffect } from "react";
import { graphql } from "gatsby";

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Logos from '../components/Logos';
import Blogs from "../components/Blogs";

export function IndexPageTemplate({ winSize, intro, hero, posts }) {
         // console.log(logos);
         return (
           <>
             <Hero hero={hero} />
             <Intro intro={intro} />
             <Logos winSize={winSize} />
             <Blogs winSize={winSize} posts={posts} />
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

  const {
    edges
  } = data.allMarkdownRemark;
  const posts = edges.filter(edge => !!edge.node.frontmatter.date);


  return (
    <Layout winSize={size} title={title}>
      <IndexPageTemplate
        winSize={size}
        hero={hero}
        intro={intro}
        posts={posts}
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

           allMarkdownRemark(
             sort: { fields: [frontmatter___date], order: DESC }
           ) {
             edges {
               node {
                 excerpt(pruneLength: 50)
                 fields {
                   slug
                 }
                 frontmatter {
                   date(formatString: "DD MMMM, YYYY")
                   title
                   featuredimage {
                     childImageSharp {
                       sizes(maxWidth: 830) {
                         ...GatsbyImageSharpSizes
                       }
                     }
                   }
                 }
               }
             }
           }
         }
       `;
   

      //  allMarkdownRemark(
      //        sort: { order: DESC, fields: [frontmatter___date] }
      //      ) {
      //        edges {
      //          node {
      //            id
      //            excerpt(pruneLength: 250)
      //            frontmatter {
      //              date(formatString: "MMMM DD, YYYY")
      //              path
      //              title
      //            }
      //          }
      //        }
      //      }
