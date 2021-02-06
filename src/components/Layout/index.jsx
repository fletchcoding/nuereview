import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Header";

// Global styles and component-specific styles.
import "./global.css";
import styles from "./main.module.css";

const Layout = ({ children }) => (
  <div>
    <Helmet title="NueReview" />
    <main className={styles.page}>
      <Header />
      {children}
    </main>
  </div>
);

export default Layout;
