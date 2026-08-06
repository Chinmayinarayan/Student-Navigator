import { createContext, createElement, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return createElement(
    AuthContext.Provider,
    {
      value: {
        user,
        setUser,
      },
    },
    children
  );
}

export default AuthProvider;
