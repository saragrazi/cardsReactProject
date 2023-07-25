import { node } from "prop-types";
import React, { useContext, useEffect, useState } from "react";

const NameContext = React.createContext(null);

export const NameProvider = ({ children }) => {
  // const [name, setName] = useState("Eliran");
  const [name, setName] = useState("");

  useEffect(() => {
    setName("Eliran");
  }, []);

  // const obj = {{ name, setName }}

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export const useName = () => {
  const context = useContext(NameContext);
  if (!context) throw Error("useName must use NameProvider");
  return context;
};

NameProvider.propTypes = {
  children: node.isRequired,
};