import React from "react";
import { Link } from "gatsby";
import classNames from "clsx";
import NavigateNext from "@material-ui/icons/NavigateNext";

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
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div
        className={classNames(
          "o-fc-aic",
          "c-list_articles_site",
          "t-bg-white",
          "u-border-r-normal-black",
          "u-border-b-heavy-black",
          "u-border-l-light-black",
          "u-p-l-l",
          "u-p-r-l"
        )}
      >
        {
          postList.map(post => (
            <div className={classNames("c-list_articles_article-item", "o-flex-column", "u-p-m", "u-m-t-m", "u-m-b-m")}>
              <Link to={post.path} key={post.title} className={classNames("u-no-text-transform", "c-styled-link")}>
                <h2 className={"o-fr-aic"}><NavigateNext/>{post.title}</h2>
              </Link>
              <span>{post.excerpt}</span>
            </div>
          ))
        }
      </div>
    );
  }
}

export default PostListing;
