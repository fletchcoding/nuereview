import React, { useState, useContext, useEffect } from "react";
import { navigate } from "gatsby";
import { Context } from "../../utils/context";
import PropTypes from "prop-types";

import styles from "./view.module.css";

import firebase from "gatsby-plugin-firebase";

const View = ({ title, children }) => {
  const [context, setContext] = useContext(Context);
  const [placedata, setPlacedata] = useState(null);

  let output;

  useEffect(() => {
    //update the document with the place data if it exists
    if (!context) {
      setPlacedata(null);
    } else {
      firebase
        .firestore()
        .collection("places")
        .doc(context)
        .get()
        .then((doc) => {
          setPlacedata({ place: doc.data() });
        });
    }
  });

  if (!placedata) {
    output = (
      <div className={styles.view}>
        <h1>{title}</h1>
        {children}
      </div>
    );
  } else {
    output = (
      <div className={styles.placeHeader}>
        <h1>{placedata.place.name}</h1>
        <div>
          <p>
            {placedata.place.address.street}
            <br />
            {placedata.place.address.suburb}, {placedata.place.address.state}{" "}
            {placedata.place.address.postcode}
          </p>
        </div>
        <br />
      </div>
    );
  }

  return output;
};

View.propTypes = {
  title: PropTypes.string.isRequired,
};

export default View;
