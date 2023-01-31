import {combineReducers} from "redux";
import CounterReducer from "./CounterReducer";
import MoviesReducer from "./MoviesReducer";



export default combineReducers({
    CountR: CounterReducer,
    MoviesListR: MoviesReducer,
})