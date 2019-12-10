import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import classNames from "clsx";
import { execute, makePromise } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

// D3 imports
//import d3 from "d3";

/**
 * #PostTemplate
 * This component is a post template for posts with charts integrated
 */
export default class PostTemplate extends React.Component {
	render() {
		const { data, pageContext } = this.props;
		const { slug } = pageContext;
		const postNode = data.markdownRemark;
		const post = postNode.frontmatter;
		if (!post.id) {
			post.id = slug;
		}
		if (!post.category_id) {
			post.category_id = config.postDefaultCategoryID;
		}
		const uri = 'http://api.githunt.com/graphql';
		const link = new HttpLink({ uri });

		const operation = {
			query: gql`query { hello }`
		};
		// For single execution operations, a Promise can be used
		makePromise(execute(link, operation))
			.then(data => console.log(`received data ${JSON.stringify(data, null, 2)}`))
			.catch(error => console.log(`received error ${error}`))
		return (
			<Layout>
				<Helmet>
					<title>{`${post.title} | ${config.siteTitle}`}</title>
				</Helmet>
				<SEO postPath={slug} postNode={postNode} postSEO />
				<div
					className={classNames(
						"o-fc-aic",
						"c-article_width",
						"t-bg-white",
						"u-border-r-normal-black",
						"u-border-l-light-black",
						"u-border-b-heavy-black",
						"u-m-b-l"
					)}
				>
					<div className={classNames("o-fc-aic","u-p-l", "u-width-hundred")}>
						<h2 className={classNames("u-m-l-m", "u-m-r-m", "t-text-centered")}>{post.title}</h2>
						<h3>Author: {post.author}</h3>
						<h2>This component will contain a chart</h2>
						<div className={classNames("o-fc-jc")}>
							<img src={post.cover} className={"c-article-cover"}/>
						</div>
						<div
							className={classNames("o-flex-column", "c-content_article")}
							dangerouslySetInnerHTML={{ __html: postNode.html }}
						/>
						<div>
							<PostTags tags={post.tags} />
							<SocialLinks postPath={slug} postNode={postNode} />
						</div>
						<UserInfo config={config} />
					</div>
				</div>
			</Layout>
		);
	}
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostByChart($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        author
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
