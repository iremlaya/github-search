import React from "react";
import "../styles/Header.css";
import { Drawer, Toolbar, List, ListItemText, ListItem, Divider } from "@material-ui/core";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import InsertEmoticonOutlinedIcon from "@material-ui/icons/InsertEmoticonOutlined";

import { Link } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

interface SidebarProps {
  repoCount: number | null;
  userCount: number | null;
  bookmarkCount: number | null;
}
const Sidebar = ({ repoCount, userCount, bookmarkCount }: SidebarProps): JSX.Element => {
  const classes = useStyles();
  return (
    <Drawer
      className="drawer"
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <Link to="/results">
            <ListItem button key="Repositories">
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText primary="Repositories" />
              <ListItemText primary={repoCount} className={classes.listItemCount} />
            </ListItem>
          </Link>
          <ListItem button key="Users">
            <ListItemIcon>
              <InsertEmoticonOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
            <ListItemText primary={userCount} className={classes.listItemCount} />
          </ListItem>
          <ListItem button key="Bookmarked">
            <ListItemIcon>
              <BookmarkBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Bookmarked" />
            <ListItemText primary={bookmarkCount} className={classes.listItemCount} />
          </ListItem>
        </List>
        <Divider />
      </div>
    </Drawer>
  );
};

export default Sidebar;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: "360px",
      flexShrink: 0,
    },
    drawerPaper: {
      width: "360px",
    },
    drawerContainer: {
      overflow: "auto",
    },
    listItemCount: {
      textAlign: "end",
      marginRight: "4px",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);
