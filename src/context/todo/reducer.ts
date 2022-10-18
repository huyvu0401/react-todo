import React from "react";
import actionTypes from "./actionTypes";
import { Actions } from "./action";
export const initState = {};

export const reducer = (state: any, action: Actions) => {
  const { type, payload } = action;
  const cloneData = JSON.parse(JSON.stringify({ ...payload }));
  switch (type) {
    case actionTypes.FETCH:
      return cloneData;
    case actionTypes.ADD:
      return cloneData;
    case actionTypes.REMOVE:
      return cloneData;
    case actionTypes.TOGGLE:
      return cloneData;
    case actionTypes.FEUPDATETCH:
      return cloneData;
    default:
      throw new Error();
  }
};
