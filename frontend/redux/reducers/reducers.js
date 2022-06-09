import { createSlice } from "@reduxjs/toolkit";
import data from "../../assets/data/postdata.json";
import {
  filterByComments,
  filterByLikes,
  filterByTime
} from "../../helpers/sortData";

const savedInitialState = {
  loggedIn: false,
  filter: null,
  posts: JSON.parse(data),
  query: ""
};

export const reduxStore = createSlice({
  name: "reduxStore",
  initialState: savedInitialState,
  reducers: {
    updateFilter: (state, action) => {
      if (action.payload === "recent") {
        state.posts = filterByTime(JSON.parse(data));
      } else if (action.payload === "likes") {
        state.posts = filterByLikes(JSON.parse(data));
      } else if (action.payload === "comments") {
        state.posts = filterByComments(JSON.parse(data));
      } else state.posts = JSON.parse(data);
    },
    updatePost: (state, action) => {
      state.posts = action.payload;
    },
    updateQuery: (state, action) => {
      state.query = action.payload;
    }
  }
});

export const { updateFilter, updatePost, updateQuery } = reduxStore.actions;

export default reduxStore.reducer;
