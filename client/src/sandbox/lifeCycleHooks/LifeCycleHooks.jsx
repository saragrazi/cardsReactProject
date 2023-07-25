import { Box, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";

const getTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const mill = date.getMilliseconds();
  return `${time}.${mill}`;
};

const LifeCycleHooks = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log(`in useEffect: ${getTime()}`);
    // return () => console.log(`destroy useEffect: ${getTime()}`);
    // setCount((prev) => prev + 1);
  }, [count, num]);

  return (
    <Container maxWidth="lg">
      {console.log(`Initial render: ${getTime()}`)}
      <Box>Count: {count}</Box>
      <Box>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </Button>
      </Box>
      <Box>Num: {num}</Box>
      <Box>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setNum((prev) => prev + 1)}
        >
          +
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setNum((prev) => prev - 1)}
        >
          -
        </Button>
      </Box>
    </Container>
  );
};

export default LifeCycleHooks;
