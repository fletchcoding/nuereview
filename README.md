# NueReview
## A venue review system

This is an implementation of my place review system using ReactJS and Gatsby with
a Firebase Firestore NoSQL backend, using Firebase functions for server operations.

# TODO:
- Profile page
  - Lists user's most-current reviews by date.
- Search function to find venues
    - Upgrade to 'Full text search'
        - https://firebase.google.com/docs/firestore/solutions/search
        - Initally search firestore documents for matching place information (Name, address etc)
        - Followed by current google places api place search and details collection
- Review form
- Scorecard function
    - Server-side function to calculate attribute scores
- Place details
  - Scorecard displayed as badges

# ISSUES:
- When a place is not found in firestore, PlaceDetails returns null place,
  - I believe this is due to the background processing within the onCreate firestore function.
  Will need to find a way to either delay the request from the web-page to retrieve details,
  or do the onCreate processing beforehand.


# Considerations
- With seperate back-end project, there may now be duplicate TODO entries. ensure both are kept up-to-date or switch to issue/task control system.
.
.

Thankyou for viewing my project!

Please feel free to leave comments and notes on potential improvements.
I hope you like the concept

#### Luke
