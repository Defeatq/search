import { ChangeEvent, useEffect } from "react";
import { useResultContext } from "../assets/contexts/RequestResultsContextProvider";

function Search() {
  const context = useResultContext();

  const searchingValue = context?.searchingValue;
  const setSearchingValue = context?.setSearchingValue;

  useEffect(() => {
    console.log(searchingValue)
  }, [searchingValue])

  return (
    <form className="-mt-10">
      <input 
        value={ searchingValue }
        onChange={ setSearchingValue ? 
                  (event: ChangeEvent<HTMLInputElement>) => setSearchingValue(event.target.value) : 
                  undefined } 
        className="w-96 h-12 px-6 dark:text-gray-800 bg-gray-100 rounded-full dark:border-0 border border-gray-300"
      />
    </form>
  )
}

export default Search;
