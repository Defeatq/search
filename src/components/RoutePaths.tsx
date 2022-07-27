import { Navigate, Route, Routes } from "react-router-dom";
import Results from "./Results";

function RoutePaths() {
  return (
    <div>
      <Routes>
        <Route path="*" element={ 
          <Navigate to="/search" replace={ true }/>
         }/>
         <Route path="/" element={ 
          <Navigate to="/search" replace={ true }/>
         }/>
        <Route path="/">
          <Route path="search" element={ 
            <Results />
          }/>
          <Route path="news" element={ 
            <Results />
          }/>
          <Route path="images" element={ 
            <Results />
          }/>
          <Route path="videos" element={ 
            <Results />
          }/>
        </Route>
      </Routes>
    </div>
  )
}

export default RoutePaths;
