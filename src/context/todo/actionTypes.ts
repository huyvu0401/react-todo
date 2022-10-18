type ActionTypes = {
  FETCH: string;
  ADD: string;
  REMOVE: string;
  TOGGLE: string;
  FEUPDATETCH: string;
};

const actionTypes: ActionTypes = {
  FETCH: "FETCH",
  ADD: "ADD",
  REMOVE: "REMOVE",
  TOGGLE: "TOGGLE",
  FEUPDATETCH: "FEUPDATETCH",
} as const;

export default actionTypes;
