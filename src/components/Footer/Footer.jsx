import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import classNames from "clsx";

class Footer extends Component {
	render() {
		const { copyright } = config;
		if (!copyright) {
			return null;
		}
		return <footer className={classNames("o-fr-jsb", "u-p-m", "u-border-t-double", "o-aic")}>
			<span>{copyright}</span>
			<div className={classNames("o-fr-aic")}>
				<span>{"Check my GitHub repo "}</span>
				<a href={"https://github.com/pierrechevallier/"}>
					<img className={classNames("c-3rd-party-logo-height", "u-m-l-m")}
						src={"/images/github.png"}
						alt={"git logo"}
					/>
				</a>
			</div>
		</footer>;
	}
}

export default Footer;