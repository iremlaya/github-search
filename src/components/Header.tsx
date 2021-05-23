import React from "react";
import "../styles/Header.css";
import HeaderLogo from "../assets/header-logo.svg";
import { AppBar, Toolbar } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Search from "./Search";

import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className="header-container">
      <header className="header-wrapper">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className="toolbar">
            <Link to="/">
              <span className="icon-wrapper">
                <img src={HeaderLogo} alt="" className="icon" />
              </span>
            </Link>
            <Search />
          </Toolbar>
        </AppBar>
      </header>
    </div>
  );
};

export default Header;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  }),
);
