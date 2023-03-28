import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "core/store/index";

interface MoviesState {
  movies: string[];
}

const initialState: MoviesState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    increment: (state) => {
      state.movies.push("test");
    },
    decrement: (state) => {
      state.movies.shift();
    },
    incrementByAmount: (state, action: PayloadAction<string[]>) => {
      state.movies = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = moviesSlice.actions;

export const selectCount = (state: RootState) => state.movies;

export default moviesSlice.reducer;
