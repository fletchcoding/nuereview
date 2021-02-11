import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../utils/context";
import styles from "./searchbar.module.css";

import firebase from "gatsby-plugin-firebase";

const Searchbar = () => {
  const [context, setContext] = useContext(Context);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      var findAPlace = firebase.functions().httpsCallable('findAPlace');
      findAPlace({placequery: event.target.value})
        .then((result) => {
          setContext(result.data);
        })
    }
  };

  return (
    <div className={styles.searchbarContainer}>
      <input
        type="text"
        placeholder="Search..."
        className={styles.textinput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
export default Searchbar;
