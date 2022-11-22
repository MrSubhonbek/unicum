import { createSlice } from "@reduxjs/toolkit";

export interface programState {
  track: string;
  program: string;
}

const initialState: programState = {
  track: "",
  program: "",
};

export const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {
    optTrack: (state, action) => {
      state.track = action.payload;
    },
    optProgram: (state, action) => {
      state.program = action.payload;
    },
  },
});

export const { optProgram, optTrack } = programSlice.actions;

export default programSlice.reducer;
