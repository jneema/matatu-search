import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startingPoint: "cbd",
  destination: "",
};

const matatuSlice = createSlice({
  name: "matatus",
  initialState,
  reducers: {
    SetDestination: (state, action) => {
      state.destination = action.payload;
      localStorage.setItem("Destination", state.destination);
    },
    SetStartingPoint: (state, action) => {
      state.startingPoint = action.payload;
      localStorage.setItem("Starting Point", state.startingPoint);
    },
  },
});

export const { SetDestination, SetStartingPoint } = matatuSlice.actions;

export default matatuSlice.reducer;
