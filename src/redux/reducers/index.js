import loginReducer from "./loginReducer";
import todoReducer from "./todoReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({ loginReducer, todoReducer })

export default allReducers