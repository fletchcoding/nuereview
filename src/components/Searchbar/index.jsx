import React from "react";

import styles from "./searchbar.module.css";

const Searchbar = () => (
  <div className={styles.searchbarContainer}>
    <input
      type="text"
      placeholder="Search..."
      className={styles.textinput}
    />
  </div>
);

export default Searchbar;
