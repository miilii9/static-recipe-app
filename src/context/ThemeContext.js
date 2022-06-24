import { createContext, useReducer } from "react";
import React from "react";

export const ThemeContext = createContext();

const reducFunction = (state, action) => {
  switch (action.type) {
    case "CHANGE-COLOR":
      return { ...state, color: action.payload };
    case "CHANGE-MODE":
      return {...state , mode:action.payload}
    default:
      return state;
  }
};
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducFunction, {
    color: "blue",
    mode: "light"
  });
  const changeColor = (color) => {
    dispatch({ type: "CHANGE-COLOR", payload: color });
  };
  const changeMode = (mode) => {
    dispatch({type:"CHANGE-MODE"  , payload:mode})
  }
  return (
    <ThemeContext.Provider value={{ ...state, changeColor , changeMode}}>
      {children}
    </ThemeContext.Provider>
  );
}
