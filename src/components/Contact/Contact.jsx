import React, { Component } from "react";
import classNames from "clsx";
import FormComponent from "./Form";

class Contact extends Component {
  render() {
    return (
      <div className={classNames("c-about", "o-fc-aic")}>
        <h1>
          Contact us
        </h1>
        <FormComponent/>
      </div>
    );
  }
}

export default Contact;
