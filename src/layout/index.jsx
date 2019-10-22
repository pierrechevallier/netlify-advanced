import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Navbar from "./NavBar";
import classNames from "clsx";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="c-center-panel_height">
        <Navbar title={config.siteTitle}/>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <div className={classNames("c-content_site", "o-fc-aic", "t-dotted-bg")}>
          {children}
        </div>
      </div>
    );
  }
}
