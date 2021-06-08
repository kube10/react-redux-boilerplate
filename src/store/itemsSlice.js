import { createSlice, nanoid } from "@reduxjs/toolkit";

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
    itemAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
          },
        };
      },
    },
  },
});

export const { itemAdded } = itemsSlice.actions;

export default itemsSlice.reducer;
