import React, { useState, useContext, useEffect } from "react";
import Context from "../../utils/context";
import Searchbar from "../Searchbar";
import { SearchContext } from "../Contexts/search-context";

import firebase from "gatsby-plugin-firebase";

const Body = ({ children }) => {
  const [placeId, setPlaceId] = useState(null);
  const [placeData, setPlaceData] = useState(null);
  const [placeOutput, setPlaceOutput] = useState(children);
  const searchContext = useContext(SearchContext);

  // context hook for posting search query
  useEffect(() => {
    if (searchContext.placequery != "") {
      setPlaceOutput(<div>Loading place data ...</div>)
      var findAPlace = firebase.functions().httpsCallable("findAPlace");
      findAPlace(searchContext).then((result) => setPlaceId(result.data));
    }
  }, [searchContext]);

  // placeID hook for firebase get document
  useEffect(() => {
    if (placeId) {
      console.log(placeId);
      firebase
        .firestore()
        .collection("places")
        .doc(placeId)
        .get()
        .then((doc) => {
          setPlaceData(doc.data());
        });
    }
  }, [placeId]);

  // placeData hook for setting output state
  useEffect(() => {
    if (placeData) {
      console.log(placeData);
      setPlaceOutput(
        <div>
          <h1>{placeData.name}</h1>
          <p>
            {placeData.address.street}
            <br />
            {placeData.address.suburb}, {placeData.address.state}{" "}
            {placeData.address.postcode}
          </p>
        </div>
      );
    }
  }, [placeData]);

  return (
    <div>
      <Searchbar />
      {placeOutput}
    </div>
  );

};

export default Body;
