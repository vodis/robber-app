import { NEW_STORE } from "./types";

// export const newStore = (products: any) => ({
//     type: NEW_STORE,
//     payload: products
// });

export const newStore = (products: object) => (dispatch: any) => {
    dispatch({
        type: NEW_STORE,
        payload: products
    });
};