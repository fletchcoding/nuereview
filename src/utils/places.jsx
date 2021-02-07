
export const getPlaces = (firebase) => {

  return new Promise(resolve => {
    var placeRef = firebase.firestore().collection('places').doc('thefakecafe_fakeville');

    placeRef.get().then((doc) => {
      if(doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        //doc.data() will be undefined in this case
        console.log("No such document");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  })
}
