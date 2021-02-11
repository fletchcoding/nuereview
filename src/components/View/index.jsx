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
          setPlacedata({ place: doc.data() });
          setContext(null);
        });
    }

    if (placedata != null) {
      console.log(placedata.place);
      setPlacedata(null);
    }
  });

  let output;
  if (!placedata) {
    output = (
      <div>
        <h1>{title}</h1>
        {children}
        <p>Awaiting search</p>
      </div>
    );
  } else {
    output = (
      <div>
        <h1>Place name</h1>
        <div className="address">
          <p> Info1
            <br />
            Info 2
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
