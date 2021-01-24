import React, { Component } from "react";
import classNames from "clsx";
import { Link } from "gatsby";

class About extends Component {
  render() {
    const technologies = [
      {name: "Python", type: "Programming"},
      {name: "R", type: "Programming"},
      {name: "VBA", type: "Programming"},
      {name: "JavaScript", type: "Programming"},
      {name: "C#", type: "Programming"},
      {name: "PL/SQL", type: "Database"},
      {name: "SQL", type: "Database"},
    ]
    return (
      <div className={classNames("c-about", "o-fc-aic", "u-m-b-m")}>
        <h3 className="t-text-centered">
          Hello! I'm Pierre Chevallier
        </h3>
		    <span className={classNames("t-text-centered", "u-m-b-m")}>I'm a data scientist and web developer.</span>
		    <img src={"/images/picture-pierre.jpg"} alt={"Picture of Pierre Chevallier"} className={"c-round-image"}/>
        <h2 className="t-text-centered">I have experience with the following technologies</h2>
        <table className={"c-table-info"}>
          <tr className={"c-table-head"}>
            <th>Technology</th>
            <th>Type</th>
          </tr>
          {technologies.map(techno => (
            <tr key={techno.name}>
              <td>{techno.name}</td>
              <td>{techno.type}</td>
            </tr>
          ))}
        </table>
        <article>
          <p>I am currently working as a Senior Data Scientist and build new tools within an awesome team.</p>
          <p>One thing that I enjoy and I hope you too, is documenting things and making sure everyone can use them afterwards.</p>
          <p>Over the past few years I designed a BI application in Python and React from scratch. In my free time I design websites and do some web development, as well as some data analysis.</p>
          <p>If you wish, feel free to reach me on <a href={"https://www.linkedin.com/in/pierrechevallier/"}>LinkedIn</a> or on the <Link to={"/contact"}>contact form</Link> of this site.</p> 	
        </article>
      </div>
    );
  }
}

export default About;
