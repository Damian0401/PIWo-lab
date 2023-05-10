import { IUser } from "../../../interfaces/IUser";

export enum UserActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
}

export const login = (user: IUser) => ({
    type: UserActionTypes.LOGIN,
    payload: user,
});
type LoginAction = ReturnType<typeof login>;

export const logout = () => ({
    type: UserActionTypes.LOGOUT,
    payload: null,
});
type LogoutAction = ReturnType<typeof logout>;

export type UserActions = 
    | LoginAction 
    | LogoutAction;