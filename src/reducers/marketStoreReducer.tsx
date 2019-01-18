import { FETCH_PRODUCTS, NEW_PRODUCT } from "../actions/types";

const initialState = {
    items: [],
    item: {}
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_PRODUCT:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}