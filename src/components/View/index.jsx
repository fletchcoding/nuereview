import React from "react";
import PropTypes from "prop-types";
import styles from "./view.module.css";

const View = ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    <div>{children}</div>
  </div>
);

View.propTypes = {
  title: PropTypes.string.isRequired,
};

export default View;
