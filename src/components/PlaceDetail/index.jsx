import React from "react";

import styles from "./placedetail.module.css";

const PlaceDetail = ({ placeId, placeData }) => {
  return (
    <section className={styles.content}>
      <div className={styles.header}>
        <div className={styles.details}>
          <h1>{placeData.name}</h1>
          <p>
            {placeData.address.street}
            <br />
            {placeData.address.suburb}, {placeData.address.state}{" "}
            {placeData.address.postcode}
          </p>
        </div>
        <div className={styles.review}>
          <input className={styles.reviewBtn} type="button" value="Review Button" />
        </div>
      </div>
    </section>
  );
};

export default PlaceDetail;
