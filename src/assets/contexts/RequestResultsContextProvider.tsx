import { Children, createContext, ReactNode, useState } from "react";

interface ResultsContext {
  
}

type Props = {
  children: typeof Children | ReactNode,
}

const RequestResultsContext = createContext<ResultsContext | null>(null);

function RequestResultsContextProvider(props: Props) {
  const [results, setResults] = useState<null>(null);
  const [searchingValue, setSearchingValue] = useState<string | null>('');

  const getResults = (path: string) => {
    async () => {
      try {

      } catch(error) {
        console.log(error);
      }
    }
  } 

  return (
    <RequestResultsContext.Provider value={{}}>
      <>
      { props.children }
      </>
    </RequestResultsContext.Provider>
  )
}

export default RequestResultsContextProvider;
