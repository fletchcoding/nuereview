import React, { useState, useEffect } from "react";
import PlaceReview from "../PlaceReview";

import styles from "./placedetail.module.css";

const PlaceDetail = ({ placeData }) => {
  const details = (
    <div>
      <div className={styles.address}>
        <p>
          {placeData.address.street}
          <br />
          {placeData.address.suburb}, {placeData.address.state}{" "}
          {placeData.address.postcode}
        </p>
      </div>
      <div>Scorecard here</div>
    </div>
  );

  const [content, setContent] = useState(details);
  const [reviewFlag, setReviewFlag] = useState(false);

  const reviewClick = function () {
    setContent(<PlaceReview />);
    setReviewFlag(true);
  };
  const nameClick = function () {
    setContent(details);
    setReviewFlag(false);
  };

  return (
    <section className={styles.content}>
      <div className={styles.header}>
        <div className={styles.name}>
          <h1 className={styles.nametext} onClick={() => nameClick()}>
            {placeData.name}
          </h1>
        </div>
        <div className={styles.review}>
          {!reviewFlag ? (
            <input
              className={styles.reviewBtn}
              type="button"
              value="Leave a review"
              onClick={() => reviewClick()}
            />
          ) : null}
        </div>
      </div>
      {content}
    </section>
  );
};

export default PlaceDetail;
