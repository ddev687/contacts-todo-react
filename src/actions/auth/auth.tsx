import * as types from './actionTypes';
import {
  IUser,
  loginUserRequest
} from './types';

export const registerUserAction = (user: IUser) => {
  return {
    type: types.REGISTER,
    user
  }
};

export const loginUserAction = (user: loginUserRequest) => {
  return {
    type: types.LOGIN,
    user
  }
};

export const logoutUserAction = () => {
  localStorage.removeItem("user")
  return {
    type: types.LOGOUT
  }
};