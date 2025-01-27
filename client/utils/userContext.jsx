// imports
import { createContext, useReducer, useContext } from "react";
import { reducer } from "./reducers";

const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
