import React, { Component } from "react";
import classNames from "clsx";
import FormComponent from "./Form";

/**
 * #Contact
 * Contact component
 */
class Contact extends Component {
  render() {
    return (
      <div className={classNames("c-about", "o-fc-aic")}>
        <h1>
          Contact me
        </h1>
        <FormComponent/>
      </div>
    );
  }
}

export default Contact;
