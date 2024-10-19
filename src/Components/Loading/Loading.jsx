import React from "react";
import PropTypes from "prop-types";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-lg text-gray-500">{message}</p>
    </div>
  );
};

Loading.propTypes = {
  message: PropTypes.string,
};

export default Loading;
