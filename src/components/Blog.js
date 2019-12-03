import React from 'react';
import Img from "gatsby-image";
import styled from "styled-components";

const Blog = ({imgUrl, title, content }) => {
    const CardWrapper = styled.div`
      width: 300px;
      margin: 24px;
      &:hover {
        border: #f5f8fa 3px solid;
        box-shadow: 0 8px 6px -6px #f5f8fa;
      }
      img {
        width: 100%;
        height: 144px;
      }
      h1 {
        padding: 3px;
        height: 50px;
        margin-top: 21px;
        font-size: 20px;
        color: #394e5d;
        font-weight: 900;
        text-align: left;
      }
      p {
        color: #394e5d;
        font-size: 16px;
        padding: 3px;
        margin-top: 8px;
      }
    `;
  return (
    <CardWrapper>
      <Img sizes={imgUrl} />
      <h1>{title}</h1>
      <p>{content}</p>
    </CardWrapper>
  );
};
 
export default Blog;
