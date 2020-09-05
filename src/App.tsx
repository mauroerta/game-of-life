import React from "react";
import { Gol } from "./components";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { gofReducer } from "./state";

const store = configureStore({
  reducer: gofReducer,
  devTools: process.env.NODE_ENV !== "production",
});

function App() {
  return (
    <Provider store={store}>
      <Gol />
    </Provider>
  );
}

export default App;
