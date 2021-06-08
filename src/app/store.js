import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../store/itemsSlice";

export default configureStore({
  reducer: {
    items: itemsReducer,
  },
});
