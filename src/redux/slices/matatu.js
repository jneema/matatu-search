import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedRoute: "",
  startingPoint: "cbd",
  destination: "",
  selectedMatatuType: "",
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
    SetSelectedRoute: (state, action) => {
      state.selectedRoute = action.payload;
      localStorage.setItem("Route", state.selectedRoute);
    },
    SetSelectedMatatuType: (state, action) => {
      state.selectedMatatuType = action.payload;
      localStorage.setItem("Matatu type", state.selectedMatatuType);
    },
  },
});

export const {
  SetDestination,
  SetStartingPoint,
  SetSelectedRoute,
  SetSelectedMatatuType,
} = matatuSlice.actions;

export default matatuSlice.reducer;
