import { NEW_STORE } from "../actions/types";

const initialState = {
    store: []
};

export default function (state = initialState, action: any) {
    console.log("Reducing_New_Store", state);
    switch (action.type) {
        case NEW_STORE:
            let unique = true;
            state.store.forEach((item: any) => {
                if (item === action.payload) {
                    return unique = false;
                }
            });

            if (action.payload !== undefined && unique) {
                // state.store.push(action.payload);
                return {
                    ...state,
                    store: state.store.concat(action.payload)
                };
            }
        default:
            return state;
    }
}
