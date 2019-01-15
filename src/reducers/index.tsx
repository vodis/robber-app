import { combineReducers } from "redux";
import knapsackReducer from './knapsackReducer';
import filterReducers from './filterReducers';

export default combineReducers({
    fetchSize: knapsackReducer,
    fetchFilter: filterReducers
});
