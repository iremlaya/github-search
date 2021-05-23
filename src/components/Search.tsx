import React, { useState, useEffect, useContext } from "react";
import "../styles/Search.css";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../context/appContext";
import { useHistory } from "react-router-dom";

const Search = (): JSX.Element => {
  const history = useHistory();
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const { setResults, setLoading, page } = useContext(AppContext) as ContextType;

  useEffect(() => {
    if (query === "") {
      setResults({ count: 0, data: [] });
    }
    //TODO :: Seperate search logic to decouple Search.tsx component. Create seperate file
    //that contains api calls.
    //useReducer hook to dispatch them.
    const { cancel, token } = axios.CancelToken.source();
    async function fetchHits(query: any, cancelToken: any) {
      try {
        setLoading(true);
        const result = await axios(` https://api.github.com/search/repositories?q=${query}&page=${page}`, {
          cancelToken,
        });
        const data = result.data.items.map(
          (item: { id: number; full_name: string; description: string; html_url: string }) => ({
            id: item.id,
            fullName: item.full_name,
            description: item.description,
            url: item.html_url,
          }),
        );
        setResults({ count: result.data.total_count, data });
        setLoading(false);
        history.push("/results");
      } catch (err) {
        setLoading(false);
        console.error(err);
        axios.isCancel(err);
      }
    }
    const timeOutId = setTimeout(() => fetchHits(query, token), 500);
    setLoading(false);
    return () => {
      setLoading(false);
      clearTimeout(timeOutId);
      cancel();
    };
  }, [query, page]);

  return (
    <div className="search">
      <div className="search-icon">
        <SearchIcon />
      </div>
      <InputBase
        classes={{
          root: classes.root,
          input: classes.input,
        }}
        className="input"
        placeholder="Search…"
        onChange={(e) => setQuery(e.target.value)}
        inputProps={{ "aria-label": "search", "font-color": "#b8cae5" }}
      />
    </div>
  );
};

export default Search;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "inherit",
    },
    input: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "12px",
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }),
);
