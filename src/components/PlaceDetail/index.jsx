import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import PlaceReview from "../PlaceReview"
import View from "../View"

import styles from "./placedetail.module.css";

const PlaceDetail = ({ placeId, placeData }) => {
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

  return (
    <View>
      <div className={styles.header}>
        <div className={styles.name}>
          <h1 className={styles.nametext}>{placeData.name}</h1>
        </div>
        <div className={styles.review}>
          <Link to="/app/placereview"
            state={{ placeId: placeId, placeName:placeData.name}}>
            <input
              className={styles.reviewBtn}
              type="button"
              value="Leave a review"
            />
          </Link>
        </div>
      </div>
      {details}
    </View>
  );
};

export default PlaceDetail;
