import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Header";
import Navbar from "../Navbar";
import Body from "../Body";

import SearchContextProvider from "../Contexts/search-context";

// Global styles and component-specific styles.
import "./global.css";
import styles from "./main.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet title="NueReview" />
      <main className={styles.page}>
        <SearchContextProvider>
          <Navbar />
          <Header />
          <Body>{children}</Body>
        </SearchContextProvider>
      </main>
    </div>
  );
};

export default Layout;
