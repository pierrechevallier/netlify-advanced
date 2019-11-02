import React, { Component } from "react";
import classNames from "clsx";

class About extends Component {
  render() {
    const technologies = [
      {name: "Python", type: "Programming"},
      {name: "R", type: "Programming"},
	  {name: "VBA", type: "Programming"},
      {name: "C#", type: "Programming"},
	  {name: "PL/SQL", type: "Database"},
	  {name: "SQL", type: "Database"},
    ]
    return (
      <div className={classNames("c-about", "o-fc-aic", "u-m-b-m")}>
        <h1>
          Hello, I'm Pierre Chevallier, I'm a data analyst and web developper.
        </h1>
		<img src={"/images/picture-pierre.jpg"} alt={"Picture of Pierre Chevallier"} className={"c-round-image"}/>
        <h2>I have experience with the following technologies</h2>
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
          <p>Currently I am designing a BI application in Python and React, and in my free time I design websites and do some web developpment.</p>
          <p>If you wish to contact me for some projects that interest you, feel free to reach me on <a href={"https://www.linkedin.com/in/pierrechevallier/"} className={classNames("u-no-text-transform", "c-styled-link", "t-text-bold")}>LinkedIn</a> or on the contact form of this site.</p> 	
        </article>
      </div>
    );
  }
}

export default About;
