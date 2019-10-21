import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import classNames from "clsx";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className={classNames("c-about", "t-bg-white","u-p-l-l", "u-p-r-l", "u-simple-shadow")}>
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
