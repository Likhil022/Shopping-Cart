// src/store.js
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: "", // combine more reducers as your app grows
  },
});

export default store;
