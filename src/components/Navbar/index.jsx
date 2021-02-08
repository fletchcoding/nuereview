import React from "react";

//Component specific styles
import styles from "./navbar.module.css"


const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.profile}>
      <h3 className={styles.tabtext}>Profile</h3>
    </div>
    <div className={styles.myplaces}>
      <h3 className={styles.tabtext}>My Places</h3>
    </div>
  </nav>
)


export default Navbar;
