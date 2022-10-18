import { TTodoList } from "../../types/todo";
import actionTypes from "./actionTypes";

export const fetchList = (response: TTodoList) => {
  return {
    type: actionTypes.FETCH,
    payload: response,
  };
};

export const addList = (response: TTodoList) => {
  return {
    type: actionTypes.ADD,
    payload: response,
  };
};

export const removeList = (response: TTodoList) => {
  return {
    type: actionTypes.REMOVE,
    payload: response,
  };
};
export const toggleList = (response: TTodoList) => {
  return {
    type: actionTypes.TOGGLE,
    payload: response,
  };
};
export const FEUPDATETCH = (response: TTodoList) => {
  return {
    type: actionTypes.FEUPDATETCH,
    payload: response,
  };
};
export type Actions =
  | ReturnType<typeof fetchList>
  | ReturnType<typeof addList>
  | ReturnType<typeof removeList>
  | ReturnType<typeof toggleList>
  | ReturnType<typeof FEUPDATETCH>;
