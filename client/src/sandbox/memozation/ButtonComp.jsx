import { Button } from "@mui/material";
import { func, string } from "prop-types";
import React, { memo } from "react";

const ButtonComp = ({ handleClick, children }) => {
  console.log(`Rendering button: ${children}`);
  return (
    <Button variant="outlined" onClick={handleClick} color="primary">
      {children}
    </Button>
  );
};

ButtonComp.propTypes = {
  handleClick: func.isRequired,
  children: string.isRequired,
};

export default memo(ButtonComp);