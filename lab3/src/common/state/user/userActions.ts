import { IUser } from "../../interfaces";

export enum UserActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
}

export const login = (user: IUser) => ({
    type: UserActionTypes.LOGIN,
    payload: user,
});
interface ILoginAction {
    type: UserActionTypes.LOGIN;
    payload: IUser;
}

export const logout = () => ({
    type: UserActionTypes.LOGOUT,
});
interface ILogoutAction {
    type: UserActionTypes.LOGOUT;
}

export type UserActions = 
    | ILoginAction 
    | ILogoutAction;