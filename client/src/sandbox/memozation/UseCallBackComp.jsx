import { Box, Typography } from "@mui/material";
import React, { useState, useCallback } from "react";
import ButtonComp from "./ButtonComp";

const UseCallBackComp = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  const incCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);
  const incNum = useCallback(() => {
    setNum((prev) => prev + 1);
  }, [num]);

  return (
    <Box>
      <Box>
        <Typography>Count: {count}</Typography>
        <Typography>Num: {num}</Typography>
      </Box>
      <Box>
        <ButtonComp handleClick={incCount}>inc-Count</ButtonComp>
        <ButtonComp handleClick={incNum}>inc-Num</ButtonComp>
      </Box>
    </Box>
  );
};

export default UseCallBackComp;
