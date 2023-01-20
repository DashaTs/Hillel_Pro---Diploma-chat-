import { combineReducers } from "redux";

const initial = {};
const reducer = (state = initial) => state;
const rootReducer = combineReducers({ reducer});

export default rootReducer;

export type IState = ReturnType<typeof rootReducer>;