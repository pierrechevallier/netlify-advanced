import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import StatsAnalysis from "../components/StatsAnalysis/StatsAnalysis";
import config from "../../data/SiteConfig";
import classNames from "clsx";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className={classNames(
			"c-about",
			"t-bg-white",
			"u-p-l-l",
			"u-p-r-l",
			"u-border-b-heavy-black",
			"u-border-r-normal-black",
			"u-border-l-light-black",
			"u-m-b-m"
		)}>
			<Helmet title={`Stats Recap | ${config.siteTitle}`} />
			<StatsAnalysis />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
