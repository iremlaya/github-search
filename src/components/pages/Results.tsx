import React from "react";
import { AppContext } from "../../context/appContext";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ResultItem from "./ResultItem";
import Drawer from "../Drawer";

const Results = (): JSX.Element => {
  const classes = useStyles();
  const { results, loading, setPage, page } = React.useContext(AppContext) as ContextType;

  return (
    <div>
      <Drawer repoCount={results.count} bookmarkCount={0} userCount={0} />
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className={classes.headerContainer}>
            <p className={classes.resLen}>{results.count} Repository Results</p>
            <p>page {page}</p>
          </div>
          <div>
            {results?.data.map((item) => (
              <ResultItem
                key={item.id}
                fullName={item.fullName}
                description={item.description}
                url={item.url}
              />
            ))}
          </div>
          <div className={classes.paginationContainer}>
            {page !== 1 && (
              <p className={classes.pagination} onClick={() => setPage((page: number) => page - 1)}>
                Prev
              </p>
            )}
            {page !== results.count / 30 && results.count > 30 && (
              <p className={classes.pagination} onClick={() => setPage((page: number) => page + 1)}>
                Next
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Results;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      backgroundColor: "red",
    },
    paginationContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "15px",
    },
    headerContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginRight: "15px",
    },
    pagination: {
      cursor: "pointer",
    },
    resLen: {
      fontSize: "24px",
      textAlign: "left",
      marginLeft: "60px",
      marginTop: "30px",
    },
  }),
);
