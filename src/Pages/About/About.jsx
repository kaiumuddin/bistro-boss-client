import React from "react";
import { Helmet } from "react-helmet-async";

const About = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h2>About</h2>
    </>
  );
};

export default About;
