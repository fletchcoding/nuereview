import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../utils/context";
import PropTypes from "prop-types";

import firebase from "gatsby-plugin-firebase";

const View = ({ title, children }) => {
  const [context, setContext] = useContext(Context);
  const [placedata, setPlacedata] = useState(null);

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
          const data = doc.data();
          setPlacedata({ place: data });
        });
    }
  });

  let output;
  if (!placedata) {
    output = (
      <div>
        <h1>{ title }</h1>
        { children }
        <p>Awaiting search</p>
      </div>
    );
  } else {
    output = (
      <div>
        <h1>{placedata.place.name}</h1>
        <div className="address">
          <p>
            {placedata.place.address.street} {placedata.place.address.suburb},
            <br />
            {placedata.place.address.state} {placedata.place.address.postcode}
          </p>
        </div>
      </div>
    );
  }

  return output;
};

View.propTypes = {
  title: PropTypes.string.isRequired,
};

export default View;
