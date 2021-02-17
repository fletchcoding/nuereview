import React, { useContext, useState, useEffect } from "react";
import { SearchContext } from "../Contexts/search-context";
import styles from "./searchbar.module.css";



const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchContext = useContext(SearchContext);

  const searchQueryHandler = () => {
    searchContext.searchHandler(searchQuery);
  };


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchQueryHandler();
    }
  };

  useEffect(() => {
    if (searchContext.placequery == "") {
      setSearchQuery("");
    }
  }, [searchContext]);

  return (
    <div className={styles.searchbarContainer}>
      <input
        placeholder="Search..."
        type="text"
        className={styles.textinput}
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
export default Searchbar;
