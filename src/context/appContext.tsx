/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from "react";
import { AxiosResponse } from "axios";

const contextDefaultValues: ContextType = {
  loading: false,
  page: 1,
  results: {
    count: 0,
    data: [],
  },
  setResults: ({}) => {},
  setLoading: ({}) => {},
  setPage: ({}) => {},
};
export const AppContext = React.createContext<ContextType>(contextDefaultValues);

interface IProps {
  children: JSX.Element;
}
const AppProvider = ({ children }: IProps): JSX.Element => {
  const [results, setResults] = React.useState(contextDefaultValues.results);
  const [loading, setLoading] = React.useState(contextDefaultValues.loading);
  const [page, setPage] = React.useState(contextDefaultValues.page);
  return (
    <AppContext.Provider value={{ results, setResults, loading, setLoading, page, setPage }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
