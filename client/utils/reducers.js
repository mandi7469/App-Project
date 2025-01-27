import { DO_SIGNIN } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case DO_SIGNIN:
      return {
        ...state,
       user:{
        name: action.name,
        authenticated: true
       }
      };
    default:
      return state;
  }
};
