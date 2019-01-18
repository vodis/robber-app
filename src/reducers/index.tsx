import { combineReducers } from "redux";
import marketStoreReducer from './marketStoreReducer';
import knapsackReducer from './knapsackReducer';
import filterReducer from './filterReducer';

export default combineReducers({
    getProducts: marketStoreReducer,
    fetchSize: knapsackReducer,
    fetchFilter: filterReducer
});
