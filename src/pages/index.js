import React from "react";
import { Link, graphql } from "gatsby";
import "./postList.css";
import Layout from "../components/layout";
const IndexPage = props => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
      <div className="article-container">
        {postList.edges.map(({ node }, i) => (
          <Link to={node.fields.slug} className="link">
            <div className="post-list">
              <div className="date-author">
                <div>{node.frontmatter.author}</div>
                <span>{node.frontmatter.date}</span>
              </div>
              <h1>{node.frontmatter.title}</h1>
              <hr />

              <p>{node.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};
export default IndexPage;
export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do, YYYY")
            title
            author
          }
        }
      }
    }
  }
`;
