import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //wrapping the app with the data layer

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {/* our app is a children */}
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
//allows us to acces data from the data layer
