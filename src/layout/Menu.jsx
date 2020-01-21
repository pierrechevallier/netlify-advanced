import React from 'react';
// MUI
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/Menu";
// Gatsby
import { Link } from "gatsby";
// Style
import classNames from "clsx";

/**
 * #MenuNavbar
 * Menu for the different parts of the application
 */
export default function MenuNavbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon className={"c-large-icon"}/>
        </Button>
        <Menu
            id="menu-of-navbar"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>
                <Link
                    to={"/statistics/"}
                    className={classNames("u-no-txt-deco", "u-no-text-transform", "o-fr-jc")}
                >
                    Statistics
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={"c-link-mobile"}>
                <Link
                    to={"/contact"}
                    className={classNames(
                        "u-no-txt-deco",
                        "u-no-text-transform",
                        "o-fr-jc",
                        "c-navbar-item"
                    )}
                >
                    Contact
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={"c-link-mobile"}>
                <Link
                    to={"/about"}
                    className={classNames(
                        "u-no-txt-deco",
                        "u-no-text-transform",
                        "o-fr-jc",
                        "c-navbar-item"
                    )}
                >
                    About
                </Link>
            </MenuItem>
        </Menu>
    </div>;
}