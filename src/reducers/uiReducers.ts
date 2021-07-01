import { types } from "../types/types"


const initialState = {
    isloading: false,
};

export type uiAction = {
    type: string
}

export const uiReducers = (state = initialState, action:uiAction) => {

    switch (action.type) {
        case types.uiStartLoading:
            return {
                ...state,
                isloading: true
            }
        case types.uiFinishLoading:
            return {
                ...state,
                isloading: false
            }
        default:
            return state;
    }
}