import React from "react";
import Child from "./Child";
// import SecondChild from "./SecondChild";

const Father = () => {
  const first = "first";
  const second = "second";

  const obj = {
    first: first,
    second: second,
  };

  return (
    <>
      <Child obj={obj} first={first} second={second} />
      {/* <SecondChild obj={obj} /> */}
    </>
  );
};

export default Father;
