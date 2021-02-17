import React from "react";
import PropTypes from "prop-types";
import styles from "./view.module.css";

const View = ({ title, children }) => {
  return (
    <div className={styles.view}>
      {title ? <h1>{title}</h1> : null}
      {children}
    </div>
  );
};


export default View;
