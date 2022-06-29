/* eslint-disable import/no-anonymous-default-export */
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from "../../actions/auth/actionTypes";
//@ts-ignore
const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };
export default function (state = initialState, action: { type: string; payload?: any; }) {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                error: null,
                registerSuccess: true
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                error: payload,
                registerSuccess: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: { ...payload, accessToken: payload.accessToken },
                error: ''
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                error: payload
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                error: null,
                registerSuccess: false
            };
        default:
            return state;
    }
}