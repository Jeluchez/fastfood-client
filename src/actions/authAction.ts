import { fetchData } from "../helpers/fetchData";
import { IAuth } from "../interfaces/interfacesTypes";
import { AppThunk } from "../store/store";
import { types } from "../types/types";

export const startlogin = (data: any): AppThunk => {
    return async (dispatch) => {
        const body = await fetchData('auth/login', data, 'POST');

        if (body.ok) {
            const { iduser:id, name, email } = body.data.user;
            
            dispatch(login(
                {
                    id,
                    name,
                    email
                }
            ))
        }else{

        }
    }
}


export const login = (user: IAuth) => ({
    type: types.login,
    payload: user
});