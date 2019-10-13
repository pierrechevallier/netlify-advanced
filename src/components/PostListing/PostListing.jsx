import React from "react";
import { Link } from "gatsby";
import classNames from "clsx";

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
      <div className={classNames("o-fc-aic")}>
        {
          postList.map(post => (
            <Link to={post.path} key={post.title} className={classNames("u-no-txt-deco", "u-no-text-transform")}>
              <h2>{post.title}</h2>
            </Link>
          ))
        }
      </div>
    );
  }
}

export default PostListing;
