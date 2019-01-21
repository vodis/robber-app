import { FILTERED } from "../actions/types";

const initialState = {
    search: '',
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case FILTERED:
            return {
                ...state,
                search: action.payload
            };
        default:
            return state;
    }
}