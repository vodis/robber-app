import { NEW_KNAPSACK_SIZE } from "../actions/types";

const initialState = {
    currentSize: 50,
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case NEW_KNAPSACK_SIZE:
            return {
                ...state,
                currentSize: action.payload
            };
        default:
            return state;
    }
}