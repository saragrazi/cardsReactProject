import { Button } from "@mui/material";
import React from "react";

const ChildEvents = ({ handleClick }) => {
  return <Button onClick={handleClick}> Click</Button>;
};

export default ChildEvents;
