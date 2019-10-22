import React from "react";
import classNames from "clsx";
import { Link } from "gatsby";

/**
 * #Navbar
 * _Navbar for the site_
 * <h1 className={"t-hovered-title"}>{title}</h1>
 * @param title: string, title of the website
 */
const Navbar = ({title}) => (
    <div className={classNames("c-navbar", "u-border-b-double", "t-bg-white", "o-fr-jc", "o-fr-aic")}>
        <Link to={"/"} className={classNames("u-no-txt-deco", "u-no-text-transform")}>
            <img className={"c-title-site"} src={"/logos/title.svg"} alt={title}/>
            <img className={"c-title-site-mobile"} src={"/logos/logo.png"} alt={title}/>
        </Link>
        <Link to={"/about"} className={classNames("u-no-txt-deco", "u-no-text-transform", "u-m-l-xl")}>
            <h2>{"About"}</h2>
        </Link>
    </div>
)
export default Navbar;