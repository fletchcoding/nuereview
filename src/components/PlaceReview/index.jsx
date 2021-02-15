import React, { useState } from "react";
import AttributeInput from "../AttributeInput";

import styles from "./placereview.module.css";

const PlaceReview = () => {
  const [food, setFood] = useState("");

  return (<div><AttributeInput attribute="Food" feedback={food} setFeedback={setFood} /></div>);
}

export default PlaceReview;
