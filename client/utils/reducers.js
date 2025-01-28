import {
  DO_SIGNIN,
  DO_LOGOUT,
  UPDATE_EDIT_TEXT,
  DELETE_ENTRY,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case DO_SIGNIN:
      return {
        ...state,
        user: {
          name: action.name,
          authenticated: true,
        },
        userEntry: ["test" ,"test2", "test3"]
      };
    case UPDATE_EDIT_TEXT:
      return {
        ...state,
        userEntry: action.userEntry,
      };
    case DELETE_ENTRY:
      return {
        ...state,
        userEntry: "",
      };
    case DO_LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
