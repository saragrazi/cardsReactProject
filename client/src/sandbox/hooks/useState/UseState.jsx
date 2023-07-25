import React, { useState } from "react";

const UseState = () => {
  // const obj = {
  //   id: 5,
  //   name: "Eliran",
  // };

  //   const { id, name } = obj;
  //   const [counter, setCounter] = useState(0);
  const [name, setName] = useState("default");

  //   const changeCount = (term) => {
  //     if (term === "+") {
  //       //   return setCounter(counter + 1);
  //       return setCounter((prev) => prev + 1);
  //     }
  //     if (term === "-") {
  //       return setCounter((prev) => prev - 1);
  //     }
  //     setCounter(0);
  //   };

  return (
    <div>
      {/* <div>{counter}</div>
      <button onClick={() => changeCount("+")}>+</button>
      <button onClick={() => changeCount("-")}>-</button>
      <button onClick={changeCount}>reset</button> */}
    
      <div>{name}</div>
      <button onClick={() => setName("Eliran")}>Set Name - Eliran</button>
      <button onClick={() => setName("Ron")}>Set Name - Ron</button>
      <button onClick={() => setName((prev) => `${prev} Dagan`)}>
        Add Last name - Dagan
      </button>
      <button onClick={() => setName("")}>Reset</button>
    </div>
  );
};

export default UseState;
