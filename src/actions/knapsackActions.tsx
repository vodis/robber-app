import { NEW_KNAPSACK_SIZE } from "./types";

export const newKnapsackSize = (currentSize: number) => (dispatch: any) => {
    dispatch({
        type: NEW_KNAPSACK_SIZE,
        payload: currentSize
    });
};