import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  // console.log(action);

  switch (action.type) {
    case FETCH_USER:
      // make sure output is either a user model or false
      return action.payload || false;
    default:
      return state;
  }
}
