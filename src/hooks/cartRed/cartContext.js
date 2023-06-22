import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from "./cartReducer";

const INITIAL_STATE = {
  currentProduct: /* JSON.parse(localStorage.getItem("user")) || */ [],
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};