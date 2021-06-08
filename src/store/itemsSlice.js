import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    text: "I'm the first list item",
  },
  {
    id: 2,
    text: "I'm the second list item",
  },
];

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    itemAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { itemAdded } = itemsSlice.actions;

export default itemsSlice.reducer;
