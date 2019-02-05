import React from "react";
import Layout from "../components/layout";
import "./blog-post.css";

import { graphql } from "gatsby";
function BlogPost(props) {
  const post = props.data.markdownRemark;
  const { title, date, author } = post.frontmatter;
  
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div id="author">Av {author}</div>
        <div id="date">{date}</div>
        
        
        <div dangerouslySetInnerHTML={{ __html: post.html }}/>
      </div>
    </Layout>
  );
}

export default BlogPost;
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM Do YYYY")
        author
        
      }
    }
  }
`;
