import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import PlaceReview from "../components/PlaceReview"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"

const App = ({ location }) => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/placereview" component={PlaceReview} placeId={location.state.placeId} placeName={location.state.placeName} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
