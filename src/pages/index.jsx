import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import ReadingList from "../components/ReadingList/ReadingList";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import classNames from "clsx";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <div
			  className={classNames(
            "c-homepage-layout",
            "o-fc-aic",
            "c-list_articles_site",
            "t-bg-white",
            "u-border-r-normal-black",
            "u-border-b-heavy-black",
            "u-border-l-light-black",
            "u-p-l",
            "u-m-b-m"
          )}
        >
          <PostListing postEdges={postEdges} />
          <ReadingList/>
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10, sort: {fields: fields___date, order: DESC}) {
      edges {
        node {
          fields {
            slug
            date
          }
          frontmatter {
            category
            cover
            layout
            rating
            tags
            title
            author
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;
