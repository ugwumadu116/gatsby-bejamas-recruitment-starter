import React from 'react';
import Blog from './Blog';
import styled from "styled-components";



const Blogs = ({ winSize, posts }) => {
    const BlogContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      button {
        background: white;
        border: 1px solid #3d86bf;
        border-radius: 32px;
        color: #4285bc;
        height: 38px;
        width: 140px;
        font-weight: bold;
        margin-top: 58px;
        cursor: pointer;
        &:hover {
          color: #ffffff;
          background: #4285bc;
        }
      }
    `;

  const BlogWrapper = styled(BlogContainer)`
    flex-direction: row;
    flex-flow: row wrap;
  `;
  const blogPost = winSize < 768 ? [...posts.slice(0, 2)] : [...posts.slice(0,4)];
  return (
    <BlogContainer>
      <BlogWrapper>
        {blogPost.map((item, i) => (
          <div key={i}>
            <Blog
              imgUrl={item.node.frontmatter.featuredimage.childImageSharp.sizes}
              title={item.node.frontmatter.title}
              content={item.node.excerpt}
            />
          </div>
        ))}
      </BlogWrapper>
          <button>Read more</button>
    </BlogContainer>
  );
};
 
export default Blogs;
