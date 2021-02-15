import React, { useContext, useState } from "react";
// import { Context } from "../../utils/context";
import { SearchContext } from "../Contexts/search-context";
import styles from "./searchbar.module.css";



const Searchbar = () => {
  // const [context, setContext] = useContext(Context);
  const [searchQuery, setSearchQuery] = useState("");
  const searchContext = useContext(SearchContext);

  const searchQueryHandler = () => {
    searchContext.searchHandler(searchQuery);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchQueryHandler();
      // var findAPlace = firebase.functions().httpsCallable("findAPlace");
      // findAPlace({ placequery: event.target.value }).then((result) => {
      //   console.log(result.data);
      //   setContext(result.data);
      // });
      // event.target.value = "";
    }
  };

  // return (
  //   <div className={styles.searchbarContainer}>
  //     <input
  //       type="text"
  //       placeholder="Search..."
  //       className={styles.textinput}
  //       onKeyDown={handleKeyDown}
  //     />
  //   </div>
  // );
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
