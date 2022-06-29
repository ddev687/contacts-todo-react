import {
    REGISTER,
    LOGIN,
} from "./actionTypes";

export interface IUser {
    fullName: string,
    email: string,
    password: string
}

export interface loginUserRequest {
    email: string,
    password: string
}

export interface registerUserPayload {
    user: IUser
}

export interface registerUser {
    type: typeof REGISTER;
    user: IUser;
}

export interface loginUserPayload {
    token: string
}

export type loginUser = {
    type: typeof LOGIN;
    user: loginUserRequest;
};

export type UserActions = registerUser | loginUser;