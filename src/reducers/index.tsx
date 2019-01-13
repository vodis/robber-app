import { combineReducers } from "redux";
import knapsackReducer from './knapsackReducer';

export default combineReducers({
    fetchSize: knapsackReducer
});
