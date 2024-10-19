import React from "react";
import usePageTitle from "../../hooks/usePageTitle";

const About = ({ title }) => {
  usePageTitle("About Us");

  return (
    <>
      <h2>About</h2>
    </>
  );
};

export default About;
