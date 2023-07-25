import { Button } from "@mui/material";
import React from "react";

const Events = () => {
  const onClick = () => {
    console.log("hey");
  };

  const onClickWithText = (text) => console.log(text);

//   const onClickMuiButton = () => console.log("MUI Button");

  const onClickMuiButtonWithText = (text) => console.log(text);

  const onClickMuiButtonWithEvent = e => console.log(e);

  return (
    <div>
      <button onClick={onClick}>onClick</button>
      <button onClick={() =>onClickWithText("text")}>onClickWithText</button>
      <Button variant="contained" onClick={() => onClickMuiButtonWithText("Mui Text")}>MUI Button With Text</Button>
      <Button variant="contained" onClick={(e) => onClickMuiButtonWithEvent(e)}>MUI Button Event</Button>
    </div>
  );
};

export default Events;
