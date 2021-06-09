import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  gitUsers: [],
  status: "idle",
  errors: null,
};

export const fetchGitUsers = createAsyncThunk(
  "gitUsers/fetchGitUsers",
  async () => {
    const res = await fetch("https://api.github.com/users");
    const gitUsers = res.json();
    return gitUsers;
  }
);

const gitUsersSlice = createSlice({
  name: "gitUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGitUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchGitUsers.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.gitUsers = state.gitUsers.concat(action.payload);
    },
    [fetchGitUsers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectAllGitUsers = (state) => state.gitUsers.gitUsers;

export default gitUsersSlice.reducer;
