import { IUser, loginUserRequest } from "../../actions/auth/types";
import API from '../../api/api'

const register = (payload: IUser) => API('user/register', null, 'POST', payload);

const login = (payload: loginUserRequest) => API('user/login', null, 'POST', payload);

const logout = () => localStorage.removeItem("user");

export {
    register,
    login,
    logout,
};