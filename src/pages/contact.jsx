import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import classNames from "clsx";

class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <div className={classNames("c-about", "t-bg-white","u-p-l-l", "u-p-r-l", "u-border-r-normal-black", "u-border-l-light-black")}>
          <Helmet title={`Contact`} />
          <About />
        </div>
      </Layout>
    );
  }
}

export default ContactPage;
