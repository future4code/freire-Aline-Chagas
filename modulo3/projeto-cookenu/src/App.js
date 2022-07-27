import React from "react";
import { ThemeProvider } from "styled-components";
import Router from "./routes/Router";
import theme from "./constants/theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
