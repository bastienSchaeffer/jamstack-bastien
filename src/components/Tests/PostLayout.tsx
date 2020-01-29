import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout/layout';
import { Link } from '../Link';

export default class PostLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { prev, next } = this.props.pageContext;
    const { location } = this.props;
    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />

        {prev && (
          <Link to={`/posts${prev.frontmatter.slug}`} type="button">
            Previous
          </Link>
        )}
        {next && (
          <Link to={`/posts${next.frontmatter.slug}`} type="button">
            Next
          </Link>
        )}
      </Layout>
    );
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;
