import React, { useState } from "react"
import { navigate } from "gatsby"
import AttributeInput from "../AttributeInput"
import DatePicker from "react-date-picker"
import { MdErrorOutline } from "react-icons/md"
import View from "../View"
import { getUser } from "../../utils/auth"
import firebase from "gatsby-plugin-firebase"
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

const ERRORS = {
  LT: "Please rate at least, 3 attributes.",
  GT: "Please rate at most, 5 attributes.",
  ND: "Visit date required.",
  FD: "Visit date must be the past",
  PD: "Visit date must be within 1 month",
};

const PlaceReview = ({ placeId, placeName }) => {
  const [date, setDate] = useState(null);
  const [errors, setErrors] = useState([]);

  const [atmosphere, setAtmosphere] = useState(null);
  const [cleanliness, setCleanliness] = useState(null);
  const [decor, setDecor] = useState(null);
  const [drink, setDrink] = useState(null);
  const [entertainment, setEntertainment] = useState(null);
  const [food, setFood] = useState(null);
  const [service, setService] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [value, setValue] = useState(null);
  const [variety, setVariety] = useState(null);

  const user = getUser();
  const { uid } = user;



  /** getAttrFeedbacks
   *    collects the rated attributes
   *    returns a map of good and bad rated attributes
   */
  const getAttrFeedbacks = () => {
    var good = [];
    var poor = [];
    for (var i = 0; i < FEEDBACKS.length; i++) {
      if (eval(FEEDBACKS[i]) === "good") {
        good.push(FEEDBACKS[i]);
      } else if (eval(FEEDBACKS[i]) === "poor") {
        poor.push(FEEDBACKS[i]);
      }
    }
    return {good: good, poor: poor};
  }

  /** countAttrs()
   *    counts attributes with ratings
   *    returns the count
   */
  const countAttrs = () => {
    var attrs = getAttrFeedbacks();
    return attrs["good"].length + attrs["poor"].length;
  };


  /** compareDateInMonths()
   *    compares a date to today.
   *    param d the date to compare
   *    returns 1 if in the future
   *    returns 0 if in the past and within a month
   *    returns -1 if further in the past
   */
  const compareDateInMonths = (d) => {
    var td = new Date(Date.now());
    var vd = new Date(Date.parse(d));
    if (vd.getFullYear() > td.getFullYear()) {
      return 1;
    } else {
      if (vd.getYear() === td.getYear()) {
        if (vd.getMonth() === td.getMonth()) {
          // If same month, td > d days
          return vd.getDate() <= td.getDate() ? 0 : 1;
        } else {
          // If different months, check difference of 1
          if (td.getMonth() - vd.getMonth() === 1) {
            // If a month apart, td < d days
            return vd.getDate() >= td.getDate() ? 0 : -1;
          } else {
            // More than a month apart
            return -1;
          }
        }
      } else {
        // If not same year, check december-january
        if (td.getFullYear() - vd.getFullYear() === 1) {
          if (td.getFullYear() === 0 && vd.getFullYear() === 11) {
            // Do different month comparison again here
            return vd.getDate() >= td.getDate() ? 0 : -1;
          } else {
            return -1;
          }
        } else {
          return -1;
        }
      }
    }
  };

  /** trySubmit()
   *    handles form validation and submission
   *    updates error state
   *    or submits review
   */
  const trySubmit = () => {
    var e = [];
    // Attrubute validation
    var c = countAttrs();
    if (c < 3) {
      e.push("LT");
    } else if (c > 5) {
      e.push("GT");
    }

    // Date validation
    if (!date) {
      e.push("ND");
    } else {
      var d = compareDateInMonths(date);
      if (d < 0) {
        e.push("PD");
      } else if (d > 0) {
        e.push("FD");
      }
    }
    // Update state
    setErrors(e);
    if (e.length === 0) {
      console.log("SUBMIT!");
      submit();
    } else {
      for (var i = 0; i < e.length; i++) {
        console.log(e[i]);
      }
    }
  };

  /** submit()
   *   submits the form data to firestore document
   */
  const submit = () => {
    const doc_name = String(Date.parse(date)) + "_" + String(uid);
    const feedback = getAttrFeedbacks();
    const data = {
      placeId: placeId,
      userId: uid,
      visitDate: date,
      good: feedback["good"],
      poor: feedback["poor"]
    };
    firebase
      .firestore()
      .collection("reviews")
      .doc(doc_name)
      .set(data)
      .then(() => {
        console.log("Review posted...");
      })
      .then(() => {
        console.log("Navigate back to place details.");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error writing document: ", error);
      })
  };

  return (
    <View title={placeName}>
      <div className={styles.formContainer}>
        <div className={styles.formAttributesColumn}>
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
            attribute="decor"
            feedback={decor}
            setFeedback={setDecor}
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
        <div className={styles.formSubmitColumn}>
          <div className={styles.formErrorContainer}>
            <ul>
              {errors.map((value, index) => {
                return <li key={index}><MdErrorOutline style={{verticalAlign: 'middle'}}/> {ERRORS[value]}</li>;
              })}
            </ul>
          </div>
          <div className={styles.formDateContainer}>
            <div className={styles.formDateColumn}>
              <p>Enter a visit date:</p>
              <DatePicker onChange={setDate} value={date} />
            </div>
          </div>
          <div className={styles.formSubmitContainer}>
            <input
              className={styles.btnSubmit}
              type="button"
              value="Submit review"
              onClick={trySubmit}
            />
          </div>
        </div>
      </div>
    </View>
  );
};

export default PlaceReview;
