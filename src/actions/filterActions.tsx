import { FILTERED } from "./types";

export const filtered = (search: string) => (dispatch: any) => {console.log("isFetchingSearch", search);
    dispatch({
        type: FILTERED,
        payload: search
    });
};