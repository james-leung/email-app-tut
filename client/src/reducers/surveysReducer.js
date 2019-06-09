import { FETCH_SURVEYS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      // make sure output is either a user model or false
      return action.payload || false;
    default:
      return state;
  }
}
