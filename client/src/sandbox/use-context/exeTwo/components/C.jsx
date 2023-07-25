import React from "react";
import { useName } from "../NameProvider";

const C = () => {
  const { name, setName } = useName();
  return (
    <>
      <div>Name in C: {name}</div>
      <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default C;