import React from "react";
// import PropTypesChild from "./PropTypesChild";
import PropTypesShape from "./PropTypesShape";

const PropTypesFather = () => {
//   const obj = {
//     name: "david",
//   };
//   const arr = [1, 2, 3];

//   const arrWithDiffTypes = ["1", 1];

  //   return <PropTypesChild arrWithDiffTypes={arrWithDiffTypes}  obj={obj} arr={arr} str={"hello"} number={10} oneOfType={1} oneOf={"Eliran"}  />;

  const obj = {
    id: 10,
    name: "Eliran"
  };

  return <PropTypesShape obj={obj}/>;
};

export default PropTypesFather;
