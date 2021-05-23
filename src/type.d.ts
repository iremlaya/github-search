interface IData {
  id: number;
  fullName: string;
  description: string;
  url: string;
}
interface IResults {
  data: IData[];
  count: number;
}
type ContextType = {
  loading: boolean;
  setLoading: (boolean) => void;
  results: IResults;
  setResults: (results: IResults) => void;
  page: number;
  setPage: (number) => void;
};
