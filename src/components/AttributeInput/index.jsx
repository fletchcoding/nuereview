import React from "react";
import { MdThumbDown, MdThumbUp } from "react-icons/md";

import styles from "./attributeinput.module.css";

const AttributeInput = ({ attribute, feedback, setFeedback }) => {
  const rateDown = () => {
    if (!feedback || feedback === "good") {
      setFeedback("poor");
    } else {
      setFeedback("");
    }
  };

  const rateUp = () => {
    if (!feedback || feedback === "poor") {
      setFeedback("good");
    } else {
      setFeedback("");
    }
  };

  return (
    <div className={styles.seperator}>
      <div className={styles.container}>
        <div
          className={
            feedback === "poor"
              ? styles.poorBtnSelected
              : styles.poorBtnUnselected
          }
          onClick={rateDown}
        >
          <MdThumbDown />
        </div>
        <div className={styles.attributeNameDiv}>
          <h4 className={styles.attributeText}>{attribute}</h4>
        </div>
        <div
          className={
            feedback === "good"
              ? styles.goodBtnSelected
              : styles.goodBtnUnselected
          }
          onClick={rateUp}
        >
          <MdThumbUp />
        </div>
      </div>
    </div>
  );
};

export default AttributeInput;
