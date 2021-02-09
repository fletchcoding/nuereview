import React, { useState } from "react";
import { Context } from "../../utils/context";
import { Helmet } from "react-helmet";
import Header from "../Header";
import Navbar from "../Navbar";
import Searchbar from "../Searchbar";

// Global styles and component-specific styles.
import "./global.css";
import styles from "./main.module.css";

const Layout = ({ children }) => {
  const [context, setContext] = useState(null);

  return (
    <div>
      <Helmet title="NueReview" />
      <main className={styles.page}>
        <Context.Provider value={[context, setContext]}>
          <Navbar />
          <Header />
          <Searchbar />
          <br />
          {children}
        </Context.Provider>
      </main>
    </div>
  );
};

export default Layout;
