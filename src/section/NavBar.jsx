import * as React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function NavBar({ children }) {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Alexander Broadbent
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>{children}</Container>
    </>
  )
}
