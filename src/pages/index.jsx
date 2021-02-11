import React, { useState, createContext }  from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import View from "../components/View";
import Status from "../components/Status";
//import firebase from "gatsby-plugin-firebase";
//import { getPlaces } from "../utils/places";


const Index = () => {
  //getPlaces(firebase);
  return (
    <Layout>
      <View title="Place Review System">
        <p>
          This site is a proof of concept for one of my personal projects. I am
          very passionate about this idea as I have been building upon its core
          for some time now. I began theorising it during my time spent working
          in the hospitality industry, where I saw a multi-faceted problem that
          required a new solution
        </p>
        <br />
        <h2> The current review paradigm </h2>
        <h3> Subjectivity </h3>
        <p>
          From a user's perspective, reviews are adequate - they allow a quick
           glimpse into a business's failures and successes.
          The 5 star rating is a good indicator of popularity, as it summarises
          a vast number of reviews into a single quantifiable attribute which
          is easy to comprehend, and make comparisons.
          This would work, if it were not for the subjective nature of a review. <br />
          What does 5 stars mean?<br />
          What does 1 star mean?<br />
          What should I expect from a 3 star venue?<br />
          Consider the system's users as a snapshot of the entire population.
          The variance in perspectives results in differing value systems that
          in turn affect their perceived experience at each venue. The current
          system does not take into consideration what people desire.
        </p>
        <h3> Amiguity </h3>
        <p>
          From a venue's perspective, reviews are just horrible - they allow a
          public platform for irreversible criticism and potential for volatile
          future of trade.
          No business wants to receive a bad review, because it is damning to
          reputation, but this leaves no room for constructive criticism and future improvement. One customers'
          unfortunate experience on an off day for a worker, or rough day themselves,
          could result in a permanent mark on an otherwise perfect record.
          Reviews can act as a barrier to entry for new restaurants, immediately
          stamping out variety for consumers and hindering industry growth.
          A small takeaway restaurant could never attempt to compare to a 'hatted'
          restaurant, yet is expected to compete on the same 5 star spectrum,
          despite offering a different service.
        </p>
        <br />
        <h2>The solution?</h2>
        <h3>Venue attributes</h3>
        <p>
          Through the pre-definition of venue attributes, leaving feedback could be
          a guided process, enabling reviews to contain structured datapoints,
          that correlate to a business's goals.
          The attribute system allows for better categorisation of venues through
          the comparison of specific traits. For example, hatted restaurants might
          be compared on their service and quality scores, whereas takeaway
          restaurants on their value and speed.
          A place's visual record would display only their positive scores,
          abstracting away negativity and ensuring they are only quantified on
          their merits.
          With an 'active' current review per-person per-place system, the negative
          feedback datapoints can then be used by businesses to understand the
          key areas that need adjustment. A platform that enables a communication
          channel between businesses and reviewers, can facilitate opportunities
          to improve on their previous feedback through offers to entice return
          visits.
        </p>
      </View>
    </Layout>
  );
};

export default Index;
