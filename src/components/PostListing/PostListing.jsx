import React from "react";
import { Link } from "gatsby";
import classNames from "clsx";
import NavigateNext from "@material-ui/icons/NavigateNext";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

/**
 * #PostListing
 * _React component for the list of posts on the homepage of the blog section_
 */
class PostListing extends React.Component {
	getPostList() {
		const postList = [];
		this.props.postEdges.forEach(postEdge => {
			postList.push({
				path: postEdge.node.fields.slug,
				tags: postEdge.node.frontmatter.tags,
				cover: postEdge.node.frontmatter.cover,
				title: postEdge.node.frontmatter.title,
				author: postEdge.node.frontmatter.author,
				date: new Date(postEdge.node.fields.date),
				excerpt: postEdge.node.excerpt,
				timeToRead: postEdge.node.timeToRead
			});
		});
		return postList;
	}
	render() {
		const postList = this.getPostList();
		return <div className={classNames("c-post-list", "u-height-hundred")}>
			{postList.map(post => (
				<div className={classNames("c-list_articles_article-item", "u-border-light-grey", "o-flex-column", "u-m-t-m", "u-m-b-m")}>
					<Link to={post.path} key={post.title} className={classNames("u-no-text-transform", "c-styled-link")}>
						<h2 className={classNames("o-fr-aic")}><NavigateNext/>{post.title}</h2>
					</Link>
					<div className={classNames("u-m-b-m", "o-flex-row")}>
						<span className={classNames("t-text-darkgrey")}>
							{`${MONTHS[post.date.getMonth()]} ${post.date.getDate()} - ${post.author}`}
						</span>
					</div>
					<div className={classNames("u-m-b-m", "c-article-cover-excerpt")}>
						<div className={"c-article-caption-container", "o-fc-jc"}>
							<img src={post.cover} className={"c-article-caption"}/>
						</div>
						<p className={classNames("c-article-excerpt")}>{post.excerpt}</p>
					</div>
				</div>
			))}
		</div>;
	}
}

export default PostListing;
