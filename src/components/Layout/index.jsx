import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Header";
import Navbar from "../Navbar";
import Searchbar from "../Searchbar";


// Global styles and component-specific styles.
import "./global.css";
import styles from "./main.module.css";

const Layout = ({ children }) => (
  <div>
    <Helmet title="NueReview" />
    <main className={styles.page}>
      <Navbar/>
      <Header />
      <Searchbar />
      {children}
    </main>

  </div>
);

export default Layout;
