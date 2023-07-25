import React, { useState } from "react";

const UseStateWithComplex = () => {
  const initName = {
    first: "Eliran",
    middle: "bla",
    last: "Dagan",
  };
  const [fullName, setFullName] = useState(initName);

  return (
    <div>
      <div>
        {fullName.first} {fullName.middle} {fullName.last}
      </div>

      <input
        type="text"
        placeholder="Enter first name"
        onChange={(e1) =>
          setFullName({
            middle: fullName.middle,
            last: fullName.last,
            first: e1.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="Enter middle name"
        onChange={(e1) => setFullName({ ...fullName, middle: e1.target.value })}
      />
      <input
        type="text"
        placeholder="Enter last name"
        onChange={(e2) => setFullName({ ...fullName, last: e2.target.value })}
      />
    </div>
  );
};

export default UseStateWithComplex;
