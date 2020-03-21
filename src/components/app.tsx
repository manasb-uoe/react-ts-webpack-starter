import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";

export const Header = () => (
  <AppBar style={{ margin: 0, padding: 0 }} position="static" color="primary">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Webpack Starter for React + TypeScript
      </Typography>
    </Toolbar>
  </AppBar>
);

export const App = () => (
  <div>
    <Header />
  </div>
);
