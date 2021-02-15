import React, { useState } from "react";
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
      <div>Scorecare here</div>
    </div>
  );

  const [content, setContent] = useState(details);

  return (
    <section className={styles.content}>
      <div className={styles.header}>
        <div className={styles.name}>
          <h1 className={styles.nametext} onClick={() => setContent(details)}>{placeData.name}</h1>
        </div>
        <div className={styles.review}>
          <input
            className={styles.reviewBtn}
            type="button"
            value="Review Button"
            onClick={() => setContent(<PlaceReview />)}
          />
        </div>
      </div>
      {content}
    </section>
  );
};

export default PlaceDetail;
