import React from "react";
import C from "./C";
import { useName } from "../NameProvider";

const B = () => {
  const { name } = useName();
  return (
    <>
      <div>name in B: {name}</div>
      <C />
    </>
  );
};

export default B;
