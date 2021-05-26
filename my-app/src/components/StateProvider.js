// setup data layer

// we need this to track the basket

import React, { createContext, useContext, useReducer } from "react";
import { initialState } from "./reducer";

// this is the data layer
export const StateContext = createContext([initialState]);

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is to use it inside a component
export const useStateValue = () => useContext(StateContext);
