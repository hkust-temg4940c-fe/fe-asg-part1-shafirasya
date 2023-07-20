import React, { FC } from "react";
import { CssBaseline, Stack } from "@mui/material";
import "./App.css";
import ToDoList from "./ToDoList";

const App: FC = () => {
  return (
    <Stack style={{ flexGrow: 1, height: "100vh", overflow: "auto" }}>
      <CssBaseline />
      <ToDoList />
    </Stack>
  );
};

export default App;
