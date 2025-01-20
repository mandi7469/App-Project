// imports
import axios from "axios";
import { createContext, useState, useEffect } from "react";

// context object to share user data across components
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    
  // initialize user state with null initially
  const [user, setUser] = useState(null);

  // fetch user data on component
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
