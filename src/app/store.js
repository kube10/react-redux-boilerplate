import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../store/itemsSlice";
import gitUsersReducer from "../store/gitUsersSlice";

export default configureStore({
  reducer: {
    items: itemsReducer,
    gitUsers: gitUsersReducer,
  },
});
