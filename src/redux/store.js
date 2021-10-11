import { createStore, applyMiddleware } from "redux"
import allReducers from './reducers/index'
import thunk from "redux-thunk"
import logger from "redux-logger";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancer= composeEnhancers(applyMiddleware(thunk, logger))

const store = createStore(allReducers, applyMiddleware(thunk, logger))

export default store