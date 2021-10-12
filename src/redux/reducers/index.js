import authReducer from "./authReducer";
import todoReducer from "./todoReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({ authReducer, todoReducer })

export default allReducers