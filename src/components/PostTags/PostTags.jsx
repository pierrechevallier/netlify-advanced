import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import Button from '@material-ui/core/Button';
import classNames from "clsx";

/**
 * PostTags
 * _React component to display the list of tags of the post_
 */
class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="o-fr-jc">
        {tags &&
          tags.map(tag => (
            <Link
              className={classNames("u-m-s", "t-bg-purple")}
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <Button
                variant="contained"
                size="small"
                classes={
                  {
                    root : classNames("t-font-inherit", "u-no-text-transform"),
                    contained: classNames("u-no-shadow")
                  }
                }
                className={"u-border-double"}
              >
                {tag}
              </Button>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
