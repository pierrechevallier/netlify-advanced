import React from "react";
import classNames from "clsx";
import { Link } from "gatsby";

/**
 * #Navbar
 * _Navbar for the site_
 * @param title: string, title of the website
 */
const Navbar = ({title}) => (
    <div className={classNames("c-navbar", "u-simple-shadow", "u-bg-white", "u-p-l-l", "o-fr-aic")}>
        <Link to={"/"} className={classNames("u-no-txt-deco", "u-no-text-transform")}>
            <h1>{title}</h1>
        </Link>
        <Link to={"/about"} className={classNames("u-no-txt-deco", "u-no-text-transform", "u-m-l-xl")}>
            <h2>{"About"}</h2>
        </Link>
    </div>
)
export default Navbar;