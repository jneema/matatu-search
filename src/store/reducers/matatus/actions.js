export const FETCH_ROUTES = "FETCH_ROUTES";
export const SELECTED_ROUTE = "SELECT_ROUTES";
export const FETCH_MATATUS = "FETCH_MATATUS";
export const SELECTED_MATATU = "SELECTED_MATATU";

export const fetchRoutes = (routes) => ({
  type: FETCH_ROUTES,
  payload: routes,
});

// Action to select a route
export const selectRoute = (route) => ({
  type: SELECTED_ROUTE,
  payload: route,
});

// Action to fetch matatus based on selected route
export const fetchMatatus = (matatus) => ({
  type: FETCH_MATATUS,
  payload: matatus,
});

// Action to select a matatu
export const selectMatatu = (matatu) => ({
  type: SELECTED_MATATU,
  payload: matatu,
});
