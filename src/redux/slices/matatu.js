const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  matatus: [],
  selectedMatatu: null,
  routes: [],
  selectedRoute: null,
};

const matatuSlice = createSlice({
  name: "matatus",
  initialState,
  reducers: {
    fetchMatatus: (state, action) => {
      state.matatus = action.payload;
    },
    selectMatatu: (state, action) => {
      state.selectedMatatu = action.payload;
    },
    fetchRoutes: (state, action) => {
      state.routes = action.payload;
    },
    selectRoute: (state, action) => {
      state.selectedRoute = action.payload;
    },
  },
});

export const { fetchMatatus, selectMatatu, fetchRoutes, selectRoute } =
  matatuSlice.actions;

export default matatuSlice.reducer;
