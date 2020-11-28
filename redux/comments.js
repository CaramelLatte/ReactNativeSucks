import { StackViewTransitionConfigs } from "react-navigation-stack";
import * as ActionTypes from "./ActionTypes";

export const comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.ADD_COMMENT:
      action.payload.id = state.comments.length;

      return { ...state, comments: states.comments.concat(action.payload) };

    default:
      return state;
  }
};
