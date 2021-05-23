import React from "react";
import { Divider } from "@material-ui/core";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

interface ResultItemProps {
  id?: number;
  avatar?: string; //url or component
  fullName: string;
  description: string;
  url: string;
}

const ResultItem = (props: ResultItemProps): JSX.Element => {
  //fetch if avatar url
  const classes = useStyles();
  return (
    <>
      <div className={classes.itemContainer}>
        <div>{props?.avatar}</div>
        <div className={classes.itemTextContainer}>
          <div>
            <a className={classes.link} href={props?.url} target="_blank" rel="noreferrer">
              {props?.fullName}
            </a>
          </div>
          <div>{props?.description}</div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default ResultItem;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemContainer: {
      display: "flex",
      height: "95px",
      marginTop: "24px",
      marginBottom: "24px",
    },
    itemTextContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingLeft: "60px",
    },
    link: {
      textDecoration: "none",
      color: "#375f9d",
      fontSize: "20px",
    },
  }),
);
