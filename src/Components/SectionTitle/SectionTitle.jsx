import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-4xl font-extrabold text-primary uppercase">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-lg text-text">{subtitle}</p>}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default SectionTitle;
