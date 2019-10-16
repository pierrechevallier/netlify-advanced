import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Navbar from "./NavBar";
import classNames from "clsx";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Navbar title={config.siteTitle}/>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
		<div className={classNames("u-p-l")}>
			{children}
		</div>
      </div>
    );
  }
}
