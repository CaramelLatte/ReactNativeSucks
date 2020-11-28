import * as ActionTypes from "./ActionTypes";

export const favorites = (states = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_FAVORITE:
      if (states.includes(action.payload)) {
        return states;
      }
      return states.concat(action.payload);

    default:
      return states;
  }
};
