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
    <div className={classNames("c-navbar", "u-border-b-double", "t-bg-white", "o-fr-jc", "o-fr-aic", "u-z-1")}>
        <Link to={"/"} className={classNames("u-no-txt-deco", "u-no-text-transform", "u-m-r-l")}>
            <img className={"c-title-site"} src={"/logos/title.png"} alt={title}/>
            <img className={"c-title-site-mobile"} src={"/logos/logo.png"} alt={title}/>
        </Link>
        <Link
            to={"/about"}
            className={classNames("u-no-txt-deco", "u-no-text-transform", "t-hover-grey", "o-fr-jc", "c-navbar-item")}
        >
            <h2>{"About"}</h2>
        </Link>
        <Link
            to={"/contact"}
            className={classNames("u-no-txt-deco", "u-no-text-transform", "t-hover-grey", "o-fr-jc", "c-navbar-item")}
        >
            <h2>{"Contact"}</h2>
        </Link>
    </div>
)
export default Navbar;