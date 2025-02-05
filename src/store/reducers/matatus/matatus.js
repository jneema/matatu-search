import {
  SELECTED_MATATU,
  SELECTED_ROUTE,
  FETCH_ROUTES,
  FETCH_MATATUS,
} from "./actions";

export const initialState = {
  routes: [],
  selectedRoute: null,
  matatus: [],
  selectedMatatu: null,
};

const routesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROUTES:
      return {
        ...state,
        routes: action.payload,
      };

    case SELECTED_ROUTE:
      return {
        ...state,
        selectedRoute: action.payload,
      };

    case FETCH_MATATUS:
      return {
        ...state,
        matatus: action.payload,
      };
    case SELECTED_MATATU:
      return {
        ...state,
        selectedMatatu: action.payload,
      };

    default:
      return state;
  }
};

export default routesReducer;
