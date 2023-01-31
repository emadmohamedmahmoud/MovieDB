import {applyMiddleware, createStore} from "redux"
import CounterReducer from "./CounterReducer"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import MoviesReducer from "./MoviesReducer";
import combineReducers from "./CombineReducers"

const store= createStore( CounterReducer,composeWithDevTools(applyMiddleware(thunk)))


export default store;