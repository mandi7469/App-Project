import { DO_SIGNIN, DO_LOGOUT } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case DO_SIGNIN:
      return {
        ...state,
        user: {
          name: action.name,
          authenticated: true,
        },
      };
    case DO_LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};
