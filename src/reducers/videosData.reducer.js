import { GET_VIDEOS_DATA } from "../actions/actionTypes";
import { stat } from "fs";

export function videos(state = {}, action) {
  switch (action.type) {
    case GET_VIDEOS_DATA:
      return Object.assign({}, state, {
        filtered: get(action.data, "results")
      });
    default:
      return state;
  }
}
