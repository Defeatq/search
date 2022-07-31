import { 
  Children, 
  createContext, 
  ReactNode, 
  useContext, 
  useState 
} from "react";

import options from "../options";
import URLS from "../URLS";

interface ResultsContext {
  fetchResults: (path: string) => void,
  results: {} | null,
  searchingValue: string,
  setSearchingValue: (searchingValue: string) => void,
}

type Props = {
  children: typeof Children | ReactNode,
}

const RequestResultsContext = createContext<ResultsContext | null>(null);

function RequestResultsContextProvider(props: Props) {
  const [results, setResults] = useState<{} | null>(null);
  const [searchingValue, setSearchingValue] = useState<string>('');

  const fetchResults = async (path: string) => {
    try {
      const response = await fetch(`${ URLS.GOOGLE_SEARCH }${ path }/q=elon+musk`, options);
      const json = await response.json();

      setResults(json);
    } catch(error) {
      console.log(error);
    }
  } 

  return (
    <RequestResultsContext.Provider value={{ fetchResults, results, searchingValue, setSearchingValue }}>
      <>
      { props.children }
      </>
    </RequestResultsContext.Provider>
  )
}

export default RequestResultsContextProvider;

export const useResultContext = () => useContext(RequestResultsContext);
