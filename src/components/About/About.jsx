import React, { Component } from "react";
import classNames from "clsx";

class About extends Component {
  render() {
    const technologies = [
      "Python",
      "R",
      "SQL",
      "PL/SQL",
      "VBA",
      "C#"
    ]
    return (
      <div className={classNames("c-about", "o-fc-aic")}>
        <h1>
          This is the blog of Pierre Chevallier, data analyst and web developper.
        </h1>
        <h2>I have experience with the following technologies :</h2>
        <ul>
          {technologies.map(techno => {
            return <li key={techno}>{techno}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default About;
