import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../modules/root/rootSlice";
export const store = configureStore({
  reducer: { root: rootReducer },
});
export type AppDispatch = typeof store.dispatch;
