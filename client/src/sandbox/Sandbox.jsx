import React from "react";
// import LifeCycleHooks from "./lifeCycleHooks/LifeCycleHooks";
import { AppBar, Container, Toolbar } from "@mui/material";
import NavItem from "../routes/NavItem";
import SANDBOX_ROUTES from "../routes/sandboxRoutesModel";
import { Outlet } from "react-router-dom";

const Sandbox = () => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <NavItem label="loops" to={SANDBOX_ROUTES.LOOPS} color="black" />
          <NavItem
            label="use-state"
            to={SANDBOX_ROUTES.USE_STATE}
            color="black"
          />
          <NavItem label="hooks" to={SANDBOX_ROUTES.HOOKS} color="black" />
          <NavItem
            label="use-coutner"
            to={SANDBOX_ROUTES.USE_COUNTER}
            color="black"
          />
          <NavItem
            label="use-callback-btn"
            to={SANDBOX_ROUTES.USE_CALLBACK_BTN}
            color="black"
          />
           <NavItem
            label="use-context"
            to={SANDBOX_ROUTES.USE_CONTEXT}
            color="black"
          />
           <NavItem
            label="forms"
            to={SANDBOX_ROUTES.FORMS}
            color="black"
          />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
};

export default Sandbox;
