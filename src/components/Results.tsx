import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../assets/contexts/RequestResultsContextProvider";

import All from "./pages/All";
import Images from "./pages/Images";
import News from "./pages/News";
import Videos from "./pages/Videos";

function Results() {
  const locations = useLocation();
  const context = useResultContext();

  const path = locations.pathname;

  useEffect(() => {
    context?.fetchResults(path);
  }, [path]);

  switch (path) {
    case '/search':
      return (
        <All results={ context?.results } />
      )
    case '/news':
      return (
        <News results={ null } />
      )
    case '/images':
      return (
        <Images results={ null } />
      )
    case '/videos':
      return (
        <Videos />
      )
    default:
      return (
        <div>
          Unknown
        </div>  
      )
  }
}

export default Results;
