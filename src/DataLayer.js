import React, { createContext, useContext, useReducer } from "react";


  // 用意確認
export const DataLayerContext = createContext();

export const DataLayer = ({initialState, reducer, children }) => {
  return (
  <DataLayerContext.Provider value={useReducer(reducer,initialState )}>
    {children}
  </DataLayerContext.Provider>
)};

export const useDataLayerValue = () => useContext(DataLayerContext);
// console.log("useDataLayerValue",useDataLayerValue)