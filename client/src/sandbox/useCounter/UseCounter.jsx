import React from "react";
import useCounter from "../custom-hook";
import { Box, Button, Typography } from "@mui/material";

const UseCounter = () => {
  const [counter, increament, decreament, reset] = useCounter(10);
  return (
    <Box>
      <Typography>{counter}</Typography>
      <Box>
        <Button variant="outlined" onClick={increament}>
          +
        </Button>
        <Button variant="outlined" onClick={decreament}>
          -
        </Button>
        <Button variant="outlined" onClick={reset}>
          reset
        </Button>
      </Box>
    </Box>
  );
};

export default UseCounter;
