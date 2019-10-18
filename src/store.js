import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { filters } from "./reducers/filters";
import { tasks } from "./reducers/tasks";




export function initializeStore() {
  return createStore(
    combineReducers({ filters, tasks }),
    {},
    applyMiddleware(thunkMiddleware)
  );
}
