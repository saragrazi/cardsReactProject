import React from "react";
import PropTypes from "prop-types";

const PropTypesChild = ({ str, number, oneOfType, oneOf, obj, arr, arrWithDiffTypes }) => {
  return <div>text</div>;
};

PropTypesChild.propTypes = {
  str: PropTypes.string.isRequired,
  number: PropTypes.number,

  oneOfType: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  oneOf: PropTypes.oneOf(["eliran", "Eliran"]).isRequired,
  
  arr: PropTypes.arrayOf(PropTypes.number),
  obj: PropTypes.objectOf(PropTypes.string),

  arrWithDiffTypes: PropTypes.array,
};

export default PropTypesChild;
