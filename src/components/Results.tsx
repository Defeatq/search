import { useLocation } from "react-router-dom";

import All from "./pages/All";
import Images from "./pages/Images";
import News from "./pages/News";
import Videos from "./pages/Videos";


function Results() {
  const locations = useLocation();

  switch (locations.pathname) {
    case '/search':
      return (
        <All />
      )
    case '/news':
      return (
        <News />
      )
    case '/images':
      return (
        <Images />
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
