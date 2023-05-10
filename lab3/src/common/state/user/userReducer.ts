import { IUser } from "../../../interfaces/IUser"
import { UserActions, UserActionTypes } from "./userActions";

export interface IUserState {
    user: IUser | null;
}

const user = localStorage.getItem("user") 
    ? JSON.parse(localStorage.getItem("user")!) 
    : null;
export const initialState: IUserState = {
    user: user,
}

export const userReducer = (state: IUserState = initialState, action: UserActions): IUserState => {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            localStorage.setItem("user", JSON.stringify(action.payload));
            return {
                ...state,
                user: action.payload,
            }
        case UserActionTypes.LOGOUT:
            localStorage.removeItem("user");
            return {
                ...state,
                user: null,
            }
        default:
            return state
    }
}