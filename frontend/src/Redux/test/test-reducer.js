import { TEST } from "../types/actions-types";
const intialstate = {
  message: "",
};

export const testReducer = (state = intialstate, action) => {
  switch (action.type) {
    case TEST:
      intialstate.message = action.payload;
      return state;
    default:
      return state;
  }
};
