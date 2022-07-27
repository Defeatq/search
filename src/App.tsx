import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Results from "./components/Results";
import RoutePaths from "./components/Router";

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  return (
    <div className={ darkTheme ? 'dark' : '' }>
      <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen">
        <Header darkTheme={ darkTheme } setDarkTheme={ setDarkTheme } />
        <RoutePaths />
        <Footer />
      </div>
    </div>
  )
}

export default App;
