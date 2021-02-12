import React, { useState, useContext, useEffect } from "react";
import { navigate } from "gatsby";
import { Context } from "../../utils/context";
import PropTypes from "prop-types";

import firebase from "gatsby-plugin-firebase";

const View = ({ title, children }) => {
  const [context, setContext] = useContext(Context);
  const [placedata, setPlacedata] = useState(null);

  let output;

  useEffect(() => {
    //update the document with the place data if it exists
    if (context!=null) {
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
  });

  if (!placedata) {
    output = (
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    );
  } else {
    output = (
      <div>
        <h1>{placedata.place.name}</h1>
        <div className="address">
          <p>
            {" "}
            Info1
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
