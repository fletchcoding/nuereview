import React, { useState } from "react"
import AttributeInput from "../AttributeInput"
import DatePicker from "react-date-picker"
import View from "../View"
import styles from "./placereview.module.css"

const FEEDBACKS = [
  "atmosphere",
  "cleanliness",
  "decor",
  "drink",
  "entertainment",
  "food",
  "service",
  "speed",
  "value",
  "variety",
];

const PlaceReview = ({placeId, placeName}) => {
  const [date, setDate] = useState(new Date());
  const [atmosphere, setAtmosphere] = useState(null);
  const [cleanliness, setCleanliness] = useState(null);
  const [drink, setDrink] = useState(null);
  const [entertainment, setEntertainment] = useState(null);
  const [food, setFood] = useState(null);
  const [service, setService] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [value, setValue] = useState(null);
  const [variety, setVariety] = useState(null);

  return (
    <View title={placeName}>
      <div className={styles.formContainer}>
        <div className={styles.formAttributeBtns}>
          <AttributeInput
            attribute="atmosphere"
            feedback={atmosphere}
            setFeedback={setAtmosphere}
          />
          <AttributeInput
            attribute="cleanliness"
            feedback={cleanliness}
            setFeedback={setCleanliness}
          />
          <AttributeInput
            attribute="drink"
            feedback={drink}
            setFeedback={setDrink}
          />
          <AttributeInput
            attribute="entertainment"
            feedback={entertainment}
            setFeedback={setEntertainment}
          />
          <AttributeInput
            attribute="food"
            feedback={food}
            setFeedback={setFood}
          />
          <AttributeInput
            attribute="service"
            feedback={service}
            setFeedback={setService}
          />
          <AttributeInput
            attribute="speed"
            feedback={speed}
            setFeedback={setSpeed}
          />
          <AttributeInput
            attribute="value"
            feedback={value}
            setFeedback={setValue}
          />
          <AttributeInput
            attribute="variety"
            feedback={variety}
            setFeedback={setVariety}
          />
        </div>
        <div className={styles.seperator}></div>
        <div className={styles.formSubmitBtns}>
          <DatePicker onChange={setDate} value={date} />
          <input type="button" value="Submit review" />
        </div>
      </div>
    </View>
  );
};

export default PlaceReview;
