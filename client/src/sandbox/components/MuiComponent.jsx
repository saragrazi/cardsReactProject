import { Button, IconButton, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";

const MuiComponent = () => {
  const obj = { color: "red", background: "black" };
  return (
    <>
      <Box sx={obj}>
        <Typography sx={{ m: 8 }}>Like div, span , p etc.</Typography>
        <Button color="success" variant="contained" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <IconButton color="success">
          <CheckCircleIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default MuiComponent;
