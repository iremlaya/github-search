import React from "react";
import SearchLogo from "../../assets/screen_search_desktop.svg";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const Header = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className="icon-wrapper">
        <img src={SearchLogo} alt="" className={classes.icon} />
      </span>
      <p className={classes.text}>Search results will appear here</p>
    </div>
  );
};

export default Header;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      width: "86px",
      height: "86px",
    },
    container: {
      position: "fixed",
      top: "30%",
      left: "45%",
    },
    text: {
      color: "#85b0f2",
      fontSize: "24px",
    },
  }),
);
