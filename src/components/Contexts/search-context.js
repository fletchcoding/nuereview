import React, { useState } from "react";

export const SearchContext = React.createContext({
  placequery: "",
  searchHandler: () => {},
});

const SearchContextProvider = (props) => {
  const [placequery, setQuery] = useState("");

  const searchHandler = (placequery) => {
    setQuery(placequery);
  };

  return (
    <SearchContext.Provider
      value={{ placequery: placequery, searchHandler: searchHandler }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
