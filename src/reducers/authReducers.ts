import { authAction, IAuth } from "../interfaces/interfacesTypes"
import { types } from "../types/types"

const initialState= {
    loading:false
}

export const authReducers = (state = initialState, action:authAction) => {

    switch (action.type) {
        case types.login:
            console.log(action.payload);
            return {
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
            }
        case types.logout:
            return initialState
        default:
            return state;
    }
}